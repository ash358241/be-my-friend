import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus, faUser, faPhone, faCity, faDollarSign, faSignature } from '@fortawesome/free-solid-svg-icons';
const Friend = (props) => {
    const {name, image, phone, address,username, salary} = props.friend;
    const handleAddFriend = props.handleAddFriend;
    return (
        <div className='friendDiv my-5 mx-3'>
                <img style={{width: '100%'}} src={image} alt=""/>
                <h4 className='mt-3'><FontAwesomeIcon icon={faUser} /> {name}</h4>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
                <h5><FontAwesomeIcon icon={faCity} /> {address.city}</h5>
                <p><FontAwesomeIcon icon={faSignature} /> {username}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> {salary}</p>
                <button id='btn' className='btn btn-primary' onClick={() => handleAddFriend(props.friend)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
        </div>
    );
};

export default Friend;