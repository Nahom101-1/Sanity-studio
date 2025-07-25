import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
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
      name: 'endDate',
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
      name: 'gradeScale',
      title: 'Grade Scale',
      type: 'string',
      description: 'e.g., 4.0, 5.0, 100%',
      options: {
        list: [
          {title: '4.0 Scale', value: '4.0'},
          {title: '5.0 Scale', value: '5.0'},
          {title: 'Percentage', value: 'percentage'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, State/Province, Country',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of your studies, achievements, or relevant coursework',
      rows: 3,
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements & Honors',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List any honors, awards, or notable achievements',
    }),
    defineField({
      name: 'relevantCoursework',
      title: 'Relevant Coursework',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List relevant courses that showcase your skills',
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
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this education entry should appear (lower numbers appear first)',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible on Website',
      type: 'boolean',
      description: 'Whether this education entry should be displayed on your website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'institution',
      subtitle: 'degree',
      media: 'institutionLogo',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled Institution',
        subtitle: subtitle || 'No degree specified',
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Lowest First)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'End Date (Most Recent)',
      name: 'endDateDesc',
      by: [{field: 'endDate', direction: 'desc'}],
    },
    {
      title: 'Institution Name',
      name: 'institutionAsc',
      by: [{field: 'institution', direction: 'asc'}],
    },
  ],
})
