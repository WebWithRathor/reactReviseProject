import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadSingleBook } from "../../store/actions/BookAction";

const DetailLayout = () => {
  const { id } = useLocation().state;
  const dispatch = useDispatch();
  const { book } = useSelector((store) => store.BookSlice);
  console.log(book);

  useEffect(() => {
    dispatch(loadSingleBook(id));
  }, []);

  return (
    book && (
      <div className="px-20 pt-20 pb-10 flex">
        <div className="img-wrap w-full h-96 ">
          <img
            className="w-max h-full object-contain"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
        </div>
        <div className="w-max">

        <h1 className="text-4xl font-bold mt-4" >{book.volumeInfo.title}</h1>
        <h1 className="text-lg mt-3"><strong>Publisher</strong> : {book.volumeInfo.publisher}</h1>
        <p className="mt-3 " dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}>
        </p>
        <a target="_blank" href={book.volumeInfo.previewLink}>
        <button className="px-4 py-2 bg-blue-500 rounded mt-3 text-white font-semibold">More Information</button>
        </a>
        {book.accessInfo.pdf && book.accessInfo.pdf.isAvailable && (
        <a href={book.accessInfo.pdf.acsTokenLink} download>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Download PDF
          </button>
        </a>
      )}
        </div>
      </div>
    )
  );
};

export default DetailLayout;
