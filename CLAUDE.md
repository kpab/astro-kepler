# astro-kepler

Astro 7 対応の OSS テーマ「Kepler」。ブログ・ポートフォリオ・LP の3プリセットを
1つのデザインシステム（navy × orange のポップ調）でカバーする汎用スターター。

要件・計画の詳細は docs/REQUIREMENTS.md を参照。

## 技術スタック

- Astro 7（7.0.x）+ TypeScript
- Tailwind CSS v4
- Content Collections + MDX（Astro 7 の既定は Sätteri。remark/rehype を使うなら `@astrojs/markdown-remark` が必要）
- インタラクションは vanilla JS の `<script>` のみ（フレームワーク島は使わない）

## デザイン

- 原本は `docs/design/`（`design-spec.md` と `kepler-landing.html`）。**実装はこれに忠実に**
- 色は navy（`#1e3a8a` 系）と orange（`#f97316` 系）の2色相＋暖色ニュートラルのみ。第3の色相を足さない
- 見出し Space Grotesk / 本文 Manrope
- ハンドオフ内の「Orbit」表記は「Kepler」に読み替える（軌道マークのロゴは流用）

## ディレクトリ構成

- `src/pages/` — ルーティング（トップ＝LP）
- `src/styles/global.css` — Tailwind の取り込みとデザイントークン
- `docs/design/` — デザインハンドオフ原本（変更しない）
- `docs/REQUIREMENTS.md` — 要件・マイルストーン（M1 のチェックボックスをここで管理）
- `public/` — 静的アセット

## コマンド

- `pnpm dev` — 開発サーバー起動
- `pnpm build` — 本番ビルド（`dist/` 出力）
- `pnpm preview` — ビルド結果のプレビュー
- デプロイは `/deploy` スキル、デザイン照合は `/design-check` スキルを使う

## 規約・注意点

- テンプレートリポジトリとして配布するため、テーマ利用者が最初に触るファイル
  （サイト設定・コンテンツ）とテーマ内部を明確に分離する
- デモ用コンテンツは英語で書く（テーマの想定利用者が国際的なため）
