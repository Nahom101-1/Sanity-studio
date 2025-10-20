import { defineField, defineType } from "sanity";

export const picturesAssets = defineType({
  name: 'picture',
  title: 'Pictures Assets',
  type: 'document',
  description: 'Pictures assets for the website',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the image',
    }),
  ],
});