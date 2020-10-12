import React from 'react';
import './Header.css';
import olx_logo from './olx_logo.png';
import capture from './Capture.JPG';
import search_icon from './search_icon.png';


function Header() {
    return (
        <React.Fragment>
            <img src={capture}></img>
            
            <div className='header'>
                <img className='olx_logo' src={olx_logo}></img>
               
                <div className='searchBar'>
                    <img className='search_icon' src={search_icon}></img>
                    <input className='searchBarInput' type='text'></input>
                </div>
               
                <p>find bar</p>
                <p>login button</p>
                <p>sell button</p>
            </div>
        </React.Fragment>
    );
}

export { Header };
