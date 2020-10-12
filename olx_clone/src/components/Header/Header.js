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

                <div className='searchBar1'>
                    {/* <img className='searchBar1_icon' src={search_icon}></img> */}
                    <img className='bi bi-search'></img>
                    <input className='searchBar1_Input' type='text'></input>
                </div>

                <div className='searchBar2'>
                    <input className='searchBar2_Input' type='text'></input>
                    <div className='searchButtonBox'>
                    <img className='searchBar2_icon' src={search_icon}></img>
                    </div>
                </div>
                <p>login button</p>
                <p>sell button</p>
            </div>
        </React.Fragment>
    );
}

export { Header };
