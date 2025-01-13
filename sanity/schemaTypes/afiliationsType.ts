import { defineField, defineType } from "sanity";

export const afiliationsType = defineType({
  name: "afiliations",
  title: "Professional Affiliations",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Text describing the image",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
