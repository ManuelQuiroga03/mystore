// Checkout.js
import React from 'react';
import PaymentForm from './PaymentForm'; // Asegúrate de importar correctamente el componente
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  return (
    <div className='container'>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
