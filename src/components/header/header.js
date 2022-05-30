import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Header() {
    const auth = useSelector(state => state.authReducer)
    const {user, isLogged} = auth;

    const handleLogout = async() => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/"
        } catch (error) {
            window.location.href = "/";
        }
    }

    // const userLink = () => {
    //     return <li>
    //         <Link to="#">{user.name}</Link>
    //         <ul>
    //         <li><Link to = "/profile">Profile</Link></li>
    //         <li><Link to = "/" onClick = {handleLogout}>Logout</Link></li>
    //     </ul>
    //     </li>
    // }
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/#">Smart Parking</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
    <                   div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">Contact Us</a>
                                </li>
                                <li class="nav-item" >
                                    {
                                        isLogged ? 
                                        <li class="nav-item dropdown" style={{marginLeft: 760}}>
                                            <Link class="nav-link dropdown-toggle text-light" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img alt='' style={{borderRadius: 100, width: 20, height: 20, marginRight: 7}} src={user.avatar}/>{user.name}
                                            </Link>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link class="dropdown-item" to = "/profile">Profile</Link></li>
                                                <li><Link class="dropdown-item" to = "/" onClick = {handleLogout}>Logout</Link></li>
                                            </ul>
                                        </li>: <Link to = "/login">Log in</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
