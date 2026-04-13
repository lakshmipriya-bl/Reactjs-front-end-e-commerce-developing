import { FiSliders, FiX, FiStar, FiChevronDown, FiFilter } from 'react-icons/fi';
import { formatINR, USD_TO_INR } from '../utils/currency';
import './Sidebar.css';

const SIDEBAR_ICON_MAP = {
  'beauty': '🧴',
  'fragrances': '✨',
  'furniture': '🛋️',
  'home-decoration': '🏠',
  'laptops': '💻',
  'mens-shirts': '👔',
  'mens-shoes': '👟',
  'mens-watches': '⌚',
  'skin-care': '🧼',
  'sunglasses': '🕶️',
  'tablets': '📱',
  'tops': '👚',
  'womens-bags': '👜',
  'womens-dresses': '👗',
  'womens-jewellery': '💍',
  'womens-shoes': '👠',
  'womens-watches': '⌚',
  'groceries': '🛒',
  'kitchen-accessories': '🍳',
  'sports-accessories': '⚽',
};

export default function Sidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onRatingChange,
  sortBy,
  onSortChange,
  isOpen,
  onClose,
}) {
  const priceOptions = [
    { label: 'All Prices', value: [0, 10000] },
    { label: 'Under ₹5,000',  value: [0,    Math.round(5000  / USD_TO_INR)] },
    { label: '₹5,000 – ₹10,000', value: [Math.round(5000 / USD_TO_INR), Math.round(10000 / USD_TO_INR)] },
    { label: '₹10,000 – ₹50,000', value: [Math.round(10000 / USD_TO_INR), Math.round(50000 / USD_TO_INR)] },
    { label: '₹50,000+', value: [Math.round(50000 / USD_TO_INR), 10000] },
  ];

  const ratingOptions = [0, 4, 3, 2, 1];

  return (
    <>
      <aside className={`sidebar glass ${isOpen ? 'sidebar--open' : ''}`} id="product-sidebar">
        <div className="sidebar__header">
          <div className="sidebar__title-group">
            <FiFilter className="sidebar__icon-main" />
            <h3 className="sidebar__title">Shop Filters</h3>
          </div>
          <button className="sidebar__close" onClick={onClose} id="sidebar-close">
            <FiX />
          </button>
        </div>

        {/* Sort */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Visual Sort</h4>
          <div className="sidebar__select-wrap">
            <select
              className="sidebar__select input-field"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              id="sort-select"
            >
              <option value="default">Default Ranking</option>
              <option value="price-asc">Price: Lowest First</option>
              <option value="price-desc">Price: Highest First</option>
              <option value="rating-desc">Top Rated Only</option>
              <option value="title-asc">Alphabetical (A-Z)</option>
            </select>
            <FiChevronDown className="sidebar__select-icon" />
          </div>
        </div>

        {/* Categories */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Product Categories</h4>
          <div className="sidebar__category-list">
            <button
              className={`sidebar__category-btn ${selectedCategory === '' ? 'sidebar__category-btn--active' : ''}`}
              onClick={() => onCategoryChange('')}
              id="category-all"
            >
              <span className="sidebar__cat-icon">🏪</span>
              <span className="sidebar__cat-names">All Collections</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`sidebar__category-btn ${selectedCategory === cat ? 'sidebar__category-btn--active' : ''}`}
                onClick={() => onCategoryChange(cat)}
                id={`category-${cat}`}
              >
                <span className="sidebar__cat-icon">
                  {SIDEBAR_ICON_MAP[cat.toLowerCase()] || '📦'}
                </span>
                <span className="sidebar__cat-names">{cat.replace(/-/g, ' ')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Price Range</h4>
          <div className="sidebar__price-list">
            {priceOptions.map((opt, i) => (
              <label key={i} className="sidebar__radio-label">
                <input
                  type="radio"
                  name="price"
                  className="sidebar__radio"
                  checked={priceRange[0] === opt.value[0] && priceRange[1] === opt.value[1]}
                  onChange={() => onPriceRangeChange(opt.value)}
                />
                <span className="sidebar__radio-custom" />
                <span className="sidebar__radio-text">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Minimum Rating</h4>
          <div className="sidebar__rating-list">
            {ratingOptions.map(rating => (
              <button
                key={rating}
                className={`sidebar__rating-btn ${minRating === rating ? 'sidebar__rating-btn--active' : ''}`}
                onClick={() => onRatingChange(rating)}
                id={`rating-${rating}`}
              >
                {rating === 0 ? (
                  <span className="sidebar__rating-label">Any Rating</span>
                ) : (
                  <>
                    <div className="sidebar__stars">
                      {Array.from({ length: rating }).map((_, i) => (
                        <FiStar key={i} className="sidebar__rating-star" />
                      ))}
                    </div>
                    <span className="sidebar__rating-label">& Up</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </aside>
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}
    </>
  );
}
