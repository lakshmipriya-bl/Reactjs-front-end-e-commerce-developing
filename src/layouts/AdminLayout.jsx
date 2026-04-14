import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  FiGrid, 
  FiBox, 
  FiShoppingCart, 
  FiUsers, 
  FiSettings, 
  FiLogOut,
  FiSun,
  FiMoon,
  FiMenu,
  FiX
} from 'react-icons/fi';
import './AdminLayout.css';

export default function AdminLayout() {
  const { user, isLoggedIn, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  if (!isLoggedIn || !user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="admin-layout">
      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="admin-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-logo" title="Back to Store">
             <span className="admin-logo-icon">◆</span>
             <span className="admin-logo-text">LUXE<span className="admin-logo-sub">ADMIN</span></span>
          </Link>
        </div>
        
        <nav className="admin-nav">
          <div className="admin-nav-group">
            <p className="admin-nav-label">Main Menu</p>
            <Link 
              to="/admin" 
              className={`admin-nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
            >
              <FiGrid /> Dashboard
            </Link>
            <Link 
              to="/admin/products" 
              className={`admin-nav-link ${location.pathname.includes('/admin/products') ? 'active' : ''}`}
            >
              <FiBox /> Products
            </Link>
            <Link 
              to="/admin/orders" 
              className={`admin-nav-link ${location.pathname.includes('/admin/orders') ? 'active' : ''}`}
            >
              <FiShoppingCart /> Orders
            </Link>
             <button 
              className={`admin-nav-link`}
            >
              <FiUsers /> Customers
            </button>
          </div>

          <div className="admin-nav-group mt-auto">
            <Link to="/" className="admin-nav-link">
              <FiHome /> Back to Store
            </Link>
            <button className="admin-nav-link" onClick={toggleTheme}>
               {isDark ? <FiSun /> : <FiMoon />} Theme
            </button>
            <button className="admin-nav-link">
              <FiSettings /> Settings
            </button>
            <button className="admin-nav-link text-danger" onClick={handleLogout}>
              <FiLogOut /> Sign Out
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-title">
             <button 
               className="admin-menu-toggle mobile-only" 
               onClick={() => setSidebarOpen(true)}
               aria-label="Toggle menu"
             >
               <FiMenu />
             </button>
             <h2>{
                location.pathname === '/admin' ? 'Dashboard Overview' :
                location.pathname.includes('/products') ? 'Manage Products' :
                location.pathname.includes('/orders') ? 'Manage Orders' : 'Admin Area'
             }</h2>
          </div>
          <div className="admin-header-actions">
            <div className="admin-user-profile">
               <div className="admin-avatar">{user.avatar}</div>
               <span className="admin-user-name">{user.name} <span className="badge-admin">Admin</span></span>
            </div>
          </div>
        </header>

        <div className="admin-content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
