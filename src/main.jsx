import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// src/index.js or src/App.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <CartProvider> 
   
   <App/>
   
    </CartProvider>
  
 
      {/* App already has BrowserRouter */}
    </BrowserRouter>
  </StrictMode>,
)
