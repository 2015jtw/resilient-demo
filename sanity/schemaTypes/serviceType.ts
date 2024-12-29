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
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
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
      name: "NavDescription",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          {
            title: "Crisis Response",
            value: "fire-extinguisher",
          },
          { title: "Crisis Leadership", value: "user" },
          {
            title: "Crisis Commmunication",
            value: "speech",
          },
          { title: "Risk Management", value: "flame" },
          { title: "Business Continuity", value: "handshake" },
          {
            title: "Assessments",
            value: "chart-line",
          },
        ],
      },
      description: "Choose an icon to represent this service",
    }),
    defineField({
      name: "keyElements",
      type: "blockContent",
    }),
  ],
});
