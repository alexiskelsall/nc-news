import { Link } from "react-router-dom"
import { useState } from "react"

function NavBar() {

    return (
       <header>
        <h1>NC News</h1>
        <div id="nav-links">
        <Link to="/articles" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
        </div>
       </header>
    )

}

export default NavBar