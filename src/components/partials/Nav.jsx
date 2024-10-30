import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full flex justify-between px-20 py-5 bg-zinc-800 text-zinc-100'>
        <NavLink to={'/'} className='text-lg font-semibold'>BookHead</NavLink>
        <div className="flex gap-10">
            <NavLink>About Us</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>About Us</NavLink>
        </div>
    </div>
  )
}

export default Nav