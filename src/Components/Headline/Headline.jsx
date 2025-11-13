import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Loading from '../../Layout/Loading';

const Headline = () => {
  const [breaking, setBreaking] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setBreaking(data))
      .catch(err => console.error('Error loading news:', err));
  }, []);

  //  শুধুমাত্র Breaking news 
   const breakingNews = breaking.filter(item => item.others?.is_today_pick === true);

  return (
    <div className="flex gap-5 bg-base-200 my-10 items-center">
      <p className="bg-secondary px-3 py-2 text-white font-semibold">
        Breaking
      </p>

      <Marquee pauseOnHover={true} speed={60}>
        {breakingNews.length > 0 ? (
          breakingNews.map(item => (
            <span key={item.id} className="mr-10">
              🚨 {item.title}
            </span>
          ))
        ) : (
          <span><Loading></Loading></span>
        )}
      </Marquee>
    </div>
  );
};

export default Headline;
