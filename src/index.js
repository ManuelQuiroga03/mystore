import React from 'react';
import { createRoot } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import reportWebVitals from './reportWebVitals';

//Mis importaciones
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(<App/>);
reportWebVitals();
