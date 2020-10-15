import React,{useState} from 'react';
import './Header.css';
import olx_logo from './olx_logo.png';
import capture from './Capture.JPG';
import search_icon from './search_icon.png';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



function Header() {
    let[drop_down_visible , drop_down_update] = useState(false);
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
                <p className='sell_Button'>+ SELL</p>
                </div>
            </div>

            {/* <div className='bottom_header'>
                <div className='all_categories'>
                    <p className='all_categories_text' > ALL CATEGORIES</p>
                    <KeyboardArrowDownIcon 
                    className={`down_arrow2 ${drop_down_visible ? 'down_arrow2_modified' : ''}`} 
                    onClick={()=> {drop_down_update(!drop_down_visible)}}/>
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

            <div className='drop_down_categories'>
                    <ul className={`drop_down_list ${drop_down_visible ? '' : 'drop_down_list_hide'}`}>
                        <li>Cycle</li>
                        <li>Car</li>
                        <li>Phones</li>
                        <li>Radio</li>
                        <li>TV</li>
                        <li>Microwave</li>
                        <li>Laptops</li>
                        <li>Desktops</li>
                        <li>Watches</li>
                        <li>Furniture</li>
                        <li>Houses</li>
                        <li>FLats</li>
                        <li>Clothes</li>
                        <li>Ac</li>
                        <li>Lamps</li>
                        <li>xyz</li>
                    </ul>

                    <div>
                        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                        

                        
                    </div>
                </div> */}
        
        </React.Fragment>
    );
}

export { Header };
