import React from 'react';
import { Button } from 'react-bootstrap';
import './cart.css'


const Cart = (props) => {
    const cart = props.cart;
    const courseTotal = cart.reduce((sum, course) => sum + course.price, 0);
    const tax = courseTotal/20;

    return (
        <div className="cart-text">
            <h2>Ordered items: {cart.length}</h2>
            <p>Price: {courseTotal}</p>
            <p>Tax: {tax}</p>
            <p>Total: {courseTotal+tax}</p>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;