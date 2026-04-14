import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useWishlist } from '../context/WishlistContext';
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHome,
  FiGrid,
  FiUser,
  FiLogOut,
  FiSun,
  FiMoon,
  FiHeart,
} from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  const { wishlistCount } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" id="nav-logo">
          <span className="navbar__logo-icon">◆</span>
          <span className="navbar__logo-text">LUXE</span>
          <span className="navbar__logo-sub">STORE</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link
            to="/"
            className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}
            id="nav-home"
          >
            <FiHome />
            <span>Home</span>
          </Link>
          <Link
            to="/products"
            className={`navbar__link ${location.pathname.startsWith('/products') ? 'navbar__link--active' : ''}`}
            id="nav-products"
          >
            <FiGrid />
            <span>Products</span>
          </Link>
          {isLoggedIn ? (
            <div className="navbar__user-menu">
              <Link to="/profile" className="navbar__profile-link" title="My Profile">
                <div className="navbar__avatar">{user.avatar}</div>
                <span className="navbar__user-name">{user.name}</span>
              </Link>
              <button className="navbar__logout-btn" onClick={logout} id="nav-logout" title="Sign Out">
                <FiLogOut />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`navbar__link ${location.pathname === '/login' ? 'navbar__link--active' : ''}`}
              id="nav-login"
            >
              <FiUser />
              <span>Login</span>
            </Link>
          )}
        </div>

        <div className="navbar__actions">
          {/* Theme Toggle */}
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <span className="navbar__theme-icon">
              {isDark ? <FiSun /> : <FiMoon />}
            </span>
            <span className="navbar__theme-label">{isDark ? 'Light' : 'Dark'}</span>
          </button>

          <Link to="/wishlist" className="navbar__action-btn" id="nav-wishlist" title="Wishlist">
            <FiHeart className={wishlistCount > 0 ? 'fill-icon' : ''} />
            {wishlistCount > 0 && (
              <span className="navbar__count-badge badge">{wishlistCount}</span>
            )}
          </Link>

          <Link to="/cart" className="navbar__cart-btn" id="nav-cart" title="Cart">
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="navbar__cart-badge badge">{cartCount}</span>
            )}
          </Link>
          <button
            className="navbar__menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            id="nav-menu-toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
