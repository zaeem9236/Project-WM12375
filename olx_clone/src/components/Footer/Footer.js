import React from 'react';
import './Footer.css'
import topFooter from './olx_top_footer.jpg';

function Footer() {
    return (
        <React.Fragment>
            <div className='top_footer'>
                <img src={topFooter} ></img>
            </div>

            <div className='middle_footer' >
                <ul className='footer_col_1'>
                    <li className='footer_heading'>POPULAR CATEGORIES</li>
                    <li>Cars</li>
                    <li>Flats for rent</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </ul>

                <ul className='footer_col_2'>
                    <li className='footer_heading'>TRENDING SEARCHES</li>
                    <li>Bikes</li>
                    <li>Watches</li>
                    <li>Books</li>
                    <li>Dogs</li>
                </ul>
                
                <ul className='footer_col_3'>
                    <li className='footer_heading'>ABOUT US</li>
                    <li>About OLX Group</li>
                    <li>OLX Blog</li>
                    <li>Contact Us</li>
                    <li>OLX for Businesses</li>
                </ul>

                <ul className='footer_col_4'>
                    <li className='footer_heading'>OLX</li>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy information</li>
                </ul>

                <ul className='footer_col_5'>
                    <li className='footer_heading' >FOLLOW US</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </div>

            <div className='bottom_footer'>
                <p>botton footer</p>
            </div>
        </React.Fragment>
    );
}

export { Footer };