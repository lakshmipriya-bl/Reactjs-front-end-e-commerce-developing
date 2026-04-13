import { Link } from 'react-router-dom';
import { FiGithub, FiHeart, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">◆</span>
              <span className="footer__logo-text">LUXE</span>
              <span className="footer__logo-sub">STORE</span>
            </div>
            <p className="footer__about">
              Premium products curated for the modern lifestyle. Experience shopping redefined with our handpicked collection.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/products" className="footer__link">All Products</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
            <Link to="/login" className="footer__link">Login</Link>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Categories</h4>
            <Link to="/products?category=smartphones" className="footer__link">Smartphones</Link>
            <Link to="/products?category=laptops" className="footer__link">Laptops</Link>
            <Link to="/products?category=fragrances" className="footer__link">Fragrances</Link>
            <Link to="/products?category=furniture" className="footer__link">Furniture</Link>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Contact</h4>
            <a href="mailto:hello@luxestore.com" className="footer__link">
              <FiMail /> hello@luxestore.com
            </a>
            <p className="footer__text">Mon - Fri: 9am - 5pm</p>
            <p className="footer__text">Customer support available 24/7</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} LUXE STORE. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
