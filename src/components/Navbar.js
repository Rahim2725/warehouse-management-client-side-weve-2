import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);


    return (
        <div className="navbar bg-base-100 px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Mobile Stroll</a>

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>

            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink className="mr-2" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2" to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2" to="/dashboard/addProduct"> Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2" to="/myPortfolio">My Portfolio</NavLink>
                    </li>
                    {user ?
                        <>
                            <li>
                                <NavLink className="mr-2" to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="mr-2" to="/register">Register</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <button>Log out</button>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;