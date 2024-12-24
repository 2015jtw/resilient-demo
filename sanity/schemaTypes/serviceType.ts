import { defineType, defineField } from "sanity";

export const ServiceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "heroText",
      type: "string",
    }),
    defineField({
      name: "intro",
      type: "text",
    }),
    defineField({
      name: "approach",
      type: "blockContent",
    }),
    defineField({
      name: "chooseUs",
      type: "blockContent",
    }),
    defineField({
      name: "hook",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      type: "image",
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
    defineField({
      name: "keyElements",
      type: "blockContent",
    }),
  ],
});
