import { defineField, defineType, type Rule } from 'sanity';

export default defineType({
  name: 'glossaryTerm',
  title: 'Glossary Term',
  type: 'document',
  fields: [
  defineField({ name: 'term', type: 'string', validation: (r: Rule) => r.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'term', maxLength: 96 }, validation: (r: Rule) => r.required() }),
  defineField({ name: 'definition', type: 'text', rows: 4, validation: (r: Rule) => r.required() }),
  ],
  preview: {
    select: { title: 'term', subtitle: 'slug.current' },
  },
});
