# Ashisa Murakami — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS で作られたポートフォリオサイト。

---

## クイックスタート

```bash
# 1. 依存関係インストール
npm install

# 2. 開発サーバー起動
npm run dev
```

→ ブラウザで [http://localhost:3000](http://localhost:3000) を開く

```bash
# 本番ビルド
npm run build
npm run start
```

---

## ディレクトリ構成

```
ポートフォリオサイト/
├── app/                    # ページ
│   ├── layout.tsx          # 共通レイアウト（Header / Footer / Ash）
│   ├── page.tsx            # Home
│   ├── timeline/page.tsx   # Timeline
│   ├── works/page.tsx      # Works
│   └── globals.css
├── components/             # UI コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Ash.tsx             # マスコットアニメーション
│   ├── AshSvg.tsx          # Ashのドット絵SVG
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   ├── LifeTimeline.tsx    # 生い立ちタイムライン（画像+スクロール演出）
│   └── WorksSection.tsx    # Worksカード+モーダル
├── data/                   # ★ コンテンツ更新はここを編集
│   ├── types.ts            # 型定義
│   ├── profile.ts          # 名前・キャッチコピー・自己紹介・趣味
│   ├── awards.ts           # 受賞歴・採択歴
│   ├── skills.ts           # スキル
│   ├── timeline.ts         # 生い立ちタイムライン
│   ├── projects.ts         # 作品（カード詳細含む）
│   ├── research.ts         # 研究
│   ├── internships.ts      # インターン
│   └── links.ts            # 外部リンク
├── public/
│   └── timeline/           # ライフタイムライン用の画像を置く
├── _mockup_backup/         # 旧 HTML モックアップ（参照用）
└── ... 設定ファイル各種
```

---



## デザインシステム

カラー・フォントは `tailwind.config.ts` で定義しています。

| トークン | 値 | 用途 |
|---|---|---|
| `bg` | `#0A0E1A` | 背景（深い青黒） |
| `bg-soft` | `#11172A` | カード・要素背景 |
| `fg` | `#E8E8F0` | 本文 |
| `fg-dim` | `#8a8da0` | 控えめテキスト |
| `accent` | `#E03E3E` | アクセント（赤） |
| `border` | `#1a2238` | ボーダー |

| クラス | フォント |
|---|---|
| `font-display` | Archivo Black（ヒーロー・タイトル） |
| `font-sans` | Inter / Noto Sans JP（本文） |
| `font-mono` | Inter monospace（日付・タグ） |

---

## Ash（マスコット）について

- 通常はマウスについてくる
- 矢印キー (`↑↓←→`) を押すと操作モードに切り替わる
- `Esc` で元のフォローモードに戻る
- モバイルでは非表示

`components/Ash.tsx` と `components/AshSvg.tsx` を編集すれば、見た目や動きを変えられます。
本物のドット絵画像（PNG）に差し替える場合は、`AshSvg.tsx` を `<Image src="/ash.png" ... />` に置き換え、画像を `public/ash.png` に置いてください。

---

## デプロイ（Vercel）

1. GitHubにこのリポジトリをpush
2. [vercel.com](https://vercel.com) で「Import Git Repository」
3. Next.jsとして自動認識されるので、そのままDeploy

カスタムドメイン設定もVercelダッシュボードから可能です。
