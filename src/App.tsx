import { useState } from 'react';
import './App.css';
import TopPage from './TopPage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 仮のログイン認証（demo用）
  const DEMO_EMAIL = 'demo@example.com';
  const DEMO_PASSWORD = 'password123';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setIsLoggedIn(true);
      console.log('Login successful:', { email, password });
    } else {
      alert(
        'ログインに失敗しました。正しいメールアドレスとパスワードを入力してください。\n\nDemo用認証情報:\nEmail: demo@example.com\nPassword: password123'
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <TopPage onLogout={handleLogout} />;
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-section">
          <div className="logo-circle">
            <span className="logo-text">APP</span>
          </div>
        </div>

        <h1>ログイン</h1>
        <p className="login-subtitle">アカウントにサインインしてください</p>

        <div className="demo-info">
          <small>
            Demo用認証情報:
            <br />
            Email: demo@example.com
            <br />
            Password: password123
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="パスワードを入力"
              required
            />
          </div>
        </div>

        <button type="submit" className="login-button">
          <span>ログイン</span>
          <div className="button-background"></div>
        </button>

        <div className="additional-options">
          <a href="#" className="forgot-password">
            パスワードを忘れましたか？
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
