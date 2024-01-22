// import React, { useState, useRef } from 'react';
// import '../../Styles/PaymentForm.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const PaymentForm = () => {
//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");
//     const [expirationDate, setExpirationDate] = useState("");
//     const [securityCode, setSecurityCode] = useState("");
//     const [isCardFlipped, setIsCardFlipped] = useState(false);

//     //Refs
//     const cardRef = useRef(null);
//     const bankidRef = useRef(null);
//     const seccodeRef = useRef(null);
//     const dateValueRef = useRef(null);
//     const fullNameRef = useRef(null);
//     const cardContainerRef = useRef(null);

//     // Efecto en tarjeta
//     const handleCCVFocus = () => {
//         setIsCardFlipped(true);
//     }

//     const handleCCVBlur = () => {
//         setIsCardFlipped(false);
//     }

//     //Declaración de las tarjetas
//     const cards = [
//       {
//         nome: "mastercard",
//         colore: "#0061A8",
//         src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
//       },
//       {
//         nome: "visa",
//         colore: "#E2CB38",
//         src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png",
//       },
//       {
//         nome: "dinersclub",
//         colore: "#888",
//         src: "http://www.worldsultimatetravels.com/wp-content/uploads/2016/07/Diners-Club-Logo-1920x512.png",
//       },
//       {
//         nome: "americanExpress",
//         colore: "#108168",
//         src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png",
//       },
//       {
//         nome: "discover",
//         colore: "#86B8CF",
//         src: "https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg",
//       },
//       {
//         nome: "dankort",
//         colore: "#0061A8",
//         src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png",
//       },
//     ];

//     //Detectar el tipo de tarjeta
//     const detectCardType = (number) => {
//       const firstTwoDigits = number.substring(0, 2);
//       if (firstTwoDigits >= "51" && firstTwoDigits <= "55") {
//         console.log('tarjeta master card reconocida');
//         return "mastercard";
//       } else if (firstTwoDigits === "4") {
//         console.log('detecta visa');
//         return "visa";
//       } else if (
//         firstTwoDigits === "36" ||
//         firstTwoDigits === "38" ||
//         firstTwoDigits === "39"
//       ) {
//         return "dinersclub";
//       } else if (firstTwoDigits === "34" || firstTwoDigits === "37") {
//         return "americanexpress";
//       } else if (firstTwoDigits === "65") {
//         return "discover";
//       } else if (firstTwoDigits === "50" || firstTwoDigits === "5019") {
//         return "dankort";
//       } else {
//         return null;
//       }
//     };

//     //Actualizar tarjeta
//     const updateCardAndSecurityCode = () => {
//         const cardType = detectCardType(number);
//         const cardContainer = cardContainerRef.current;
//         const bankidElement = bankidRef.current;
//         const seccodeElement = seccodeRef.current;
    
//         if (!cardContainer || !bankidElement || !seccodeElement) {
//             console.error('One or more elements are null');
//             return;
//         }
    
//         if (!cardType) {
//             console.log('Card type is null or undefined');
//             return;
//         }
    
//         const foundCard = cards.find((card) => card.nome === cardType);
    
//         if (!foundCard) {
//             console.error('Card not found');
//             cardContainer.style.backgroundColor = '#cecece';
//             bankidElement.src = '';
//             seccodeElement.textContent = '';
//             return;
//         }
    
//         const { colore, src } = foundCard;
//         cardContainer.style.backgroundColor = colore;
//         bankidElement.src = src;
//         seccodeElement.textContent = securityCode;
//     };
    

//     //Actualizar el nombre
//     const updateName = (nameValue) => {
//         if (fullNameRef.current) {
//             fullNameRef.current.textContent = nameValue;
//         }
//     };

//     //Actualizar fecha de expiración
//     const updateExpirationDate = (expirationDateValue) => {
//         if (dateValueRef.current) {
//             dateValueRef.current.textContent = expirationDateValue;
//         }
//     };

//     // Funciones para actualizar la tarjeta
//     const handleNumberChange = (event) => {
//         setNumber(event.target.value);
//         updateCardAndSecurityCode();
//     }

//     const handleNameChange = (event) => {
//         const {value} = event.target;
//         setName(value);
//         updateName(value);
//     }

//     const handleExpirationChange = (event) => {
//         const {value} = event.target;
//         setExpirationDate(value);
//         updateExpirationDate(value);
//     }

//     const handleSecurityCodeChange = (event) => {
//         setSecurityCode(event.target.value);
//         updateCardAndSecurityCode();
//     }

//     return (
//     <div>
//         <div className={`containerCard ${isCardFlipped ? 'is-flipped' : ''}`}>
//             <div className="col1">
//                 <div className="card">
//                     <div className="front" ref={cardContainerRef}>
//                         <div className="type">
//                             <img className="bankid" ref={bankidRef} alt="" />
//                         </div>
//                         <span className="chip"></span>
//                         <span className="card_number" ref={cardRef}>
//                         {number}
//                         </span>
//                         <div className="date">
//                         <span className="date_value" ref={dateValueRef}>
//                             {expirationDate}
//                         </span>
//                         </div>
//                         <span className="fullname" ref={fullNameRef}>
//                         {name}
//                         </span>
//                     </div>
//                     <div className="back">
//                         <div className="magnetic"></div>
//                         <div className="bar"></div>
//                         <span className="seccode" ref={seccodeRef}>
//                             {securityCode}
//                         </span>
//                         <span className="chip"></span>
//                         <span className="disclaimer">
//                             This card is property of Random Bank of Random corporation. If
//                             found please return to Random Bank of Random corporation -
//                             21968 Paris, Verdi Street, 34
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <div className="col2">
//                 <label>Card Number</label>
//                 <input
//                     className="number"
//                     type="text"
//                     maxLength="19"
//                     value={number}
//                     onChange={handleNumberChange}
//                 />
//                 <label>Cardholder name</label>
//                 <input
//                     className="inputname"
//                     type="text"
//                     value={name}
//                     onChange={handleNameChange}
//                 />
//                 <label>Expiry date</label>
//                 <input
//                     className="expire"
//                     type="text"
//                     placeholder="MM / YYYY"
//                     value={expirationDate}
//                     onChange={handleExpirationChange}
//                 />
//                 <label>Security Number</label>
//                 <input
//                     className="ccv"
//                     type="text"
//                     placeholder="CVC"
//                     maxLength="3"
//                     value={securityCode}
//                     onFocus={handleCCVFocus}
//                     onBlur={handleCCVBlur}
//                     onChange={handleSecurityCodeChange}
//                 />
//                 <button className="buy">
//                     <i className="material-icons">lock</i> Pay --.-- €
//                 </button>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default PaymentForm;