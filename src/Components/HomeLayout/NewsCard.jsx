import React from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  // Format date
  const publishedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-[16px] ">{author?.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="m-4 pb-4 border-b border-base-300">
        <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
        <figure className="mb-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-56 object-cover rounded-lg"
          />
        </figure>

        <p className="text-[16px] font-normal  text-accent">
          {details}...
          <span className="text-[#ff8c47] cursor-pointer font-medium hover:underline ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="p-4  flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
