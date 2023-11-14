import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div className="p-8 m-8 shadow-xl">
            <nav className="flex justify-between items-center">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                      
                        <NavLink  to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "bg-green-400"
                            }>
                        
                            Home
                        </NavLink>
                    </li>
                    <li>
                      
                        <NavLink  to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "bg-green-400"
                            }>
                        
                        Donation
                        </NavLink>
                    </li>
                    <li>
                      
                        <NavLink  to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "bg-green-400"
                            }>
                        
                        Statistics
                        </NavLink>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Navbar;