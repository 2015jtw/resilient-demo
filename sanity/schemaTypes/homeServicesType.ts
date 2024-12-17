import { defineType, defineField, defineArrayMember } from "sanity";

export const homeServices = defineType({
  name: "homeServices",
  title: "Home Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the service.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "Detailed description of the service.",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "button_text",
      title: "Button Text",
      type: "string",
      description: "Text displayed on the button.",
    }),
    defineField({
      name: "button_link",
      title: "Button Link",
      type: "string",
      description: "URL the button links to.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Visual representation of the service.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Alternative text for the image.",
        },
      ],
    }),
    defineField({
      name: "socialAltText",
      title: "Social Alt Text",
      type: "string",
      description: "Alternative text for social sharing purposes.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
});
