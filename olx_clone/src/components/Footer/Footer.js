import React from 'react';
import './Footer.css'
import topFooter from './olx_top_footer.jpg';
import google_playstore from './google_play.png';
import apple_appstore from './apple_app_store.png';

function Footer() {
    return (
        <React.Fragment>
            <div className='top_footer'>
                <img className='top_footer' src={topFooter} alt='' ></img>
                <img src={google_playstore} alt='' className='google_playstore'
                onClick={()=>{alert('play store link')}} ></img>
                <img src={apple_appstore} alt='' className='apple_appstore' 
                onClick={()=>{alert('appstore link')}}></img>
            </div>

            <div className='middle_footer' >
                <ul className='footer_col_1'>
                    <li className='footer_heading'>POPULAR CATEGORIES</li>
                    <li className='footer_subheading' >Cars</li>
                    <li className='footer_subheading' >Flats for rent</li>
                    <li className='footer_subheading' >Jobs</li>
                    <li className='footer_subheading' >Mobile Phones</li>
                </ul>

                <ul className='footer_col_2'>
                    <li className='footer_heading'>TRENDING SEARCHES</li>
                    <li className='footer_subheading' >Bikes</li>
                    <li className='footer_subheading' >Watches</li>
                    <li className='footer_subheading' >Books</li>
                    <li className='footer_subheading' >Dogs</li>
                </ul>
                
                <ul className='footer_col_3'>
                    <li className='footer_heading'>ABOUT US</li>
                    <li className='footer_subheading'>About OLX Group</li>
                    <li className='footer_subheading'>OLX Blog</li>
                    <li className='footer_subheading'>Contact Us</li>
                    <li className='footer_subheading'>OLX for Businesses</li>
                </ul>

                <ul className='footer_col_4'>
                    <li className='footer_heading'>OLX</li>
                    <li className='footer_subheading'>Help</li>
                    <li className='footer_subheading'>Sitemap</li>
                    <li className='footer_subheading'>Legal & Privacy information</li>
                </ul>

                <ul className='footer_col_5'>
                    <li className='footer_heading' >FOLLOW US</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </div>

            <div className='bottom_footer'>
                <p>OlX clone | made by Zaeem | Roll No. WM 12375</p>
            </div>
        </React.Fragment>
    );
}

export { Footer };