import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Dropdown, Badge, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext'; // Adjust the path to your CartContext
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import { Collapse } from 'bootstrap'; // Import Bootstrap's Collapse
import { HiHome } from 'react-icons/hi'; // Import fancy React icons
import { BiMenu } from 'react-icons/bi'; // Import another fancy React icon
import logo from '../../assets/logo.jpg'; // Import your logo image

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const { cart } = useCart(); // Access the cart from CartContext
  const navigate = useNavigate(); // Use navigate if needed

  const collapseRef = useRef(null); // Ref for the collapsible navbar
  const bsCollapse = useRef(null); // Ref for the Bootstrap Collapse instance

  // Initialize Bootstrap Collapse
  useEffect(() => {
    if (collapseRef.current) {
      bsCollapse.current = new Collapse(collapseRef.current, { toggle: false });
    }

    const handleScroll = () => {
      setShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (bsCollapse.current) {
        bsCollapse.current.dispose(); // Clean up the Collapse instance
      }
    };
  }, []);

  const cartCount = cart.length; // Dynamically get the cart count

  // Function to collapse the navbar
  const handleNavLinkClick = () => {
    if (bsCollapse.current && bsCollapse.current._isShown) {
      bsCollapse.current.hide(); // Collapse the navbar
    }
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${shadow ? 'shadow' : ''}`}
        style={{ backgroundColor: 'white', boxShadow: shadow ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }} // Inline style for navbar background
      >
        <div className="container">
          {/* Left Section: Logo */}
          <Link className="navbar-brand" to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logo} alt="Food Delivery Logo" style={{ height: '70px' }} /> {/* Logo */}
          </Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu size={24} /> {/* Fancy icon for the menu button */}
          </button>

          {/* Center Section: Home and Menu Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {['/', '/menu'].map((path, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? 'nav-link mx-2 text-danger fw-bold' : 'nav-link mx-2 fw-bold'}
                    style={{ textDecoration: 'none', transition: 'color 0.3s' }}
                    onClick={handleNavLinkClick} // Collapse navbar on click
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'red')} // Hover effect
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')} // Reset color on leave
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Section: Cart Icon, User Icon, and Contact Us Button */}
            <div className="d-flex align-items-center gap-3">
              <NavLink
                className="nav-link position-relative"
                to="/cart"
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={handleNavLinkClick} // Collapse navbar on click
              >
                <i className="bi bi-basket" style={{ fontSize: '20px', marginRight: '0.5rem' }}></i>
                {cartCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                )}
              </NavLink>

              <Link to="/contact" style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
                <Button variant="outline-danger" style={{ borderRadius: '20px' }}>Contact Us</Button> {/* Changed button variant to outline-danger */}
              </Link>

              <Dropdown align="end" >
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <i className="bi bi-person-gear" style={{ fontSize: '20px' }}></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/login" onClick={handleNavLinkClick}>
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/profile" onClick={handleNavLinkClick}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/order" onClick={handleNavLinkClick}>
                    My Orders
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
