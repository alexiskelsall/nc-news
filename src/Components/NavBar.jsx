import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function NavBar (){
    const [selectedTopic, setSelectedTopic] = useState("")
    const navigate = useNavigate()

    const handleTopicChange = (e)=>{
        setSelectedTopic(e.target.value)
    }
    
    const handleSubmit = () => {
      const query = selectedTopic === "all" || !selectedTopic ? "" : `?topic=${selectedTopic}`
      const formattedQuery = query.toLowerCase()
      navigate(`/articles${formattedQuery}`)
        };
    
    return (
       <header>
        <h1>NC News</h1>
        <div id="nav-links">
        <Link to="/articles" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
        </div>
        <nav id="search-bar">
        <input type="text" placeholder="Search articles..." 
        onKeyDown={(e)=> e.key === "Enter" && handleSubmit()}/>
            <select id="topics-button" type="submit" 
            value={selectedTopic} 
            onChange={handleTopicChange}>
                <option value="all">All Topics</option>
                <option value="Coding">Coding</option>
                <option value="Football">Football</option>
                <option value="Cooking">Cooking</option>
            </select>
            <button onClick={handleSubmit}>Search</button>
        </nav>
        
       </header>
    )

}

export default NavBar