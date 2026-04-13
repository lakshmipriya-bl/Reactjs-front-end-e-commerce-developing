import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';
import './LoginPage.css';

export default function LoginPage() {
  const { login, isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const err = {};
    if (!email.trim()) err.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) err.email = 'Enter a valid email';
    if (!password.trim()) err.password = 'Password is required';
    else if (password.length < 4) err.password = 'Password must be at least 4 characters';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate login delay
    await new Promise(res => setTimeout(res, 1000));
    login(email);
    setIsLoading(false);
    navigate('/');
  };

  if (isLoggedIn) {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-card glass animate-fade-in-up" id="login-card">
            <div className="login-card__avatar-large">
              {user.avatar}
            </div>
            <h2 className="login-card__title">Welcome back!</h2>
            <p className="login-card__subtitle">{user.email}</p>
            <button className="btn btn-danger" onClick={logout} id="logout-btn" style={{ marginTop: 24 }}>
              <FiLogIn /> Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-bg__orb login-bg__orb--1" />
        <div className="login-bg__orb login-bg__orb--2" />
      </div>
      <div className="container">
        <div className="login-card glass animate-fade-in-up" id="login-card">
          <div className="login-card__header">
            <div className="login-card__logo">
              <span>◆</span>
            </div>
            <h2 className="login-card__title">Welcome Back</h2>
            <p className="login-card__subtitle">Sign in to your LUXE STORE account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} id="login-form">
            <div className="login-form__group">
              <label className="login-form__label" htmlFor="email">Email</label>
              <div className={`login-form__input-wrap ${errors.email ? 'login-form__input-wrap--error' : ''}`}>
                <FiMail className="login-form__icon" />
                <input
                  type="email"
                  id="email"
                  className="login-form__input input-field"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="login-form__error">{errors.email}</span>}
            </div>

            <div className="login-form__group">
              <label className="login-form__label" htmlFor="password">Password</label>
              <div className={`login-form__input-wrap ${errors.password ? 'login-form__input-wrap--error' : ''}`}>
                <FiLock className="login-form__icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                   className="login-form__input input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-form__toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && <span className="login-form__error">{errors.password}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary login-form__submit"
              disabled={isLoading}
              id="login-submit"
            >
              {isLoading ? (
                <>
                  <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                  Signing in...
                </>
              ) : (
                <>
                  <FiLogIn /> Sign In
                </>
              )}
            </button>
          </form>

          <p className="login-card__note">
            This is a demo login. No real authentication is performed.
          </p>
        </div>
      </div>
    </div>
  );
}
