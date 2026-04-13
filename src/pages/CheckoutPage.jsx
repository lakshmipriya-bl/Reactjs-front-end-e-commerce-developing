import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/currency';
import { 
  FiChevronRight, 
  FiMapPin, 
  FiCreditCard, 
  FiCheckCircle, 
  FiArrowLeft,
  FiTruck
} from 'react-icons/fi';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount, clearCartItems } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const gst = cartTotal * 0.18;
  const totalAmount = cartTotal + gst;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNum: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(res => setTimeout(res, 2000));
    setIsProcessing(false);
    setStep(3);
    clearCartItems();
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-state" style={{ marginTop: '40px' }}>
            <div className="empty-state-icon">🛒</div>
            <h2 className="empty-state-title">Cart is empty</h2>
            <Link to="/products" className="btn btn-primary">Browse Products</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="pdp-breadcrumbs animate-fade-in">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <Link to="/cart">Cart</Link>
          <FiChevronRight />
          <span>Checkout</span>
        </nav>

        <div className="checkout-header">
            <h1 className="section-title">Checkout</h1>
            <div className="checkout-steps">
                <div className={`checkout-step ${step >= 1 ? 'checkout-step--active' : ''}`}>
                    <span className="checkout-step__num">1</span>
                    <span className="checkout-step__label">Shipping</span>
                </div>
                <div className={`checkout-step-line ${step >= 2 ? 'checkout-step-line--active' : ''}`} />
                <div className={`checkout-step ${step >= 2 ? 'checkout-step--active' : ''}`}>
                    <span className="checkout-step__num">2</span>
                    <span className="checkout-step__label">Payment</span>
                </div>
                <div className={`checkout-step-line ${step >= 3 ? 'checkout-step-line--active' : ''}`} />
                <div className={`checkout-step ${step >= 3 ? 'checkout-step--active' : ''}`}>
                    <span className="checkout-step__num">3</span>
                    <span className="checkout-step__label">Success</span>
                </div>
            </div>
        </div>

        <div className="checkout-layout">
          {step < 3 ? (
            <>
              <div className="checkout-form-container">
                {step === 1 && (
                  <form onSubmit={nextStep} className="checkout-form card glass animate-fade-in-up">
                    <h3 className="checkout-form__title"><FiMapPin /> Shipping Information</h3>
                    <div className="checkout-form__grid">
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required className="input-field" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                        </div>
                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" required className="input-field" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                        </div>
                        <div className="input-group full">
                            <label>Address</label>
                            <input type="text" name="address" required className="input-field" value={formData.address} onChange={handleInputChange} placeholder="123 Luxury Lane" />
                        </div>
                        <div className="input-group">
                            <label>City</label>
                            <input type="text" name="city" required className="input-field" value={formData.city} onChange={handleInputChange} placeholder="Mumbai" />
                        </div>
                        <div className="input-group">
                            <label>ZIP Code</label>
                            <input type="text" name="zip" required className="input-field" value={formData.zip} onChange={handleInputChange} placeholder="400001" />
                        </div>
                    </div>
                    <div className="checkout-form__actions">
                        <Link to="/cart" className="btn btn-secondary"><FiArrowLeft /> Back to Cart</Link>
                        <button type="submit" className="btn btn-primary">Continue to Payment <FiChevronRight /></button>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handlePlaceOrder} className="checkout-form card glass animate-fade-in-up">
                    <h3 className="checkout-form__title"><FiCreditCard /> Payment Details</h3>
                    <div className="checkout-form__grid">
                        <div className="input-group full">
                            <label>Card Number</label>
                            <input type="text" name="cardNum" required className="input-field" value={formData.cardNum} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="input-group">
                            <label>Expiry Date</label>
                            <input type="text" name="expiry" required className="input-field" value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" />
                        </div>
                        <div className="input-group">
                            <label>CVV</label>
                            <input type="password" name="cvv" required className="input-field" value={formData.cvv} onChange={handleInputChange} placeholder="***" />
                        </div>
                    </div>
                    <div className="checkout-form__actions">
                        <button type="button" onClick={prevStep} className="btn btn-secondary"><FiArrowLeft /> Back to Shipping</button>
                        <button type="submit" className="btn btn-primary" disabled={isProcessing}>
                            {isProcessing ? 'Processing...' : `Pay ${formatINR(totalAmount)}`}
                        </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="checkout-summary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="card glass">
                  <h3 className="checkout-summary__title">Order Summary</h3>
                  <div className="checkout-summary__items">
                    {cart.map(item => (
                      <div key={item.id} className="checkout-summary__item">
                        <div className="checkout-summary__item-info">
                            <span className="checkout-summary__item-name">{item.title}</span>
                            <span className="checkout-summary__item-qty">Qty: {item.quantity}</span>
                        </div>
                        <span className="checkout-summary__item-price">{formatINR(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cart-summary__divider" />
                  <div className="cart-summary__rows">
                    <div className="cart-summary__row"><span>Subtotal</span><span>{formatINR(cartTotal)}</span></div>
                    <div className="cart-summary__row"><span>GST (18%)</span><span>{formatINR(gst)}</span></div>
                    <div className="cart-summary__row"><span>Shipping</span><span className="cart-summary__free">Free</span></div>
                  </div>
                  <div className="cart-summary__divider" />
                  <div className="cart-summary__total">
                    <span>Total</span>
                    <span>{formatINR(totalAmount)}</span>
                  </div>
                </div>
                <div className="checkout-trust card glass">
                    <div className="pdp-trust__item"><FiCheckCircle /> Secure Checkout</div>
                    <div className="pdp-trust__item"><FiTruck /> Fast Delivery</div>
                </div>
              </div>
            </>
          ) : (
            <div className="checkout-success animate-fade-in-up">
              <div className="checkout-success__icon"><FiCheckCircle /></div>
              <h2 className="section-title">Order Placed Successfully!</h2>
              <p className="section-subtitle">Thank you for your purchase. Your order #LUXE-{Math.floor(Math.random() * 90000) + 10000} has been confirmed.</p>
              <p className="checkout-success__note">A confirmation email has been sent to {formData.email}.</p>
              <div className="checkout-success__actions">
                <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
                <Link to="/" className="btn btn-secondary">Go to Homepage</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
