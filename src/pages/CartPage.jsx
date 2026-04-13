import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/currency';
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiArrowRight,
  FiChevronRight,
} from 'react-icons/fi';
import './CartPage.css';

export default function CartPage() {
  const { cart, cartTotal, cartCount, removeFromCart, updateQuantity, clearCartItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-state" style={{ marginTop: '20px' }}>
            <div className="empty-state-icon">🛒</div>
            <h2 className="empty-state-title">Your cart is empty</h2>
            <p className="empty-state-text">
              Looks like you haven't added anything to your cart yet.
              Start shopping to fill it up!
            </p>
            <Link to="/products" className="btn btn-primary" id="cart-shop-now">
              <FiShoppingBag /> Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 18% GST (standard Indian tax rate)
  const gst = cartTotal * 0.18;

  return (
    <div className="cart-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="pdp-breadcrumbs animate-fade-in">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <span>Cart</span>
        </nav>

        <div className="cart-header">
          <div>
            <h1 className="section-title">Shopping Cart</h1>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              {cartCount} item{cartCount !== 1 ? 's' : ''} in your cart
            </p>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={clearCartItems}
            id="clear-cart"
          >
            <FiTrash2 /> Clear All
          </button>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item, i) => (
              <div
                key={item.id}
                className="cart-item card animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
                id={`cart-item-${item.id}`}
              >
                <Link to={`/products/${item.id}`} className="cart-item__image-wrap">
                  <img src={item.thumbnail} alt={item.title} className="cart-item__image" />
                </Link>
                <div className="cart-item__details">
                  <Link to={`/products/${item.id}`} className="cart-item__title">
                    {item.title}
                  </Link>
                  <span className="cart-item__price">{formatINR(item.price)}</span>
                </div>
                <div className="cart-item__actions">
                  <div className="cart-item__qty">
                    <button
                      className="btn-icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      id={`cart-qty-minus-${item.id}`}
                    >
                      <FiMinus />
                    </button>
                    <span className="cart-item__qty-value">{item.quantity}</span>
                    <button
                      className="btn-icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      id={`cart-qty-plus-${item.id}`}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <span className="cart-item__subtotal">
                    {formatINR(item.price * item.quantity)}
                  </span>
                  <button
                    className="btn-icon cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                    id={`cart-remove-${item.id}`}
                    aria-label="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary glass animate-fade-in-up" style={{ animationDelay: '0.1s' }} id="cart-summary">
            <h3 className="cart-summary__title">Order Summary</h3>

            <div className="cart-summary__rows">
              <div className="cart-summary__row">
                <span>Subtotal ({cartCount} items)</span>
                <span>{formatINR(cartTotal)}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span className="cart-summary__free">Free</span>
              </div>
              <div className="cart-summary__row">
                <span>GST (18%)</span>
                <span>{formatINR(gst)}</span>
              </div>
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__total">
              <span>Total</span>
              <span>{formatINR(cartTotal + gst)}</span>
            </div>

            <button 
              className="btn btn-primary cart-summary__checkout" 
              id="checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout <FiArrowRight />
            </button>

            <Link to="/products" className="cart-summary__continue">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
