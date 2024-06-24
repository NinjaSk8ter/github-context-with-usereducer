import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-auto">
                <FaGithub className='inline pr-2 text-3xl' />
                <Link to='/' className='text-lg font-bold align-middle'>
                    {title}
                </Link>
            </div>

            <div className="flex-auto">
                <Link to='/' className='btn btn-ghost btn-outline btn-md rounded-btn'>
                    <span className='px-10'>Home</span>
                </Link>
            </div>
            <div className="flex-auto">
                <Link to='/about' className='btn btn-ghost btn-outline btn-md rounded-btn'>
                    <span className='px-10'>About</span>
                </Link>
            </div>
            <div className="flex-auto">
                <Link to='/about' className='btn btn-ghost btn-outline btn-md rounded-btn'>
                    <span className='px-10'>Search</span>
                </Link>
            </div>
            <div className="flex-auto">
                <Link to='/about' className='btn btn-ghost btn-outline btn-md rounded-btn'>
                    <span className='px-10'>Sign-in</span>
                </Link>
            </div>



            <div className="flex-none">
                {/* <div className="dropdown dropdown-content">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-28 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar