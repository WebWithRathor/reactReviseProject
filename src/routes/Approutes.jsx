import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/home/Layout'
import DetailLayout from '../components/Detail/DetailLayout'
import SearchLayout from '../components/Search/SearchLayout'

const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/detail/:name' element={<DetailLayout/>}/>
        <Route path='/search/:query' element={<SearchLayout/>}/>
    </Routes>
  )
}

export default Approutes