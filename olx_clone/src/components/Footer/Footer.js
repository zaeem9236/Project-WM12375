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
                <ul>
                    <li className='footer_heading'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul>
                    <li className='footer_heading'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                
                <ul>
                    <li className='footer_heading'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul>
                    <li className='footer_heading'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul>
                    <p>col5</p>
                </ul>
            </div>

            <div className='bottom_footer'>
                <p>botton footer</p>
            </div>
        </React.Fragment>
    );
}

export { Footer };