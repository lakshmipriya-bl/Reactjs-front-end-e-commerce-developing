import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiChevronRight } from 'react-icons/fi';
import './WishlistPage.css';

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <div className="empty-state" style={{ marginTop: '20px' }}>
            <div className="empty-state-icon">
                <FiHeart style={{ fill: 'none', stroke: 'var(--text-muted)' }} />
            </div>
            <h2 className="empty-state-title">Your wishlist is empty</h2>
            <p className="empty-state-text">
              Save items you love to your wishlist and they'll show up here.
            </p>
            <Link to="/products" className="btn btn-primary">
              <FiShoppingBag /> Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="pdp-breadcrumbs animate-fade-in">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <span>Wishlist</span>
        </nav>

        <div className="wishlist-header">
          <div>
            <h1 className="section-title">My Wishlist</h1>
            <p className="section-subtitle">
              {wishlistCount} item{wishlistCount !== 1 ? 's' : ''} saved
            </p>
          </div>
        </div>

        <div className="products-grid">
          {wishlist.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
