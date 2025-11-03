import { defineField, defineType, type Rule } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
  defineField({ name: 'title', type: 'string', validation: (r: Rule) => r.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r: Rule) => r.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'bannerImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', type: 'string', initialValue: 'Hamza Nabulsi' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'author', media: 'bannerImage' },
  },
});
