import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Brief description of the project',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detailed description with rich text formatting',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of technologies, frameworks, and tools used',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'web-app'},
          {title: 'Mobile App', value: 'mobile-app'},
          {title: 'Desktop Application', value: 'desktop-app'},
          {title: 'API/Backend', value: 'api-backend'},
          {title: 'Data Science', value: 'data-science'},
          {title: 'Machine Learning', value: 'machine-learning'},
          {title: 'Game Development', value: 'game-dev'},
          {title: 'Design/UI/UX', value: 'design'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'On Hold', value: 'on-hold'},
          {title: 'Planning', value: 'planning'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if project is ongoing',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main project image or screenshot',
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Additional screenshots or images of the project',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
      description: 'Link to live demo or deployed project',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository',
      type: 'url',
      description: 'Link to GitHub repository',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Demo URL',
      type: 'url',
      description: 'Link to video demonstration (YouTube, Vimeo, etc.)',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of main features and functionality',
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges & Solutions',
      type: 'text',
      description: 'Describe challenges faced and how you solved them',
      rows: 4,
    }),
    defineField({
      name: 'learnings',
      title: 'Key Learnings',
      type: 'text',
      description: 'What you learned from this project',
      rows: 3,
    }),
    defineField({
      name: 'collaborators',
      title: 'Collaborators',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Names of team members or collaborators',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags for filtering and categorization',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this project should appear (lower numbers appear first)',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Whether this project should be highlighted as a featured project',
      initialValue: false,
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible on Website',
      type: 'boolean',
      description: 'Whether this project should be displayed on your website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'projectType',
      media: 'featuredImage',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, media, status} = selection
      return {
        title: title || 'Untitled Project',
        subtitle: `${subtitle || 'No type'} • ${status || 'No status'}`,
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
      title: 'Project Title',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'isFeatured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
