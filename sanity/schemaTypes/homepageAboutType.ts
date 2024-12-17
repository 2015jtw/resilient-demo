import { defineType, defineField, defineArrayMember } from "sanity";

export const homepageAbout = defineType({
  name: "homepageAbout",
  title: "Homepage About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'The title for the about section (e.g., "About Us").',
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "Content for the about section.",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "socialAltText",
      title: "Social Media Alt Text",
      type: "array",
      description: "Descriptions for social media links.",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      description: "URLs for social media accounts.",
      of: [
        defineArrayMember({
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
});
