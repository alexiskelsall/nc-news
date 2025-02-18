import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import NavBar from './Components/NavBar'
import ArticleList from './Components/ArticleList'
import Article from './Components/Article'
 

function App() {


  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<Article />}/>
    </Routes>

    
    </>
  )
}

export default App
