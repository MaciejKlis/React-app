import Login from "../Login/Login"
import classes from "./Navbar.module.css";

const Nav = () => {    
    return (
        <nav className={`${classes.navbar}`}>
            <Login />
        </nav>
    )
}

export default Nav
