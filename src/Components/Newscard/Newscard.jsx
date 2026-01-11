import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Newscard = ({ niws }) => {
  const { id, title, author, rating, thumbnail, details, totalView, } = niws;

  const date = author?.publishedDate
    ? new Date(author.publishedDate).toLocaleDateString()
    : "Not Available";

  return (
    <div className="bg-base-100 shadow rounded-xl p-4 m-2 ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.image?.asset?.url}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author?.name || "Unknown Author"}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-xl text-gray-500 cursor-pointer">
          <FaRegBookmark className="hover:text-primary" />
          <FaShareAlt className="hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-xl mb-3">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail?.asset?.url}
        alt="news thumbnail"
        className="w-full rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-600 mb-1">
        {details.length > 200 
          ? details.slice(0, 200) + "..."
          : details}
      </p>

      {/* Read More */}
      <Link to={`/newsdetails/${id}`} className="text-primary font-semibold mb-4 hover:underline">
        Read More
      </Link>

      <hr className="my-4" />

      {/* Footer */}
      <div className="flex justify-between items-center text-gray-600">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-primary">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < rating?.number ? "text-warning" : "text-gray-300"} 
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2">
          <FaEye />
          <span className="font-medium">{totalView}</span>
        </div>
      </div>

    </div>
  );
};

export default Newscard;
