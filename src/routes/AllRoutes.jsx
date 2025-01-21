import { Route ,Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import PageNotFound from "../pages/PageNotFound.jsx"
import CreatePost from "../pages/CreatePost.jsx"

import React from 'react'

const AllRoutes = () => {
  return (
    <main className="min-h-[64vh] pt-10 text-center">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="create" element={<CreatePost/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          
        </Routes>
    </main>
  )
}

export default AllRoutes