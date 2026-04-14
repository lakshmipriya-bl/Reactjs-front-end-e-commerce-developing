import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/api';
import { FiSearch, FiEdit2, FiTrash2, FiPlus, FiStar } from 'react-icons/fi';
import './AdminProducts.css';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProducts(100, 0).then(data => {
      setProducts(data.products);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="admin-products">
      <div className="admin-page-header">
        <div>
          <h2 className="admin-page-title">Products</h2>
          <p className="admin-page-subtitle">{products.length} total products in catalog</p>
        </div>
        <button className="btn btn-primary" id="admin-add-product">
          <FiPlus /> Add Product
        </button>
      </div>

      <div className="admin-products-toolbar glass">
        <div className="admin-search-wrap">
          <FiSearch className="admin-search-icon" />
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by name or category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            id="admin-product-search"
          />
        </div>
        <span className="admin-result-count">{filtered.length} results</span>
      </div>

      {loading ? (
        <div className="admin-table-container">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton" style={{ height: 60, margin: '12px 24px', borderRadius: 8 }} />
          ))}
        </div>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="ap-product-cell">
                      <img src={p.thumbnail} alt={p.title} className="ap-product-img" />
                      <div>
                        <p className="ap-product-name">{p.title}</p>
                        <p className="ap-product-brand">{p.brand || '—'}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="ap-category-badge">{p.category.replace(/-/g, ' ')}</span>
                  </td>
                  <td className="ap-price">₹{p.price.toLocaleString('en-IN')}</td>
                  <td>
                    <span className={`ap-stock ${p.stock > 20 ? 'in-stock' : p.stock > 0 ? 'low-stock' : 'out-stock'}`}>
                      {p.stock > 0 ? p.stock : 'Out'}
                    </span>
                  </td>
                  <td>
                    <div className="ap-rating">
                      <FiStar style={{ color: '#fdcb6e', fontSize: '0.85rem' }} />
                      <span>{p.rating?.toFixed(1)}</span>
                    </div>
                  </td>
                  <td>
                    <div className="ap-actions">
                      <button className="ap-btn-edit" title="Edit">
                        <FiEdit2 />
                      </button>
                      {deleteId === p.id ? (
                        <>
                          <button className="ap-btn-confirm" onClick={() => handleDelete(p.id)}>Yes</button>
                          <button className="ap-btn-cancel" onClick={() => setDeleteId(null)}>No</button>
                        </>
                      ) : (
                        <button className="ap-btn-delete" title="Delete" onClick={() => setDeleteId(p.id)}>
                          <FiTrash2 />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="empty-state" style={{ padding: '48px' }}>
              <div className="empty-state-icon">📦</div>
              <p className="empty-state-title">No products found</p>
              <p className="empty-state-text">Try a different search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
