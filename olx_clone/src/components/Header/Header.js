import React from 'react';
import './Header.css';
import olx_logo from './olx_logo.png';
import capture from './Capture.JPG';
import search_icon from './search_icon.png';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Header() {
    return (
        <React.Fragment>
            {/* <img src={capture}></img> */}

            <div className='header'>
                <img className='olx_logo' src={olx_logo}></img>

                <div className='searchBar1'>
                    <SearchIcon className='searchBar1_icon'/>
                    <input className='searchBar1_Input' type='text' placeholder='Search city, area or locsdffds...'></input>
                    <KeyboardArrowDownIcon className='down_arrow1' />
                </div>

                <div className='searchBar2'>
                    <input className='searchBar2_Input' type='text' placeholder='Find Cars, Mobile Phones and more...'></input>
                    <div className='searchButtonBox'>
                    <SearchIcon className='searchBar2_icon'/>
                    </div>
                </div>
                
                <div className='login_Div'>
                <p className='login_Button'>Login</p>
                </div>

                <div className='sell_Div'>
                <p className='sell_Button'>+ sell</p>
                </div>
            </div>

            <div className='bottom_header'>
                <div className='all_categories'>
                    <p className='all_categories_text' > ALL CATEGORIES</p>
                    <KeyboardArrowDownIcon className='down_arrow2'/>
                </div>

                <div className='popular_categories'>
                    <p className='popular_categories_text'>Mobile Phoness</p>
                    <p className='popular_categories_text'>Cars</p>
                    <p className='popular_categories_text'>Motorcycles</p>
                    <p className='popular_categories_text'>Houses</p>
                    <p className='popular_categories_text'>TV-Video-Audio</p>
                    <p className='popular_categories_text'>Tablets</p>
                    <p className='popular_categories_text'>Land & Plots</p>
                </div>
            </div>
        
        </React.Fragment>
    );
}

export { Header };
