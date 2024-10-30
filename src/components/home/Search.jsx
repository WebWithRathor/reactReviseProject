import React from 'react'

const Search = ({query , setquery}) => {
  return (
    <div className="mt-10 flex items-center w-1/3 mx-auto justify-center border pl-3 rounded-md overflow-hidden border-zinc-700">
    <i className="ri-search-eye-line text-2xl mr-2"></i>
    <input type="text" value={query} onChange={(e)=>setquery(e.target.value)} className="w-full text-lg  py-4 pr-5 outline-none" placeholder="Search your books...." />
  </div>
  )
}

export default Search