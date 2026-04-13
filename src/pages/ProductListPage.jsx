import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { fetchProducts, fetchCategories } from '../utils/api';
import { formatINR } from '../utils/currency';
import { FiSearch, FiSliders, FiX } from 'react-icons/fi';
import './ProductListPage.css';

// Groceries has 27 items — cap all categories to the same count for consistency
const PRODUCTS_PER_CATEGORY = 27;

export default function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [prodData, catData] = await Promise.all([
          fetchProducts(500),
          fetchCategories(),
        ]);
        setAllProducts(prodData.products);
        setCategories(catData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q)
      );
    }

    // Category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Rating
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'title-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    // Cap each category to PRODUCTS_PER_CATEGORY items for a consistent grid
    // (matches the groceries category count so all categories look uniform)
    if (selectedCategory && !searchQuery.trim()) {
      result = result.slice(0, PRODUCTS_PER_CATEGORY);
    }

    return result;
  }, [allProducts, searchQuery, selectedCategory, priceRange, minRating, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange([0, 10000]);
    setMinRating(0);
    setSortBy('default');
    setSearchParams({});
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || priceRange[0] !== 0 || priceRange[1] !== 10000 || minRating > 0 || sortBy !== 'default';

  if (error) {
    return (
      <div className="empty-state" style={{ marginTop: '120px' }}>
        <div className="empty-state-icon">⚠️</div>
        <h2 className="empty-state-title">Failed to load products</h2>
        <p className="empty-state-text">{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="product-list-page">
      <div className="container">
        {/* Page Header */}
        <div className="plp-header">
          <div>
            <h1 className="section-title">All Products</h1>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              {loading
                ? 'Loading...'
                : `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`}
            </p>
          </div>
        </div>

        {/* Search & Mobile Filter Toggle */}
        <div className="plp-toolbar">
          <div className="plp-search">
            <FiSearch className="plp-search__icon" />
            <input
              type="text"
              className="plp-search__input input-field"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="product-search"
            />
            {searchQuery && (
              <button
                className="plp-search__clear"
                onClick={() => setSearchQuery('')}
              >
                <FiX />
              </button>
            )}
          </div>
          <button
            className="btn btn-secondary plp-filter-toggle"
            onClick={() => setSidebarOpen(true)}
            id="filter-toggle"
          >
            <FiSliders /> Filters
          </button>
          {hasActiveFilters && (
            <button className="btn btn-danger btn-sm" onClick={clearFilters} id="clear-filters">
              <FiX /> Clear All
            </button>
          )}
        </div>

        {/* Active filter tags */}
        {hasActiveFilters && (
          <div className="plp-active-filters">
            {selectedCategory && (
              <span className="plp-filter-tag">
                {selectedCategory.replace(/-/g, ' ')}
                <button onClick={() => handleCategoryChange('')}><FiX /></button>
              </span>
            )}
            {priceRange[0] !== 0 || priceRange[1] !== 10000 ? (
              <span className="plp-filter-tag">
                {formatINR(priceRange[0])} – {priceRange[1] === 10000 ? '₹50,000+' : formatINR(priceRange[1])}
                <button onClick={() => setPriceRange([0, 10000])}><FiX /></button>
              </span>
            ) : null}
            {minRating > 0 && (
              <span className="plp-filter-tag">
                ★ {minRating}+
                <button onClick={() => setMinRating(0)}><FiX /></button>
              </span>
            )}
            {sortBy !== 'default' && (
              <span className="plp-filter-tag">
                Sorted: {sortBy.replace(/-/g, ' ')}
                <button onClick={() => setSortBy('default')}><FiX /></button>
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="plp-content">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            minRating={minRating}
            onRatingChange={setMinRating}
            sortBy={sortBy}
            onSortChange={setSortBy}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <div className="plp-grid-area">
            {loading ? (
              <div className="products-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="card skeleton" style={{ height: 340 }} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🔍</div>
                <h2 className="empty-state-title">No products found</h2>
                <p className="empty-state-text">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
