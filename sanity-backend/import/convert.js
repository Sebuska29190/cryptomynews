const fs = require('fs');
const path = require('path');

/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {number} category_id
 * @property {string} title
 * @property {Object} rating
 * @property {number} rating.number
 * @property {string} rating.badge
 * @property {number} total_view
 * @property {Object} author
 * @property {string} author.name
 * @property {string} author.published_date
 * @property {string} author.img
 * @property {string} thumbnail_url
 * @property {string} image_url
 * @property {string} details
 * @property {string[]} tags
 * @property {Object} others
 * @property {boolean} others.is_today_pick
 * @property {boolean} others.is_trending
 * @property {boolean} production
 */

// Read the news.json
const newsPath = path.join(__dirname, '../../public/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Transform each article
const transformed = news.map((/** @type {Article} */ article) => ({
  _type: 'article',
  id: article.id,
  title: article.title,
  slug: {
    _type: 'slug',
    current: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  },
  categoryId: article.category_id,
  rating: article.rating,
  totalView: article.total_view,
  author: {
    name: article.author.name,
    publishedDate: article.author.published_date,
    image: article.author.img
  },
  thumbnail: article.thumbnail_url,
  image: article.image_url,
  details: article.details,
  tags: article.tags,
  others: {
    isTodayPick: article.others.is_today_pick,
    isTrending: article.others.is_trending
  },
  production: article.production
}));

// Write to NDJSON
const output = transformed.map(JSON.stringify).join('\n');
fs.writeFileSync(path.join(__dirname, 'articles.ndjson'), output);

console.log('Converted articles.ndjson created');