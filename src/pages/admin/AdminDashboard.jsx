import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../utils/api';
import {
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiTrendingUp,
  FiArrowRight,
  FiStar,
  FiPackage,
} from 'react-icons/fi';
import './AdminDashboard.css';

const mockStats = [
  { label: 'Total Revenue', value: '₹12,84,500', change: '+18.2%', positive: true, icon: FiTrendingUp, color: '#6c5ce7' },
  { label: 'New Orders',    value: '348',         change: '+9.4%',  positive: true, icon: FiShoppingCart, color: '#00cec9' },
  { label: 'Total Products', value: '—',          change: 'live',   positive: true, icon: FiBox, color: '#fd79a8' },
  { label: 'Active Customers', value: '1,240',    change: '+5.1%',  positive: true, icon: FiUsers, color: '#fdcb6e' },
];

const mockOrders = [
  { id: 'ORD-1093', customer: 'Priya Sharma',   amount: '₹8,499',  status: 'Delivered',  date: '2026-04-12' },
  { id: 'ORD-1092', customer: 'Arjun Mehta',    amount: '₹2,199',  status: 'In Transit',  date: '2026-04-11' },
  { id: 'ORD-1091', customer: 'Sneha Patel',    amount: '₹15,899', status: 'Processing',  date: '2026-04-10' },
  { id: 'ORD-1090', customer: 'Rahul Verma',    amount: '₹4,299',  status: 'Pending',     date: '2026-04-09' },
  { id: 'ORD-1089', customer: 'Kavita Nair',    amount: '₹6,750',  status: 'Delivered',   date: '2026-04-08' },
];

const statusClass = {
  Delivered:   'status-delivered',
  'In Transit': 'status-transit',
  Processing:  'status-processing',
  Pending:     'status-pending',
};

export default function AdminDashboard() {
  const [topProducts, setTopProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState('—');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(100, 0).then(data => {
      setTotalProducts(data.total ?? data.products.length);
      const sorted = [...data.products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      setTopProducts(sorted.slice(0, 5));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const stats = mockStats.map(s =>
    s.label === 'Total Products' ? { ...s, value: String(totalProducts) } : s
  );

  return (
    <div className="admin-dashboard">
      {/* Stats Grid */}
      <div className="admin-stats-grid">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="admin-stat-card glass animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="admin-stat-icon" style={{ background: `${stat.color}22`, color: stat.color }}>
                <Icon />
              </div>
              <div className="admin-stat-body">
                <p className="admin-stat-label">{stat.label}</p>
                <h3 className="admin-stat-value">{stat.value}</h3>
                <span className={`admin-stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Row */}
      <div className="admin-dashboard-row">
        {/* Recent Orders */}
        <div className="admin-card glass animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="admin-card-header">
            <h3><FiShoppingCart /> Recent Orders</h3>
            <Link to="/admin/orders" className="admin-card-link">View all <FiArrowRight /></Link>
          </div>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map(order => (
                  <tr key={order.id}>
                    <td className="order-id">{order.id}</td>
                    <td>{order.customer}</td>
                    <td className="order-amount">{order.amount}</td>
                    <td><span className={`admin-status ${statusClass[order.status]}`}>{order.status}</span></td>
                    <td className="order-date">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="admin-card glass animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <div className="admin-card-header">
            <h3><FiPackage /> Top Rated Products</h3>
            <Link to="/admin/products" className="admin-card-link">View all <FiArrowRight /></Link>
          </div>
          {loading ? (
            <div style={{ padding: '24px' }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton" style={{ height: 48, marginBottom: 12, borderRadius: 8 }} />
              ))}
            </div>
          ) : (
            <ul className="admin-top-products">
              {topProducts.map((p, i) => (
                <li key={p.id} className="admin-top-product">
                  <span className="admin-top-product-rank">#{i + 1}</span>
                  <img src={p.thumbnail} alt={p.title} className="admin-top-product-img" />
                  <div className="admin-top-product-info">
                    <p className="admin-top-product-name">{p.title}</p>
                    <p className="admin-top-product-price">₹{p.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="admin-top-product-rating">
                    <FiStar style={{ color: '#fdcb6e' }} />
                    <span>{p.rating?.toFixed(1)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
