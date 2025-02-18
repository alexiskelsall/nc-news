import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './Components/NavBar'
import ArticleList from './Components/ArticleList'
import Article from './Components/Article'
import Comments from './Components/Comments'
 

function App() {

  
  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<Article />}/>
      <Route path="/articles/:article_id/comments" element={<Comments />}/>
    </Routes>

    
    </>
  )
}

export default App
