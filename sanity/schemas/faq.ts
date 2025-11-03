import { defineField, defineType, type Rule } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
  defineField({ name: 'question', type: 'string', validation: (r: Rule) => r.required() }),
  defineField({ name: 'answer', type: 'text', rows: 3, validation: (r: Rule) => r.required() }),
    defineField({ name: 'category', type: 'string' }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
});
