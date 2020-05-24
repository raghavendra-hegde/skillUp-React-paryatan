import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component{
    render(){
        let navBarColor = 'transparent';
        if(this.props.location.pathname !== '/'){
            // If user not on Home Page
            navBarColor = 'Black'
        }
        return(
            <div className='container-fluid nav'>
                <div className='row'>
                    <nav className={navBarColor}>
                        <div className='nav-wrapper'>
                            <Link to='/' className='left'>Paryatan</Link>
                            <ul id='nav-mobile' className='right'>
                                <li><Link to='/'>English (US)</Link></li>
                                <li><Link to='/'>Rs</Link></li>
                                <li><Link to='/'>Become a host</Link></li>
                                <li><Link to='/'>Help</Link></li>
                                <li><Link to='/'>Sign up</Link></li>
                                <li><Link to='/'>Log in</Link></li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar;