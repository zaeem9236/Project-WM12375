import React from 'react';
import './Header.css';


function Header(){
    return(
        <React.Fragment>
            <div className='header'>
                <p>logo</p>
                <p>search bar </p>
                <p>find bar</p>
                <p>login button</p>
                <p>sell button</p>
            </div>
        </React.Fragment>
    );
}

export {Header};
