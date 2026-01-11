import { client } from './sanityClient'

// GROQ queries
const GET_ALL_ARTICLES = `*[_type == "article"]{
  id,
  title,
  slug,
  categoryId,
  rating{
    number,
    badge
  },
  totalView,
  author{
    name,
    publishedDate,
    image
  },
  thumbnail,
  image,
  details,
  tags,
  others{
    isTodayPick,
    isTrending
  },
  production
} | order(author.publishedDate desc)`

const GET_ARTICLES_BY_CATEGORY = `*[_type == "article" && categoryId == $categoryId]{
  id,
  title,
  slug,
  categoryId,
  rating{
    number,
    badge
  },
  totalView,
  author{
    name,
    publishedDate,
    image
  },
  thumbnail,
  image,
  details,
  tags,
  others{
    isTodayPick,
    isTrending
  },
  production
} | order(author.publishedDate desc)`

const GET_ARTICLE_BY_SLUG = `*[_type == "article" && slug.current == $slug][0]{
  id,
  title,
  slug,
  categoryId,
  rating{
    number,
    badge
  },
  totalView,
  author{
    name,
    publishedDate,
    image
  },
  thumbnail,
  image,
  details,
  tags,
  others{
    isTodayPick,
    isTrending
  },
  production
}`

const GET_ALL_CATEGORIES = `*[_type == "category"]{
  categoryId,
  title
}`

// Export functions
export const getAllArticles = () => client.fetch(GET_ALL_ARTICLES)

export const getArticlesByCategory = (categoryId) => client.fetch(GET_ARTICLES_BY_CATEGORY, { categoryId })

export const getArticleBySlug = (slug) => client.fetch(GET_ARTICLE_BY_SLUG, { slug })


export const getAllCategories = () => client.fetch(GET_ALL_CATEGORIES)
