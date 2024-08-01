import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

const Header = () =>{
    
    return(
        <div className='header'>
                <Link to="/"className='title' >ASTrix UI Movies</Link>
            <div className='headerLeft'>
                <Link to="/movies/popular"><span>Popular</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>Upcoming</span></Link>

            </div>
        </div>
      )
}


export default Header;