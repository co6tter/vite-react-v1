# vite-react-v1

## Overview

Vite + React + TypeScript をベースにしたモダンなWebアプリケーション開発環境です。高速な開発体験を提供するViteと、最新のReact 19を組み合わせたプロジェクトテンプレートとなっています。

## Tech Stack

- **Build Tool**: Vite 7.1.2
- **Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Linter**: ESLint 9.33.0
- **Styling**: CSS

## Setup

プロジェクトをセットアップするには、以下のコマンドを実行してください：

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## Usage

### 開発モード

開発サーバーを起動します：

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリケーションが表示されます。

### ビルド

プロダクション用のビルドを生成します：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

ビルドしたアプリケーションをプレビューします：

```bash
npm run preview
```

### リント

コードの品質チェックを実行します：

```bash
npm run lint
```

## Directory Structure

```
.
├── public/          # 静的ファイル
├── src/
│   ├── assets/      # 画像などのアセット
│   ├── App.tsx      # メインアプリケーションコンポーネント
│   ├── TopPage.tsx  # トップページコンポーネント
│   ├── main.tsx     # エントリーポイント
│   └── index.css    # グローバルスタイル
├── dist/            # ビルド出力先（自動生成）
├── package.json     # プロジェクト設定
├── tsconfig.json    # TypeScript設定
├── vite.config.ts   # Vite設定
└── eslint.config.js # ESLint設定
```

## License

This repository is for personal/private use only.
