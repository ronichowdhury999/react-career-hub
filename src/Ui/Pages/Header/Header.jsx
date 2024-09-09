import { Link, NavLink } from "react-router-dom"
import './header.css'

const Header = () => {
    const links = <>
        <li><NavLink className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500' : ''} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500' : ''} to={'/statistics'}>Statistics</NavLink></li>
        <li><NavLink className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500' : ''} to={'/jobs'}>Jobs</NavLink></li>
        <li><NavLink className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500' : ''} to={'/applied'}>Applied Jobs</NavLink></li>
        <li><NavLink className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500' : ''} to={'/blogs'}>Blogs</NavLink></li>
    </>
    return (
        <header className=" my-header-bg sticky top-0 z-50">
            <nav className="navbar max-w-[1200px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">
                        CareerHub
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='menu menu-horizontal px-1'>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Apply</a>
                </div>
            </nav>
        </header>
    )
}

export default Header