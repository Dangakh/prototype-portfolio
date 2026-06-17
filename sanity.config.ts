import { defineConfig, defineType, defineField } from 'sanity'

export default defineConfig({
  name: 'danga-portfolio',
  title: 'Danga Portfolio',
  projectId: 'ayloa7r2',
  dataset: 'production',
  schema: {
    types: [
      defineType({
        name: 'siteSettings',
        title: 'Site Settings',
        type: 'document',
        fields: [
          defineField({ name: 'heroRole', title: 'Hero Role', type: 'string' }),
          defineField({ name: 'heroTagline', title: 'Hero Tagline', type: 'string' }),
          defineField({ name: 'introBio', title: 'Intro Bio', type: 'text' }),
        ],
      }),
      defineType({
        name: 'client',
        title: 'Client',
        type: 'document',
        fields: [
          defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Upload an SVG, PNG, or WebP logo file',
            options: {
              accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
            },
          }),
          defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
          }),
        ],
        preview: {
          select: {
            title: 'name',
            media: 'logo',
          },
        },
      }),
    ],
  },
})
