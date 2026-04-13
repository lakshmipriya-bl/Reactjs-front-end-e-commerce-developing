import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Toast({ toasts }) {
  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
          {toast.message}
        </div>
      ))}
    </div>
  );
}
