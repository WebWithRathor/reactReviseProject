import React, { useEffect } from "react";
import ShowBooks from "../partials/ShowBooks";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/actions/BookAction";

const SearchLayout = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const {books} = useSelector(store=>store.BookSlice);
  useEffect(() => {
    dispatch(loadBooks(query));
  }, []);

  return (
    <div className="">
      <h1 className="px-20 text-4xl mt-10 font-semibold">
        Searched : <em>{query}</em>
      </h1>
      <ShowBooks books={books} />
    </div>
  );
};

export default SearchLayout;
