import Link from 'next/link';
import React, { useContext } from 'react';  

import { useRouter } from 'next/router';
import UserContext from '../pages/UserContext';

function Header(props){
    const user = useContext(UserContext);
    const router = useRouter();
    
    return (
        
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Comorins Technolgy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href='/'>
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href='/about'>
                        <a className="nav-link">About</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href='/profile'>
                        <a className="nav-link">Profile</a>
                    </Link>
                </li>
                {user.islogged &&<li className="nav-item">
                    <Link href='/posts'>
                        <a className="nav-link">PostList</a>
                    </Link>
                </li>}
                </ul>
                {!user.islogged &&<span className="navbar-text">
                    <Link href='/login'>
                        <a className="nav-link">Login</a>
                    </Link>
                </span>}
                {user.islogged &&<a className="nav-link" onClick={()=> {user.setlogged(false); router.push('/login')} }>Logout</a>}
            </div>
        </nav>
        
    )
}
export default Header
