import { defineType, defineField, defineArrayMember } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'The title for the section (e.g., "Our Principal").',
    }),
    defineField({
      name: "InspirationalQuote",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Rich-text content describing the section.",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "imageLeft",
      title: "Image Alignment",
      type: "boolean",
      description: "Determines whether the image is aligned to the left.",
    }),
    defineField({
      name: "imageSrc",
      title: "Image",
      type: "image",
      description: "The image associated with the section.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Text describing the image",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "imageSrc",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
