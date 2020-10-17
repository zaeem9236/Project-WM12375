import React,{useState} from 'react';
import './Header.css';
import olx_logo from './olx_logo.png';
// import capture from './Capture.JPG';
// import search_icon from './search_icon.png';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



function Header() {
    let[drop_down_visible , drop_down_update] = useState(false);
    return (
        <React.Fragment>
            {/* <img src={capture}></img> */}

            <div className='header'>
                <img className='olx_logo' src={olx_logo} alt=''></img>

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

            <div className='bottom_header'>
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
                    <div className={`drop_down_list ${drop_down_visible ? '' : 'drop_down_list_hide'}`}>
                        <ul className='col_1'>
                            <li className='ul_heading' >Vehicles</li>
                            <li>Tractors & Trailers</li>
                            <li>Boats</li>
                            <li>Other Vehicles</li>
                            <li>Rickshaw & Chingchi</li>
                            <li>Buses, Vans & Trucks</li>
                            <li>Spare Parts</li>
                            <li>Cars Accessories</li>
                            <li>Cars on Installments</li>
                            <li>Cars</li>

                            <li className='ul_heading' >Mobiles</li>
                            <li>Mobile Phones</li>
                            <li>Accessories</li>
                            <li>Tablets</li>

                            <li className='ul_heading' >Electronics & Home Appliances</li>
                            <li>Washing Machines & Dryers</li>
                            <li>Fridges & Freezers</li>
                            <li>AC & Coolers</li>
                            <li>Kitchen Appliances</li>
                            <li>Generators, UPS & Power Solutions</li>
                            <li>Other Home Appliances</li>
                            <li>Games & Entertainment</li>
                            <li>Cameras & Accessories</li>
                            <li>TV - Video - Audio</li>
                            <li>Computers & Accessories</li>

                            <li className='ul_heading' >Property for Sale</li>
                            <li>Portions & Floors</li>
                            <li>Shops - Offices - Commercial Space</li>
                            <li>Apartments & Flats</li>
                            <li>Houses</li>
                            <li>Land & Plots</li>
                        </ul>

                        <ul className='col_2'>
                            <li  className='ul_heading' >Animals</li>
                            <li>Other Animals</li>
                            <li>Pet Food & Accessories</li>
                            <li>Horses</li>
                            <li>Livestock</li>
                            <li>Dogs</li>
                            <li>Cats</li>
                            <li>Hens & Aseel</li>
                            <li>Birds</li>
                            <li>Fish & Aquariums</li>

                            <li className='ul_heading' >Furniture & Home Decor</li>
                            <li>Other Household Items</li>
                            <li>Office Furniture</li>
                            <li>Curtains & Blinds</li>
                            <li>Rugs & Carpets</li>
                            <li>Painting & Mirrors</li>
                            <li>Garden & Outdoor</li>
                            <li>Tables & Dining</li>
                            <li>Home Decoration</li>
                            <li>Beds & Wardrobes</li>
                            <li>Sofa & Chairs</li>

                            <li className='ul_heading' >Business, Industrial & Agriculture</li>
                            <li>Medical & Pharma</li>
                            <li>Other Business & Industry</li>
                            <li>Agriculture</li>
                            <li>Construction & Heavy Machinery</li>
                            <li>Trade & Industrial</li>
                            <li>Food & Restaurants</li>
                            <li>Business for Sale</li>

                            <li className='ul_heading' >Bikes</li>
                            <li>Scooters</li>
                            <li>ATV & Quads</li>
                            <li>Bicycles</li>
                            <li>Spare Parts</li>
                            <li>Motorcycles</li>

                        </ul>

                        <ul className='col_3'>
                            <li  className='ul_heading' >Fashion & Beauty</li>
                            <li>Other Fashion</li>
                            <li>Couture</li>
                            <li>Lawn & Pret</li>
                            <li>Wedding</li>
                            <li>Watches</li>
                            <li>Skin & Hair</li>
                            <li>Make Up</li>
                            <li>Jewellery</li>
                            <li>Footwear</li>
                            <li>Clothes</li>
                            <li>Accessories</li>

                            <li className='ul_heading' >Property for Rent</li>
                            <li>Land & Plots</li>
                            <li>Vacation Rentals - Guest Houses</li>
                            <li>Roommates & Paying Guests</li>
                            <li>Rooms</li>
                            <li>Shops - Offices - Commercial Space</li>
                            <li>Portions & Floors</li>
                            <li>Apartments & Flats</li>
                            <li>Houses</li>

                            <li className='ul_heading' >Jobs</li>
                            <li>Other Jobs</li>
                            <li>Part - Time</li>
                            <li>Domestic Staff</li>
                            <li>Medical</li>
                            <li>Manufacturing</li>
                            <li>Accounting & Finance</li>
                            <li>Human Resources</li>
                            <li>Clerical & Administration</li>
                            <li>Hotels & Tourism</li>
                            <li>IT & Networking</li>
                            <li>Sales</li>
                            <li>Customer Service</li>
                            <li>Education</li>
                            <li>Advertising & PR</li>
                            <li>Marketing</li>
                            <li>Online</li>
                            
                        </ul>

                        <ul className='col_4'>
                            <li className='ul_heading' >Services</li>
                            <li>Farm & Fresh Food</li>
                            <li>Catering & Restaurant</li>
                            <li>Home & Office Repair</li>
                            <li>Movers & Packers</li>
                            <li>Maids & Domestic Help</li>
                            <li>Health & Beauty</li>
                            <li>Event Services</li>
                            <li>Electronics & Computer Repair</li>
                            <li>Other Services</li>
                            <li>Web Development</li>
                            <li>Drivers & Taxi</li>
                            <li>Car Rental</li>
                            <li>Travel & Visa</li>
                            <li>Education & Classes</li>

                            <li className='ul_heading' >Books, Sports & Hobbies</li>
                            <li>Other Hobbies</li>
                            <li>Gym & Fitness</li>
                            <li>Sports Equipment</li>
                            <li>Musical Instruments</li>
                            <li>Books & Magazines</li>

                            <li className='ul_heading' >Kids</li>
                            <li>Kids Accessories</li>
                            <li>Kids Bikes</li>
                            <li>Swings & Slides</li>
                            <li>Prams & Walkers</li>
                            <li>Toys</li>
                            <li>Kids Furniture</li>
                        </ul>
                    </div>

                </div>

               
        
        </React.Fragment>
    );
}

export { Header };
