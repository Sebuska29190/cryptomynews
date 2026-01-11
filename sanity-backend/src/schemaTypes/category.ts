import { defineType, defineField, Rule } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ]
})