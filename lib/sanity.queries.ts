import { groq } from 'next-sanity';

export const allArticlesQuery = groq`*[_type == "article"]|order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, publishedAt, bannerImage
}`;

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, bannerImage, body
}`;

export const allGlossaryTermsQuery = groq`*[_type == "glossaryTerm"]|order(term asc){
  _id, term, "slug": slug.current, definition
}`;

export const allFaqQuery = groq`*[_type == "faq"]{ _id, question, answer, category }`;
