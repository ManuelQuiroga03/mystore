// Checkout.js
import React from 'react';
import PaymentForm from './PaymentForm'; // Asegúrate de importar correctamente el componente

const Checkout = () => {
  return (
    <div>
      <h1>Checkout Page</h1>
      {/* Aquí renderizamos el formulario de pago */}
      <PaymentForm />
      {/* Otros elementos o información relacionada con el proceso de checkout */}
    </div>
  );
};

export default Checkout;
