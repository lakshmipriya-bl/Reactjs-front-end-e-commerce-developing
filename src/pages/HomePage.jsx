import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts, fetchCategories } from '../utils/api';
import {
  FiArrowRight,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiChevronRight,
} from 'react-icons/fi';
import './HomePage.css';

const HERO_BANNERS = [
  {
    id: 1,
    badge: '✨ New Collection 2026',
    title: <>Discover <span className="hero__title-accent">Premium</span> Products</>,
    subtitle: 'Explore our curated selection of premium products. From tech to fashion, find everything you need in one place.',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200'
  },
  {
    id: 2,
    badge: '🧴 Luxury Restored',
    title: <>Exclusive <span className="hero__title-accent">Beauty</span> & Care</>,
    subtitle: 'Elevate your daily routine with our newly restocked, premium branded beauty and fragrance collections.',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200'
  },
  {
    id: 3,
    badge: '💻 Cutting-Edge Tech',
    title: <>Next-Gen <span className="hero__title-accent">Gadgets</span></>,
    subtitle: 'Stay ahead of the curve. Discover the latest laptops, smartphones, and accessories curated for modern professionals.',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200'
  }
];


export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [prodData, catData] = await Promise.all([
          fetchProducts(12),
          fetchCategories(),
        ]);
        setProducts(prodData.products);
        setCategories(catData.slice(0, 8));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const CATEGORY_ICON_MAP = {
    'beauty': '🧴',
    'fragrances': '✨',
    'furniture': '🛋️',
    'groceries': '🍎',
    'home-decoration': '🖼️',
    'kitchen-accessories': '🍳',
    'laptops': '💻',
    'mens-shirts': '👔',
    'mens-shoes': '👟',
    'mens-watches': '⌚',
    'mobile-accessories': '🎧',
    'skin-care': '🧼',
    'smartphones': '📱',
    'sports-accessories': '⚽',
    'sunglasses': '🕶️',
    'tablets': '📟',
    'tops': '🧥',
    'womens-bags': '👜',
    'womens-dresses': '👗',
    'womens-jewellery': '💍',
    'womens-shoes': '👡',
    'womens-watches': '⌚'
  };

  if (error) {
    return (
      <div className="empty-state" style={{ marginTop: '120px' }}>
        <div className="empty-state-icon">⚠️</div>
        <h2 className="empty-state-title">Something went wrong</h2>
        <p className="empty-state-text">{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Carousel Banner */}
      <section className="hero hero--carousel" id="hero-section">
        <div className="hero__bg">
          <div className="hero__gradient-orb hero__gradient-orb--1" />
          <div className="hero__gradient-orb hero__gradient-orb--2" />
          <div className="hero__gradient-orb hero__gradient-orb--3" />
        </div>
        
        {HERO_BANNERS.map((banner, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={banner.id} 
              className={`hero__slide ${isActive ? 'hero__slide--active' : ''}`}
            >
              <div className="hero__content container">
                <div className="hero__text">
                  {/* We conditionally render classes so keyframes reset on slide change */}
                  {isActive && (
                    <>
                      <span className="hero__badge animate-fade-in">
                        {banner.badge}
                      </span>
                      <h1 className="hero__title animate-fade-in-up">
                        {banner.title}
                      </h1>
                      <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {banner.subtitle}
                      </p>
                      <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Link to="/products" className="btn btn-primary btn-lg">
                          Shop Now <FiArrowRight />
                        </Link>
                        <Link to="/products" className="btn btn-secondary btn-lg">
                          Explore Categories
                        </Link>
                      </div>
                      {banner.type === 'cards' && (
                        <div className="hero__stats animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                          <div className="hero__stat">
                            <span className="hero__stat-value">200+</span>
                            <span className="hero__stat-label">Products</span>
                          </div>
                          <div className="hero__stat-divider" />
                          <div className="hero__stat">
                            <span className="hero__stat-value">50+</span>
                            <span className="hero__stat-label">Brands</span>
                          </div>
                          <div className="hero__stat-divider" />
                          <div className="hero__stat">
                            <span className="hero__stat-value">24/7</span>
                            <span className="hero__stat-label">Support</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className={`hero__visual ${isActive ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                  {isActive && (
                    <>
                      {banner.type === 'cards' ? (
                        <div className="hero__card-stack">
                          {products.slice(0, 3).map((p, i) => (
                            <div
                              key={p.id}
                              className="hero__floating-card"
                              style={{
                                animationDelay: `${i * 0.3}s`,
                                '--rotation': `${(i - 1) * 8}deg`,
                                '--offset': `${(i - 1) * 30}px`,
                              }}
                            >
                              <img src={p.thumbnail} alt={p.title} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="hero__image-showcase">
                          <img src={banner.image} alt={banner.badge} className="hero__showcase-img" />
                          <div className="hero__image-glow" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="hero__carousel-controls">
          {HERO_BANNERS.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Strip */}
      <section className="features-strip" id="features-section">
        <div className="container">
          <div className="features-strip__grid">
            {[
              { icon: <FiTruck />, title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: <FiShield />, title: 'Secure Payment', desc: '100% protected' },
              { icon: <FiRefreshCw />, title: 'Easy Returns', desc: '30-day return policy' },
              { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Dedicated support' },
            ].map((feat, i) => (
              <div
                key={i}
                className="features-strip__item animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="features-strip__icon">{feat.icon}</div>
                <div>
                  <h4 className="features-strip__title">{feat.title}</h4>
                  <p className="features-strip__desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section" id="categories-section">
        <div className="container">
          <div className="home-section__header">
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-subtitle">Browse our wide range of categories</p>
            </div>
            <Link to="/products" className="btn btn-secondary btn-sm">
              View All <FiChevronRight />
            </Link>
          </div>
          {loading ? (
            <div className="categories-grid">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="category-card skeleton" style={{ height: 120 }} />
              ))}
            </div>
          ) : (
            <div className="categories-grid">
              {categories.map((cat, i) => (
                <Link
                  key={cat}
                  to={`/products?category=${cat}`}
                  className="category-card animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  id={`home-cat-${cat}`}
                >
                  <span className="category-card__icon">
                    {CATEGORY_ICON_MAP[cat] || '🏷️'}
                  </span>
                  <span className="category-card__name">{cat.replace(/-/g, ' ')}</span>
                  <FiChevronRight className="category-card__arrow" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="home-section" id="featured-section">
        <div className="container">
          <div className="home-section__header">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Handpicked selections for you</p>
            </div>
            <Link to="/products" className="btn btn-secondary btn-sm">
              See All <FiChevronRight />
            </Link>
          </div>
          {loading ? (
            <div className="products-grid">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card skeleton" style={{ height: 340 }} />
              ))}
            </div>
          ) : (
            <div className="products-grid">
              {products.slice(0, 8).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="cta-section">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__bg-effect" />
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Ready to Explore?</h2>
              <p className="cta-banner__text">
                Discover hundreds of premium products at unbeatable prices.
                Start your shopping journey today.
              </p>
              <Link to="/products" className="btn btn-primary btn-lg" id="cta-shop-now">
                Shop All Products <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
