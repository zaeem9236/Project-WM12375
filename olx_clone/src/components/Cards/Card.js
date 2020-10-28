import React from 'react';
import './Card.css';

function Cards(){
    return(
        <React.Fragment>
            <div className='card_div'>
                <div className='card_image'><img src='https://picsum.photos/seed/picsum/200/300' alt=''></img></div>
                <div className='card_description'>
                    <h4> Rs 2,200</h4>
                    <h6>Kids sofa Chair bean bag</h6>
                </div>
            </div>
        </React.Fragment>
    );
}

export {Cards};