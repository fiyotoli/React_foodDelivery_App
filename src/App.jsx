import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Menu from './pages/Menu/Menu';
import MenuDetail from './pages/MenuDetail/MenuDetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the loading time as necessary

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Router basename="/React_foodDelivery_App">  {/* Add basename to match your GitHub Pages repo */}
        <Navbar />

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/menu-detail/:id" element={<MenuDetail />} />
             
            </Routes>

            {/* Scroll-to-top button */}
            {showScroll && (
              <button
                onClick={scrollToTop}
                className="btn btn-danger"
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                aria-label="Scroll to top"
              >
                <FaArrowUp color="white" size={24} />
              </button>
            )}

            <Footer />
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
