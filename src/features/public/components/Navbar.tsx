import logo from "@/assets/logos/logo.png"
import { Link, NavLink } from "react-router";

const navItems = <>
    <NavLink to="/news/1" className={({ isActive }) => isActive ? "underline text-lg dark3" : "text-lg dark3"}>Home</NavLink>
</>


const Navbar = () => {
    return (
        <nav className="max-w-[1200px] mx-auto">
            <div>
                <Link to={'/'}><img src={logo} className="mx-auto my-7 max-w-[150px]" alt="logo" /></Link>
            </div>
            <div>

            </div>
        </nav>
    );
};

export default Navbar;