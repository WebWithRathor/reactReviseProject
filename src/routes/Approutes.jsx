import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/home/Layout'
import DetailLayout from '../components/Detail/DetailLayout'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/detail/:name' element={<DetailLayout/>}/>
    </Routes>
  )
}

export default Approutes