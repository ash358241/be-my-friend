import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    const cart = props.cart;
    const {id} = props.cart;
    const total = cart.reduce((sum, friend) => sum +friend.salary,0)
    return (
        <div>
            <h3>Friend's Added: {cart.length}</h3> 
            <br/>
            <h3>Friend's Info:</h3>
            <ol>
            {
                cart.map(crt => <li><h5>Friend's Name: {crt.name} <br/> <p>Friend's Salary: ${crt.salary}</p> </h5></li>)
            }
            </ol>
            <br/>
            <h4>Added Friend's Total Salary: ${total}</h4>
        </div>
    );
};

export default Cart;