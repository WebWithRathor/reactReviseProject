import React from "react";
import BookCard from "./BookCard";

const ShowBooks = () => {
  return (
    <div className="grid grid-cols-4  w-full gap-10 px-20 mt-10">
        <BookCard/> 
    </div>
  );
};

export default ShowBooks;
