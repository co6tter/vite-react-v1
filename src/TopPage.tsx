import { useState } from 'react';
import './TopPage.css';

interface TopPageProps {
  onLogout: () => void;
}

function TopPage({ onLogout }: TopPageProps) {
  const [user] = useState({ email: 'user@example.com' });

  return (
    <div className="top-container">
      <header className="top-header">
        <h1>ダッシュボード</h1>
        <div className="user-info">
          <span>Welcome, {user.email}</span>
          <button onClick={onLogout} className="logout-btn">
            ログアウト
          </button>
        </div>
      </header>

      <main className="top-main">
        <div className="welcome-section">
          <h2>こんにちは！</h2>
          <p>アプリケーションにログインしました。</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>統計</h3>
            <p>システム統計を確認できます</p>
            <div className="card-stats">
              <div className="stat">
                <span className="stat-number">1,234</span>
                <span className="stat-label">総ユーザー数</span>
              </div>
              <div className="stat">
                <span className="stat-number">567</span>
                <span className="stat-label">アクティブ</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>最近の活動</h3>
            <p>最新の活動をチェック</p>
            <ul className="activity-list">
              <li>新しいユーザーが登録しました</li>
              <li>システムアップデートが完了</li>
              <li>データベースのバックアップ実行</li>
            </ul>
          </div>

          <div className="card">
            <h3>設定</h3>
            <p>アプリケーション設定</p>
            <div className="settings-options">
              <button className="setting-btn">プロフィール編集</button>
              <button className="setting-btn">通知設定</button>
              <button className="setting-btn">セキュリティ</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TopPage;
