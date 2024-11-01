import React, { useEffect, useState } from "react";
import Search from "./Search";
import ShowBooks from "../partials/ShowBooks";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/actions/BookAction";

const Layout = () => {
  const [query, setquery] = useState("");
  const { books } = useSelector((store) => store.BookSlice);
  const dispatch = useDispatch();
  console.log(books);
  

  useEffect(() => {
    if (books.length === 0) dispatch(loadBooks());
  }, []);

  return (
    <div className="h-max w-full">
      <Search query={query} setquery={setquery} />
      <ShowBooks books={books} />
    </div>
  );
};

export default Layout;
