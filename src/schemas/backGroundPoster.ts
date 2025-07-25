import {defineField, defineType} from 'sanity'
export const backGroundPoster = defineType({
  name: 'backGroundPoster',
  title: 'Background Poster',
  type: 'document',
  fields: [
    defineField({
      name: 'poster',
      title: 'Poster title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'poster', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
