import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Newscard from '../Components/Newscard/Newscard';
import { getArticlesByCategory } from '../lib/queries';

const Categorynews = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getArticlesByCategory(id).then(data => {
        setArticles(data);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to fetch articles by category:', err);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Category: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.length > 0 ? articles.map(article => (
          <Newscard key={article.id} niws={article} />
        )) : <p>No articles found in this category.</p>}
      </div>
    </div>
  );
};

export default Categorynews;