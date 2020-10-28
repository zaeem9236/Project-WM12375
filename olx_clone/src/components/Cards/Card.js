import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Card.css';

function Cards(props) {
    console.log('inside cards........');
    console.log(props);
    return (
        <React.Fragment>
            <div className='card_div'>
                <div className='featured'>
                    <div><p className='featured_text'>FEATURED</p></div>
                    <div className='like'><FavoriteBorderIcon /></div>
                </div>
                <div className='card_image'><img src={props.picture} alt=''></img></div>
                <div className='card_description'>
                    <h4 className='card_price'> {props.price} </h4>
                    <h6 className='card_text'> {props.description}</h6>
                </div>
            </div>
        </React.Fragment>
    );
}

export { Cards };