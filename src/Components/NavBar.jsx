import { Link } from "react-router-dom"

function NavBar (){

    return (
       <header>
        <h1>NC News</h1>
        <div id="nav-links">
        <Link to="/articles" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
        </div>
        <nav id="search-bar">
        <input type="text" placeholder="Search articles..."/>
            <select id="topics-button">
                <option value="all">All Topics</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
                <option value="cooking">Cooking</option>
            </select>
        </nav>
        
       </header>
    )

}

export default NavBar