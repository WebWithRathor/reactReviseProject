import React from 'react'

const DetailLayout = () => {
  return (
    <div className='px-20 pt-10'>
        <div className="img-wrap w-full h-96 ">
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1584608168573-b6eec7a04fd7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h1 className='text-4xl font-bold mt-4'>Heading</h1>
        <p className='mt-3'>This is a detail layout. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nemo laboriosam quas. Consequatur, doloremque a maxime asperiores nam modi laudantium ab aliquam. Nesciunt ratione, accusamus earum quisquam illo magnam aspernatur!</p>
    </div>
  )
}

export default DetailLayout