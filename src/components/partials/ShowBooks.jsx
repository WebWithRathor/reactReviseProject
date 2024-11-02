import React from "react";
import BookCard from "./BookCard";

const ShowBooks = ({ books }) => {
  return (
    <div className="grid grid-cols-4  w-full gap-10 px-20 pb-20 mt-10">
      {books && books.map((book) => {
        return <BookCard key={book.id} id={book.id} author={book.volumeInfo.authors} image={book.volumeInfo?.imageLinks?.thumbnail} title={book.volumeInfo.title} description={book.volumeInfo.description} />;
      })}
    </div>
  );
};

export default ShowBooks;
