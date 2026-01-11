import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'object',
      fields: [
        defineField({
          name: 'number',
          title: 'Number',
          type: 'number',
          validation: (Rule: any) => Rule.required()
        }),
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'totalView',
      title: 'Total View',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }),
        defineField({
          name: 'publishedDate',
          title: 'Published Date',
          type: 'datetime',
          validation: (Rule: any) => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image'
        })
      ]
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'others',
      title: 'Others',
      type: 'object',
      fields: [
        defineField({
          name: 'isTodayPick',
          title: 'Is Today Pick',
          type: 'boolean'
        }),
        defineField({
          name: 'isTrending',
          title: 'Is Trending',
          type: 'boolean'
        })
      ]
    }),
    defineField({
      name: 'production',
      title: 'Production',
      type: 'boolean'
    })
  ]
})