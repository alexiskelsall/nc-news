import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import NavBar from './Components/NavBar'
import ArticleList from './Components/ArticleList'
 

function App() {


  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<ArticleList />} />
    </Routes>

    
    </>
  )
}

export default App
