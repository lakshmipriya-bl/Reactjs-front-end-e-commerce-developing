import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { fetchProductById } from '../utils/api';
import { formatINR } from '../utils/currency';
import {
  FiShoppingCart,
  FiCreditCard,
  FiChevronRight,
  FiStar,
  FiMinus,
  FiPlus,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeart,
} from 'react-icons/fi';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        setProduct(data);
        setSelectedImage(0);
        setQuantity(1);
        setActiveTab('description');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const handleBuyNow = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      navigate('/checkout');
    }
  };

  if (loading) {
    return (
      <div className="pdp-page">
        <div className="container">
          <div className="pdp-skeleton">
            <div className="skeleton" style={{ height: 500, borderRadius: 16 }} />
            <div className="pdp-skeleton__info">
              <div className="skeleton" style={{ height: 24, width: '40%' }} />
              <div className="skeleton" style={{ height: 40, width: '80%' }} />
              <div className="skeleton" style={{ height: 20, width: '30%' }} />
              <div className="skeleton" style={{ height: 100 }} />
              <div className="skeleton" style={{ height: 48, width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pdp-page">
        <div className="empty-state" style={{ marginTop: '40px' }}>
          <div className="empty-state-icon">😕</div>
          <h2 className="empty-state-title">Product not found</h2>
          <p className="empty-state-text">{error || 'This product could not be loaded.'}</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.thumbnail];
  const discount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : 0;
  const originalPrice = discount > 0 ? product.price / (1 - discount / 100) : null;

  return (
    <div className="pdp-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="pdp-breadcrumbs animate-fade-in" id="pdp-breadcrumbs">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <Link to="/products">Products</Link>
          <FiChevronRight />
          <Link to={`/products?category=${product.category}`}>
            {product.category?.replace(/-/g, ' ')}
          </Link>
          <FiChevronRight />
          <span>{product.title}</span>
        </nav>

        <div className="pdp-layout">
          {/* Image Gallery */}
          <div className="pdp-gallery animate-fade-in-up" id="pdp-gallery">
            <div 
              className="pdp-gallery__main"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={images[selectedImage]}
                alt={product.title}
                className={`pdp-gallery__image ${isZoomed ? 'pdp-gallery__image--zoomed' : ''}`}
                style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : {}}
              />
              {discount > 0 && (
                <span className="pdp-gallery__discount">-{discount}%</span>
              )}
            </div>
            {images.length > 1 && (
              <div className="pdp-gallery__thumbs">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`pdp-gallery__thumb ${selectedImage === i ? 'pdp-gallery__thumb--active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={img} alt={`${product.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pdp-info animate-fade-in-up" style={{ animationDelay: '0.1s' }} id="pdp-info">
            <span className="pdp-info__category">{product.category?.replace(/-/g, ' ')}</span>
            <h1 className="pdp-info__title">{product.title}</h1>

            {product.brand && (
              <p className="pdp-info__brand">by {product.brand}</p>
            )}

            {/* Rating */}
            <div className="pdp-info__rating">
              <div className="pdp-info__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`pdp-info__star ${i < Math.round(product.rating) ? 'pdp-info__star--filled' : ''}`}
                  />
                ))}
              </div>
              <span className="pdp-info__rating-value">{product.rating?.toFixed(1)}</span>
              <span className="pdp-info__reviews">({product.reviews?.length || 0} reviews)</span>
            </div>

            {/* Price */}
            <div className="pdp-info__price-block">
              <span className="pdp-info__price">{formatINR(product.price)}</span>
              {originalPrice && (
                <span className="pdp-info__original-price">{formatINR(originalPrice)}</span>
              )}
              {discount > 0 && (
                <span className="pdp-info__save-badge">Save {discount}%</span>
              )}
            </div>

            {/* Tabs */}
            <div className="pdp-tabs">
              <div className="pdp-tabs__header">
                {['description', 'specs', 'shipping'].map(tab => (
                  <button 
                    key={tab}
                    className={`pdp-tabs__btn ${activeTab === tab ? 'pdp-tabs__btn--active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="pdp-tabs__content">
                {activeTab === 'description' && <p>{product.description}</p>}
                {activeTab === 'specs' && (
                  <ul className="pdp-specs">
                    {product.brand && <li><span>Brand:</span> {product.brand}</li>}
                    {product.weight && <li><span>Weight:</span> {product.weight}g</li>}
                    {product.dimensions && (
                      <li><span>Dimensions:</span> {product.dimensions.width}x{product.dimensions.height}x{product.dimensions.depth} cm</li>
                    )}
                    {product.sku && <li><span>SKU:</span> {product.sku}</li>}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="pdp-shipping-info">
                    <p><strong>Shipping:</strong> {product.shippingInformation || 'Standard shipping available'}</p>
                    <p><strong>Returns:</strong> {product.returnPolicy || '30-day return policy'}</p>
                    <p><strong>Warranty:</strong> {product.warrantyInformation || 'Standard warranty applies'}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Meta */}
            <div className="pdp-info__meta">
              {product.stock > 0 ? (
                <span className="pdp-info__stock pdp-info__stock--in">
                  ✓ In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="pdp-info__stock pdp-info__stock--out">
                  ✕ Out of Stock
                </span>
              )}
              {product.warrantyInformation && (
                <span className="pdp-info__warranty">🛡️ {product.warrantyInformation}</span>
              )}
              {product.shippingInformation && (
                <span className="pdp-info__shipping">🚚 {product.shippingInformation}</span>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="pdp-info__actions">
              <div className="pdp-info__qty">
                <button
                  className="btn-icon"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  id="pdp-qty-minus"
                >
                  <FiMinus />
                </button>
                <span className="pdp-info__qty-value">{quantity}</span>
                <button
                  className="btn-icon"
                  onClick={() => setQuantity(q => q + 1)}
                  id="pdp-qty-plus"
                >
                  <FiPlus />
                </button>
              </div>
              <button
                className="btn btn-secondary pdp-info__add-btn"
                onClick={handleAddToCart}
                id="pdp-add-to-cart"
              >
                <FiShoppingCart /> Add to Cart
              </button>
              <button
                className="btn btn-primary pdp-info__buy-btn"
                onClick={handleBuyNow}
                id="pdp-buy-now"
              >
                <FiCreditCard /> Buy Now
              </button>
              <button 
                className={`btn-icon pdp-info__wish-btn ${isInWishlist(product.id) ? 'pdp-info__wish-btn--active' : ''}`} 
                onClick={() => toggleWishlist(product)}
                id="pdp-wishlist"
                title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <FiHeart className={isInWishlist(product.id) ? 'fill-icon' : ''} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="pdp-trust">
              <div className="pdp-trust__item">
                <FiTruck /> Free Shipping
              </div>
              <div className="pdp-trust__item">
                <FiShield /> Secure Payment
              </div>
              <div className="pdp-trust__item">
                <FiRefreshCw /> Easy Returns
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <section className="pdp-reviews animate-fade-in-up" id="pdp-reviews">
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Customer Reviews</h2>
            <div className="pdp-reviews__grid">
              {product.reviews.map((review, i) => (
                <div key={i} className="pdp-review card">
                  <div className="pdp-review__header">
                    <div className="pdp-review__avatar">
                      {review.reviewerName?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="pdp-review__name">{review.reviewerName}</p>
                      <div className="pdp-review__stars">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <FiStar
                            key={j}
                            className={`pdp-info__star ${j < review.rating ? 'pdp-info__star--filled' : ''}`}
                            style={{ fontSize: '0.75rem' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="pdp-review__text">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
