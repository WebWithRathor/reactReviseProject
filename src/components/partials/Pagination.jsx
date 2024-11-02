import React, { useState } from 'react'

const Pagination = () => {

    const [page, setpage] = useState(parseInt(localStorage.getItem('pageValue')) || 1);
    console.log(page);

    const savePageValue = ()=>{
        setpage(page+1);
        localStorage.setItem('pageValue',page+1)
    }
    

  return (
    <div className='w-full py-10 '>
        <button onClick={savePageValue} className='px-5 py-3 bg-blue-500 font-semibold text-white'>Next</button>
    </div>
  )
}

export default Pagination