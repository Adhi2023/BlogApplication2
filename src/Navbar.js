import {Link} from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog Application</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/Create">new Blog</Link>
                <Link to="/Signup">sign up</Link>
                <Link to="/Login">login</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;