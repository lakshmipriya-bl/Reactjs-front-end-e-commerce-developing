import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { formatINR } from '../utils/currency';
import { 
  FiUser, 
  FiPackage, 
  FiHeart, 
  FiMapPin, 
  FiCreditCard, 
  FiSettings, 
  FiLogOut, 
  FiShoppingBag,
  FiChevronRight,
  FiShield,
  FiEdit2,
  FiPlus
} from 'react-icons/fi';
import './ProfilePage.css';

export default function ProfilePage() {
  const { user, isLoggedIn, logout } = useAuth();
  const { orders } = useOrders();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="profile-card glass animate-fade-in-up">
            <div className="profile-card-header">
              <h3>Personal Information</h3>
              <button 
                className={`btn btn-sm ${isEditing ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
            <div className="profile-info-grid">
              <div className="profile-info-item">
                <span className="profile-info-label">Full Name</span>
                {isEditing ? (
                  <input type="text" className="input-field" defaultValue={user.name} />
                ) : (
                  <span className="profile-info-value">{user.name}</span>
                )}
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Email Address</span>
                <span className="profile-info-value">{user.email}</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Phone Number</span>
                {isEditing ? (
                  <input type="text" className="input-field" defaultValue="+91 98765 43210" />
                ) : (
                  <span className="profile-info-value">+91 98765 43210</span>
                )}
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Location</span>
                {isEditing ? (
                  <input type="text" className="input-field" defaultValue="Mumbai, India" />
                ) : (
                  <span className="profile-info-value">Mumbai, India</span>
                )}
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div className="profile-card glass animate-fade-in-up">
            <div className="profile-card-header">
              <h3>My Orders</h3>
              <span className="badge">{orders.length} Orders</span>
            </div>
            
            {orders.length === 0 ? (
              <div className="empty-state-small">
                 <FiShoppingBag />
                 <p>You haven't placed any orders yet.</p>
                 <Link to="/products" className="btn btn-primary btn-sm">Shop Now</Link>
              </div>
            ) : (
              <div className="profile-orders-list">
                {orders.map((order) => (
                  <div key={order.id} className="profile-order-item">
                    <div className="profile-order-icon">
                      <FiShoppingBag />
                    </div>
                    <div className="profile-order-details">
                      <div className="profile-order-id">{order.id}</div>
                      <div className="profile-order-date">
                        {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                    </div>
                    <div className="profile-order-status">
                      <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="profile-order-total">
                      {formatINR(order.total)}
                    </div>
                    <button className="btn-icon">
                      <FiChevronRight />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'addresses':
        return (
          <div className="profile-card glass animate-fade-in-up">
            <div className="profile-card-header">
              <h3>Saved Addresses</h3>
              <button className="btn btn-outline btn-sm"><FiPlus /> Add New</button>
            </div>
            <div className="address-grid">
               <div className="address-card card">
                  <div className="address-type">Home</div>
                  <p className="address-text">123 Luxury Lane, Apartment 4B<br/>Bandra West, Mumbai 400050<br/>Maharashtra, India</p>
                  <div className="address-actions">
                     <button className="btn-text">Edit</button>
                     <button className="btn-text text-danger">Remove</button>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="profile-card glass animate-fade-in-up">
            <div className="profile-card-header">
              <h3>Payment Methods</h3>
              <button className="btn btn-outline btn-sm"><FiPlus /> Add Card</button>
            </div>
            <div className="payment-grid">
               <div className="payment-card card">
                  <div className="payment-card-info">
                     <FiCreditCard className="card-icon" />
                     <div>
                        <p className="card-number">•••• •••• •••• 4242</p>
                        <p className="card-expiry">Expires 12/28</p>
                     </div>
                  </div>
                  <button className="btn-text text-danger">Remove</button>
               </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="profile-card glass animate-fade-in-up">
            <div className="profile-card-header">
              <h3>Settings</h3>
            </div>
            <div className="settings-list">
               <div className="setting-item">
                  <div className="setting-info">
                     <h4>Email Notifications</h4>
                     <p>Receive updates about your orders and luxury offers.</p>
                  </div>
                  <input type="checkbox" defaultChecked />
               </div>
               <div className="setting-item">
                  <div className="setting-info">
                     <h4>Order Tracking SMS</h4>
                     <p>Get real-time updates on your phone.</p>
                  </div>
                  <input type="checkbox" defaultChecked />
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
           <h1 className="section-title">My Account</h1>
           <p className="section-subtitle">Manage your personal information and orders</p>
        </div>
        
        <div className="profile-layout">
          {/* Profile Sidebar */}
          <div className="profile-sidebar glass animate-fade-in-up">
            <div className="profile-user-info">
              <div className="profile-avatar-large">
                {user.avatar}
              </div>
              <h2 className="profile-name">{user.name}</h2>
              <p className="profile-email">{user.email}</p>
            </div>
            
            <nav className="profile-nav">
              <button 
                className={`profile-nav-item ${activeTab === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                <FiUser /> Personal Info
              </button>
              <button 
                className={`profile-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <FiPackage /> My Orders
              </button>
              <Link to="/wishlist" className="profile-nav-item">
                <FiHeart /> Wishlist
              </Link>
              <button 
                className={`profile-nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <FiMapPin /> Saved Addresses
              </button>
              <button 
                className={`profile-nav-item ${activeTab === 'payment' ? 'active' : ''}`}
                onClick={() => setActiveTab('payment')}
              >
                <FiCreditCard /> Payment Methods
              </button>
              <button 
                className={`profile-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <FiSettings /> Settings
              </button>
              {user.isAdmin && (
                <Link to="/admin" className="profile-nav-item" style={{ color: 'var(--accent-primary)', marginTop: '8px' }}>
                  <FiShield /> Admin Panel
                </Link>
              )}
              <button className="profile-nav-item text-danger" onClick={logout} id="profile-logout">
                <FiLogOut /> Sign Out
              </button>
            </nav>
          </div>
          
          {/* Profile Content */}
          <div className="profile-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
