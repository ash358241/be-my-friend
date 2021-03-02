import React, { useEffect, useState } from 'react';
import './Header.css';
import Friend from '../Friend/Friend';
import Cart from '../Cart/Cart';

const Header = (props) => {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/50a92f35')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
   
    const handleAddFriend = (friend) => {
        const newCart = [...cart, friend];
        setCart(newCart);
    }
    return (
        <div className="mainDiv">
        <div className="row">
        <div className="col-md-6 col-sm-12">
           <div className='friendsContainer'>
           {
                users.map(user => <Friend friend={user} handleAddFriend={handleAddFriend}></Friend>)
            }
           </div>
           </div>
           <div className="col-md-6 col-sm-12">
           <div className='cartContainer my-5 mx-5'>
               <Cart cart={cart}></Cart>
           </div>
           </div>
           </div>
        </div>
    );
};

export default Header;