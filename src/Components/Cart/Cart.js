// Cart.js
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "../../Styles/Cart.css";

const Cart = ({ cartItems }) => {
const [finalTotalPrice, setTotalPrice] = useState(0);
const selectRef = useRef(null);


const handleShippingChange = (event) => {
    const shippingMethod = event.target.value;
    const shippingOption = shippingOptions.find((option) => option.value === shippingMethod);
    const shippingPrice = shippingOption.price;

    const newTotalPrice = totalPrice + shippingPrice;

    setTotalPrice(newTotalPrice);

    selectRef.current.value = shippingMethod;
};

// Calcula la cantidad total de productos en el carrito
const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
);

// Calcula el monto total de la compra
const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

const shippingOptions = [
    { value: "standard", label: "Standard-Delivery- $ 5.00", price: 5 },
    { value: "fast", label: "Fast-Delivery- $ 10.00", price: 10 },
    { value: "premium", label: "Premium-Delivery- $ 15.00", price: 15 },
];

return (
<div className="container mt-3 mb-5">
    <div className="card">
    <div className="row">
        <div className="col-md-8 cart">
        <div class="title">
            <div class="row">
            <div class="col">
                <h4>
                <b>Shopping Cart</b>
                </h4>
            </div>
            <div class="col align-self-center" style={{ textAlign: "end" }}>
                {" "}
                {totalItems} items
            </div>
            </div>
        </div>
        <div
            className="item-container"
            style={{ overflowY: "scroll", maxHeight: "300px" }}
        >
            {cartItems.map((item, index) => (
            <div key={index} class="row border-top border-bottom">
                <div class="row main align-items-center">
                <div class="col-2">
                    <img class="img-fluid" src={item.images[0]} alt="" />
                </div>
                <div class="col">
                    <div class="row text-muted">{item.title}</div>
                    <div class="row card-text">{item.description}</div>
                </div>
                <div class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                    {item.quantity}
                    </a>
                    <a href="#">+</a>
                </div>
                <div class="col">
                    $ {item.price} <span class="close">&#10005;</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div class="back-to-shop">
            <a href="/">
                <FontAwesomeIcon icon={faArrowLeft} />
            </a>
            <span class="text-muted">Back to shop</span>
        </div>
        </div>
        <div className="col-md-4 summary">
        <div>
            <h5>
            <b>Summary</b>
            </h5>
        </div>
        <hr />
        <div class="row">
            <div class="col" style={{ paddingLeft: 0 }}>
            {" "}
            {totalItems} ITEMS
            </div>
            <div class="col text-right">$ {totalPrice} </div>
        </div>
        <form>
            <p>SHIPPING</p>
            <select ref={selectRef} onChange={handleShippingChange}>
            {shippingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
        </form>
        <div
            class="row"
            style={{
            borderTop: "1px solid rgba(0,0,0,.1)",
            padding: "2vh 0",
            }}
        >
            <div class="col">TOTAL PRICE</div>
            <div class="col text-right">$ {finalTotalPrice} </div>
        </div>
        <button class="btn">CHECKOUT</button>
        </div>
    </div>
    </div>
</div>
);
};

export default Cart;
