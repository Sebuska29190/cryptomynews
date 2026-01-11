import React, { useState, useEffect } from 'react';
import Newscard from '../Components/Newscard/Newscard';
import { getAllArticles } from '../lib/queries';

const Homemain = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then(data => {
      setArticles(data);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to fetch articles:', err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles.length > 0 ? articles.map(article => (
        <Newscard key={article.id} niws={article} />
      )) : <p>No articles available. Please check Sanity configuration.</p>}
    </div>
  );
};

export default Homemain;