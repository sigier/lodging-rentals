import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';



const  Navbar = (props) =>{
    const {pathname} = useLocation();
    
    let navColor = pathname === '/' ? "transparent" : "black";


    return(
                <div className='container-fluid nav'>
                    <div className='row'>
                        <nav className={navColor}>
                            <div className='nav-wrapper'>
                                <Link to="/" className='left'>Lodging</Link>
                                <ul id='nav-mobile' className='right'>
                                    <li><Link to="/">English</Link></li>
                                    <li><Link to="/">$ USD</Link></li>
                                    <li><Link to="/">Become a host</Link></li>
                                    <li><Link to="/">Help</Link></li>
                                    <li><Link to="/">Sign up</Link></li>
                                    <li><Link to="/">Log in</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
    );
}

    


export default Navbar;