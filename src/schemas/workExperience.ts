import {defineField, defineType} from 'sanity'

export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'picture',
      title: 'Company Logo or Picture',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo or image representing the company',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City/Country',
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
      description: 'Leave empty if currently working',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Currently Working',
      type: 'boolean',
      description: 'Check if you are currently working at this company',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of your role, achievements, or projects',
      rows: 3,
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities & Achievements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List your main responsibilities, tasks, or notable achievements',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this work experience should appear (lower numbers appear first)',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible on Website',
      type: 'boolean',
      description: 'Whether this work experience should be displayed on your website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'position',
      media: 'picture',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled Company',
        subtitle: subtitle || 'No position specified',
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
      title: 'Company Name',
      name: 'companyAsc',
      by: [{field: 'company', direction: 'asc'}],
    },
  ],
})