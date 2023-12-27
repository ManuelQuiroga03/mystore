// Cart.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Cart.css'

const Cart = ({ cartItems }) => {
    // Calcula la cantidad total de productos en el carrito
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Calcula el monto total de la compra
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                <li key={index}>
                    <section className='item-row'>
                        <article className='item-cart'>
                            <div tabIndex={0} className='item-cart__asset'>
                                <img src={item.images[0]} alt={item.title} className="card-img-top"/>
                            </div>
                            <div className='item-cart__info'>
                                <div tabIndex={0} className='item-title'>
                                    <span>{item.title}</span>
                                </div>
                                <p className='item-cart__description-text'>{item.description}</p>
                            </div>
                            <div className='item-cart__actions'>
                                <div className='link-action'>
                                    <span role='button' className='link' tabIndex={0}>
                                        <span>Eliminar</span>
                                    </span>
                                    <span role='button' className='link' tabIndex={0}>
                                        <span>Guardar</span>
                                    </span>
                                    <span role='button' className='link' tabIndex={0}>
                                        <span>Modificar</span>
                                    </span>
                                    <span role='button' className='link' tabIndex={0}>
                                        <span>Comprar ahora</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </section>
                    ${item.price} - {item.category.name}
                </li>
                ))}
            </ul>
        </div>
        <div className='col-md-5'>
            <h2>Resumen de compra:</h2>
            <p>Cantidad de Productos: {totalItems}</p>
            <p>Total a Pagar: ${totalPrice.toFixed(2)}</p>
            <button className="btn btn-primary" >
            Continuar Comprando
            </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
