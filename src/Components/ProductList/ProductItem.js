import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Products.css";

// import { Link } from "react-router-dom";

const ProductItem = ({ product, handleAddToCart }) => {
  const { id, title, price, description, image, category } = product;
  const addToCart = () => {
    handleAddToCart(product);
  };

  return (
    // <Link to={{ pathname: `/product/${id}`, state: { product } }} className="product-link" >
    <div className="product-card">
      <img src={product.image} alt='img' className="card-img-top" />
      <div className="product-details">
        <h5 className="card-text-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">{category}</p>
      </div>
      <div className="button-container">
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faEye} /> Ver
        </button>
        <button className="btn btn-success" onClick={addToCart}>
          <FontAwesomeIcon icon={faShoppingCart} /> Carrito
        </button>
        <button className="btn btn-info">
          <FontAwesomeIcon icon={faShoppingBag} className="buy-icon" /> Comprar
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default ProductItem;
