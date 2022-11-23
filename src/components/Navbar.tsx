import Login from "./Login"

const Nav = () => {    
    return (
        <nav className="fixed w-full bg-nav-bg backdrop-blur top-0 l-0 h-16 px-4 bg-white flex items-center justify-end">
            <Login />
        </nav>
    )
}

export default Nav
