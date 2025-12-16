import logo from "@/assets/logos/logo.png"
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="max-w-[1200px] mx-auto">
            <div>
                <Link to={'/'}><img src={logo} className="mx-auto py-7 max-w-[150px]" alt="logo" /></Link>
            </div>
            <div>

            </div>
        </nav>
    );
};

export default Navbar;