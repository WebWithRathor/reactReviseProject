import React, { useState } from "react";
import Search from "./Search";
import ShowBooks from "../partials/ShowBooks";

const Layout = () => {
    const [query, setquery] = useState('');
    console.log(query);
    
  return (
    <div className="h-max w-full">
        <Search query={query} setquery={setquery} />
        <ShowBooks/>
    </div>
  );
};

export default Layout;
