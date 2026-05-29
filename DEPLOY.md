# Vercel デプロイ手順

GitHub → Vercel の連携で公開します。一度設定すれば、以降は `git push` するだけで自動デプロイされます。

---

## ステップ 1：ローカルで git 初期化 & コミット

ターミナルで以下を実行：

```bash
cd ~/Documents/Claude/Projects/ポートフォリオサイト

# Git ユーザー設定（初めて git を使う場合のみ）
git config --global user.name "Ashisu Murakami"
git config --global user.email "あなたのメールアドレス"

# 初期化 & 最初のコミット
git init -b main
git add .
git commit -m "Initial commit: portfolio site"
```

---

## ステップ 2：GitHub でリポジトリ作成

ブラウザで [https://github.com/new](https://github.com/new) を開いて：

| 項目 | 設定 |
|---|---|
| Repository name | `portfolio`（お好みで） |
| Description | （任意） |
| Public / Private | **Public** |
| Add a README file | OFF |
| Add .gitignore | OFF |
| Choose a license | OFF |

→ **Create repository** クリック

---

## ステップ 3：ローカルとGitHubを接続して push

GitHub のリポジトリ作成後に表示されるコマンドをそのまま使えますが、参考までに：

```bash
git remote add origin https://github.com/ashulaboratory/portfolio.git
git push -u origin main
```

初回 push 時に GitHub の認証を求められます：
- GitHub CLI (`gh`) がインストール済みなら自動でブラウザログイン
- なければ Personal Access Token を作成して入力（[作成ページ](https://github.com/settings/tokens/new)）
- もしくは SSH 鍵を使う設定（中級者向け）

最も簡単：[GitHub Desktop](https://desktop.github.com/) をインストールして GUI で push する手もアリ。

---

## ステップ 4：Vercel でインポート

1. [https://vercel.com](https://vercel.com) を開く
2. **Sign Up** → GitHub アカウントで連携サインアップ
3. ダッシュボードで **Add New...** → **Project**
4. 先ほど作った `ashulaboratory/portfolio` を選んで **Import**
5. **Framework Preset**：`Next.js`（自動検出されてるはず）
6. その他の設定はデフォルトのまま
7. **Deploy** ボタンをクリック

→ 30秒〜1分で公開完了。`https://portfolio-xxxx.vercel.app` のような URL が発行されます。

---

## ステップ 5（任意）：カスタムドメイン

独自ドメインを持ってる場合、Vercel ダッシュボード → プロジェクト → **Settings** → **Domains** からドメインを追加できます。

ドメインを持ってない場合は、Vercel が発行する `*.vercel.app` の URL がそのまま使えます。プロジェクト名を変えれば URL も変わります（Settings → General → Project Name）。

---

## 今後の更新フロー

コンテンツ（`data/*.ts`）や画像（`public/`）を編集したら：

```bash
git add .
git commit -m "update: ◯◯を修正"
git push
```

→ Vercel が自動でビルドして本番に反映（1〜2分）。プレビュー URL も自動発行されるので、本番に出る前に確認できます。

---

## 困ったとき

- ビルドが落ちる：Vercel のダッシュボード → プロジェクト → Deployments → 該当のビルドログを確認
- ローカルでビルドが通るか事前チェック：`npm run build`
- 環境変数が必要な場合：Vercel → Settings → Environment Variables で追加
