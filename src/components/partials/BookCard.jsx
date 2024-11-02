import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({title ,id,description , image , author}) => {
  return (
    <Link to={`/detail/${title}`} state={{ id}} className="p-3 flex-1 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer ">
      <div className="img-wrap w-full h-52 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={image && image}
          alt=""
        />
      </div>
      <div className="content mt-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h2 className="text-sm my-1"> <span className="font-semibold">Author</span> :  {author && author.map((e)=>e)}</h2>
        <p className="text-xs mb-3">
          {description && description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
