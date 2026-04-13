import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as cartUtils from '../utils/cart';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    setCart(cartUtils.getCart());
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2500);
  }, []);

  const addToCart = useCallback((product) => {
    const updated = cartUtils.addToCart(product);
    setCart([...updated]);
    showToast(`${product.title} added to cart!`);
  }, [showToast]);

  const removeFromCart = useCallback((productId) => {
    const updated = cartUtils.removeFromCart(productId);
    setCart([...updated]);
    showToast('Item removed from cart', 'error');
  }, [showToast]);

  const updateQuantity = useCallback((productId, quantity) => {
    const updated = cartUtils.updateQuantity(productId, quantity);
    setCart([...updated]);
  }, []);

  const clearCartItems = useCallback(() => {
    const updated = cartUtils.clearCart();
    setCart(updated);
    showToast('Cart cleared');
  }, [showToast]);

  const cartCount = cartUtils.getCartCount(cart);
  const cartTotal = cartUtils.getCartTotal(cart);

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCartItems,
      toasts,
      showToast,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
