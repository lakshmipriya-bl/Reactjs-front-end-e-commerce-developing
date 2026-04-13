import { createContext, useContext, useState, useEffect } from 'react';
import { useCart } from './CartContext';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('luxe-wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const { showToast } = useCart();

  useEffect(() => {
    localStorage.setItem('luxe-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist(prev => [...prev, product]);
      showToast(`${product.title} added to wishlist`);
    }
  };

  const removeFromWishlist = (productId) => {
    const product = wishlist.find(item => item.id === productId);
    setWishlist(prev => prev.filter(item => item.id !== productId));
    if (product) {
      showToast(`${product.title} removed from wishlist`, 'error');
    }
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist, 
      toggleWishlist, 
      isInWishlist,
      wishlistCount: wishlist.length 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
