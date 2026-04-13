import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';
import { formatINR } from '../utils/currency';
import './ProductCard.css';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const isLiked = isInWishlist(product.id);

  const discount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card card animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
      id={`product-card-${product.id}`}
    >
      <div className="product-card__image-wrap">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-card__image"
          loading="lazy"
        />
        {discount > 0 && (
          <span className="product-card__discount">-{discount}%</span>
        )}
        <button
          className={`product-card__wishlist-btn ${isLiked ? 'product-card__wishlist-btn--active' : ''}`}
          onClick={handleWishlist}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          id={`wishlist-${product.id}`}
        >
          <FiHeart className={isLiked ? 'fill-icon' : ''} />
        </button>
        <button
          className="product-card__cart-btn"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          id={`add-to-cart-${product.id}`}
        >
          <FiShoppingCart />
        </button>
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__footer">
          <div className="product-card__price-group">
            <span className="product-card__price">{formatINR(product.price)}</span>
            {discount > 0 && (
              <span className="product-card__original-price">
                {formatINR(product.price / (1 - discount / 100))}
              </span>
            )}
          </div>
          <div className="product-card__rating">
            <FiStar className="product-card__star" />
            <span>{product.rating?.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
