import { useState, useEffect } from "react";
import "./App.css";
import TopPage from "./TopPage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // バリデーション - 値があればOK
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      setIsLoggedIn(true);
      // URLを変更
      const newPath = "/dashboard";
      setCurrentPath(newPath);
      window.history.pushState({}, "", newPath);
    } else {
      alert("メールアドレスとパスワードを入力してください。");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    // URLをルートに戻す
    const newPath = "/";
    setCurrentPath(newPath);
    window.history.pushState({}, "", newPath);
  };

  // ブラウザの戻る/進むボタンに対応
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      if (path === "/") {
        setIsLoggedIn(false);
      } else if (path === "/dashboard" && (email.trim() || isLoggedIn)) {
        setIsLoggedIn(true);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [email, isLoggedIn]);

  // ページリロード時の処理
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/dashboard") {
      // ダッシュボードページでリロードされた場合、ログイン状態を維持
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn || currentPath === "/dashboard") {
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

        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
