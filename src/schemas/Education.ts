import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Picture of the educational institution',
    }),
    defineField({
      name: 'institution',
      title: 'Institution Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree/Certification',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fieldOfStudy',
      title: 'Field of Study',
      type: 'string',
      description: 'e.g., Computer Science, Business Administration, etc.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate', // Fixed typo from 'g,' to 'endDate'
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently studying',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Currently Studying',
      type: 'boolean',
      description: 'Check if you are currently studying at this institution',
      initialValue: false,
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'number',
      description: 'Your Grade Point Average (e.g., 3.8)',
      validation: (rule) => rule.min(0).max(4.0),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, State/Province, Country',
    }),
    defineField({
      name: 'institutionLogo',
      title: 'Institution Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo or image of the educational institution',
    }),
  ],
})
