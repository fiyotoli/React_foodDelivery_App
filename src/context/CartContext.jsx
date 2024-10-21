// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize cart state from localStorage if available
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) => 
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId, decrease = false) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
            if (existingItem) {
                if (decrease && existingItem.quantity > 1) {
                    return prevCart.map((cartItem) => 
                        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                    );
                } else {
                    return prevCart.filter((cartItem) => cartItem.id !== itemId);
                }
            }
            return prevCart;
        });
    };

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        // Update localStorage whenever cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
