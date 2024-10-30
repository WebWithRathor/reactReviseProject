import React from "react";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link to={'/detail/heading'} className="p-3 h-max rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer ">
      <div className="img-wrap w-full h-52 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1584608168573-b6eec7a04fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="content mt-2">
        <h1 className="text-lg font-semibold">Heading</h1>
        <h2 className="text-sm my-0.5">Author : Dinkar Poul</h2>
        <p className="text-xs mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          accusantium.
        </p>
        <button className="px-6 py-2 bg-blue-500 rounded font-semibold text-white">
          Download
        </button>
      </div>
    </Link>
  );
};

export default BookCard;
