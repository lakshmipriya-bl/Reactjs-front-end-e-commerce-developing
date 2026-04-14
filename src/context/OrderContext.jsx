import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('luxe_orders');
    if (savedOrders) {
      try {
        setAllOrders(JSON.parse(savedOrders));
      } catch (err) {
        console.error('Failed to parse orders:', err);
      }
    }
  }, []);

  // Sync orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('luxe_orders', JSON.stringify(allOrders));
  }, [allOrders]);

  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: `LUXE-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toISOString(),
      userEmail: user?.email || 'guest',
      status: 'Processing'
    };
    
    setAllOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrderById = (id) => {
    return allOrders.find(order => order.id === id);
  };

  // Filter orders for the current user
  const userOrders = allOrders.filter(order => order.userEmail === user?.email);

  return (
    <OrderContext.Provider value={{ orders: userOrders, allOrders, addOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
