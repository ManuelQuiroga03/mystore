import React from "react";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Navbar.css'

const Navbar = ({handleAddToCart, cartItems}) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {/* <span className="numCart">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> */}
                    </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;