import { Link } from "react-router-dom"


function NavBar() {

    return (
    <>
        <header id="navbar">
         <h1>NC News</h1>
        </header>

        <nav id="nav-links">
         <Link to="/articles" className="nav-link">Home</Link>
         <Link to="/users" className="nav-link">Users</Link>
        </nav>
    </>
       
    )

}

export default NavBar