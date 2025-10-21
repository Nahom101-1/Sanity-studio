import {defineField, defineType} from 'sanity'

export const relevantClasses = defineType({
  name: 'relevantClasses',
  title: 'Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'courseCode',
      title: 'Code',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courseName',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
      options: {
        list: ['A', 'B', 'C', 'D', 'F'],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
})

