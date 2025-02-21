import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './Components/NavBar'
import ArticleList from './Components/ArticleList'
import Article from './Components/Article'
import Error from './Components/Error'
import Users from "./Components/Users"

function App() {

  
  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<Article />}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>

    
    </>
  )
}

export default App
