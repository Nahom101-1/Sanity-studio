import { defineField, defineType } from "sanity";

export const picturesAssets = defineType({
  name: 'picture',
  title: 'Pictures Assets',
  type: 'image',
  options: {
    hotspot: true,
  },
  description: 'Pictures assets for the website',
});