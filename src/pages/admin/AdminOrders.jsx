import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import './AdminOrders.css';

const STATUS_OPTIONS = ['All', 'Pending', 'Processing', 'In Transit', 'Delivered', 'Cancelled'];

const initialOrders = [
  { id: 'ORD-1093', customer: 'Priya Sharma',    email: 'priya@email.com',   amount: 8499,  items: 2, date: '2026-04-12', status: 'Delivered'  },
  { id: 'ORD-1092', customer: 'Arjun Mehta',     email: 'arjun@email.com',   amount: 2199,  items: 1, date: '2026-04-11', status: 'In Transit'  },
  { id: 'ORD-1091', customer: 'Sneha Patel',     email: 'sneha@email.com',   amount: 15899, items: 4, date: '2026-04-10', status: 'Processing'  },
  { id: 'ORD-1090', customer: 'Rahul Verma',     email: 'rahul@email.com',   amount: 4299,  items: 1, date: '2026-04-09', status: 'Pending'     },
  { id: 'ORD-1089', customer: 'Kavita Nair',     email: 'kavita@email.com',  amount: 6750,  items: 3, date: '2026-04-08', status: 'Delivered'   },
  { id: 'ORD-1088', customer: 'Rohan Joshi',     email: 'rohan@email.com',   amount: 1199,  items: 1, date: '2026-04-07', status: 'Cancelled'   },
  { id: 'ORD-1087', customer: 'Anjali Rao',      email: 'anjali@email.com',  amount: 9850,  items: 2, date: '2026-04-07', status: 'Delivered'   },
  { id: 'ORD-1086', customer: 'Vikram Singh',    email: 'vikram@email.com',  amount: 3400,  items: 2, date: '2026-04-06', status: 'In Transit'  },
  { id: 'ORD-1085', customer: 'Deepa Menon',     email: 'deepa@email.com',   amount: 7600,  items: 3, date: '2026-04-05', status: 'Processing'  },
  { id: 'ORD-1084', customer: 'Saurav Gupta',    email: 'saurav@email.com',  amount: 5250,  items: 2, date: '2026-04-04', status: 'Delivered'   },
];

const STATUS_COLORS = {
  Delivered:   'status-delivered',
  'In Transit': 'status-transit',
  Processing:  'status-processing',
  Pending:     'status-pending',
  Cancelled:   'status-cancelled',
};

export default function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = filterStatus === 'All'
    ? orders
    : orders.filter(o => o.status === filterStatus);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="admin-orders">
      <div className="admin-page-header">
        <div>
          <h2 className="admin-page-title">Orders</h2>
          <p className="admin-page-subtitle">{orders.length} total orders</p>
        </div>
        <div className="ao-filter-bar glass">
          <FiFilter style={{ color: 'var(--text-muted)' }} />
          {STATUS_OPTIONS.map(s => (
            <button
              key={s}
              className={`ao-filter-btn ${filterStatus === s ? 'active' : ''}`}
              onClick={() => setFilterStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(order => (
              <tr key={order.id}>
                <td className="ao-order-id">{order.id}</td>
                <td>
                  <p className="ao-customer-name">{order.customer}</p>
                  <p className="ao-customer-email">{order.email}</p>
                </td>
                <td className="ao-items">{order.items} item{order.items !== 1 ? 's' : ''}</td>
                <td className="ao-amount">₹{order.amount.toLocaleString('en-IN')}</td>
                <td className="ao-date">{order.date}</td>
                <td>
                  <span className={`admin-status ${STATUS_COLORS[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <select
                    className="ao-status-select"
                    value={order.status}
                    onChange={e => handleStatusChange(order.id, e.target.value)}
                  >
                    {['Pending', 'Processing', 'In Transit', 'Delivered', 'Cancelled'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="empty-state" style={{ padding: '48px' }}>
            <div className="empty-state-icon">📋</div>
            <p className="empty-state-title">No orders found</p>
            <p className="empty-state-text">Try a different filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
