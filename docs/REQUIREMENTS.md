# astro-kepler 要件

## 背景・目的

Astro 7 対応の OSS テーマ「Kepler」を作る。ブログ・ポートフォリオ・LP の3用途を
1つのコードベース（共通デザインシステム＋共通コンポーネント）でカバーする
汎用スターターテーマ。デザインは Claude Design で作成済みのハンドオフ
（navy × orange のポップ調、軌道リングモチーフ）に忠実に実装する。

**成功条件**: ハンドオフデザインに忠実な LP・ブログ・ポートフォリオの3プリセットが
テンプレートリポジトリとして公開され、デモサイトが Cloudflare Pages で閲覧できる。

## ユーザー

不特定多数（OSS 公開）。GitHub `kpab/astro-kepler` の public リポジトリとして配布。

## デザイン

- 原本: `docs/design/` に保全したハンドオフ一式（`design-spec.md` + `kepler-landing.html`）
- カラー: navy `#1e3a8a` / orange `#f97316` の2色系＋暖色ニュートラル。第3の色相は使わない
- タイポ: Space Grotesk（見出し）/ Manrope（本文）
- 意匠: ハードオフセットシャドウ（`6px 6px 0`）、±1.5°回転カード、ピルボタン、
  ステッカー形状（✦・回転四角・円）、軌道リングアニメーション
- デザイン内の「Orbit」表記・ロゴは「Kepler」に差し替える（軌道マークはそのまま流用可）

## スコープ

### やること(MVP)

- **LP プリセット**: ハンドオフデザインの忠実な再現（Nav / Hero / ロゴ帯 / Features /
  Showcase / Pricing / Testimonials / FAQ / CTA / Footer、アコーディオン・料金トグル含む）
- **ブログプリセット**: Content Collections（Markdown/MDX・型付き frontmatter）、
  記事一覧・詳細、タグ絞り込み、ページネーション、読了時間、RSS
- **ポートフォリオプリセット**: プロジェクトグリッド（フィルタ付き）、ケーススタディレイアウト
- **SEO・OGP**: メタタグコンポーネント、OGP、sitemap、RSS
- **検索**: 記事検索（タグと横断）

### やらないこと(今回は)

- npm パッケージ（インテグレーション形式）での配布 — テンプレートリポジトリのみ
- ダークモード（デザインがライトのみ。Features カードの文言としては登場するが実装は将来）
- CMS 連携（Markdown/MDX ファイル管理のみ)
- 多言語対応（テーマ自体は英語コンテンツのサンプルのみ）
- 決済・認証などの動的機能（Pricing セクションは静的な見た目のみ）

## 技術選定

| 項目 | 選定 | 理由 |
|------|------|------|
| フレームワーク | Astro 7（7.0.x） | 最新メジャー対応がテーマの売り。Rust コンパイラ・Vite 8 |
| スタイリング | Tailwind CSS v4 | Astro テーマの主流。利用者がカスタマイズしやすい |
| 言語 | TypeScript | Content Collections の型付き frontmatter を活かす |
| コンテンツ | Content Collections + MDX | Astro 標準。Astro 7 は Sätteri が既定（remark/rehype 使用時は `@astrojs/markdown-remark` 追加） |
| 検索 | Pagefind（候補） | 静的サイト検索の定番。ビルド後インデックス生成 |
| デモデプロイ | Cloudflare Pages | 普段の主戦場。無料枠で静的サイトに十分 |
| インタラクション | vanilla JS（`<script>`） | FAQ アコーディオン・料金トグル程度。フレームワーク島は不要 |

## 公開・運用

- リポジトリ: public（GitHub: kpab/astro-kepler） / ライセンス: MIT
- デプロイ先: Cloudflare Pages（デモサイト）。テーマ利用者は任意のホスティング
- CI: 未定（GitHub Actions でビルド確認程度を想定）
- 公開後: Astro 公式テーマカタログ（astro.build/themes）への登録を目指す

## マイルストーン

- **M1(最小の動くもの)**: Astro 7 + Tailwind v4 のプロジェクトが起動し、
  LP がハンドオフデザインに忠実に表示される（`pnpm dev` でトップページ＝LP を目視確認）
  - [x] デザイントークン定義（global.css に色・フォント・シャドウを CSS 変数＋Tailwind テーマとして設定、Google Fonts 読み込み）
  - [ ] ベースレイアウト＋Nav＋Footer（スティッキーNav・スクロール時シャドウ・軌道マークロゴ）
  - [ ] Hero＋ロゴ帯（軌道リングアニメーション、ステッカー、CTA、trust row）
  - [ ] Features＋Showcase＋Testimonials（ハードシャドウカード、±回転、hover 直立）
  - [ ] Pricing＋FAQ＋最終CTA（料金トグル・アコーディオンを vanilla JS で実装）
- **M2**: ブログプリセット＋SEO 基盤（Content Collections、一覧/詳細/タグ/ページネーション、
  RSS、sitemap、メタタグ/OGP コンポーネント）
- **M3**: ポートフォリオプリセット＋検索（Pagefind）＋README 整備＋
  Cloudflare Pages デモ公開

## 将来(今は設計だけ意識)

- ダークモード（デザイントークンを CSS 変数化しておき、後から差し替え可能に）
- OG 画像の自動生成（satori 等）
- npm インテグレーション形式での配布
- Astro 公式テーマカタログ登録・テーマ紹介記事

## 未定事項

- 検索の実装方式（Pagefind か自前のクライアントサイド検索か）— M3 で決定
- CI の内容（ビルド確認のみ or Lighthouse CI まで）
- プリセットの切り替え方式（ディレクトリ構成で分けるか、設定ファイルで分けるか）— M1 の構成設計時に決定
- デモサイトのドメイン
