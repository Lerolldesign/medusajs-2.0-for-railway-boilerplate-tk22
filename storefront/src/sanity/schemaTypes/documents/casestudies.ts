import { DocumentTextIcon } from "@sanity/icons"

import { defineField, defineType } from "sanity"

export default defineType({
  name: "galerie",
  title: "Casestudies",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A slug is required for the post to show up in the preview",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value: any, context: any) =>
          context.defaultIsUnique(value, context),
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de la prise de vue",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      validation: (rule: any) => rule.max(200).error("Max 200 characters"),
    }),
    defineField({
      name: "categorie",
      title: "Categorie",
      type: "text",
      validation: (rule: any) => rule.max(200).error("Max 200 characters"),
    }),
    defineField({ name: "link", title: "Lien", type: "string" }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    }),
    defineField({
      name: "image1",
      title: "Photo miniature & page",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image1",
    },
    prepare({ title, media }: { title: string; media: any }) {
      return { title, media }
    },
  },
})
