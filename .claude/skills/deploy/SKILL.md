---
name: deploy
description: デモサイトを Cloudflare Pages にデプロイする。「デプロイして」「デモを公開して」と言われたら使う。
---

# デモサイトのデプロイ（Cloudflare Pages）

1. ビルドする（ユーザーの明示的なデプロイ指示があった時点でビルドも許可されたとみなす）:
   ```sh
   pnpm build
   ```
2. 初回のみ、Pages プロジェクトを作成する（作成済みならスキップ）:
   ```sh
   wrangler pages project create astro-kepler --production-branch=main
   ```
3. デプロイする:
   ```sh
   wrangler pages deploy dist --project-name=astro-kepler
   ```
4. 出力されたデプロイ URL をユーザーに提示し、トップページ（LP）が表示されることを確認してもらう。

## 注意

- production 反映は main ブランチのビルドのみ。動作確認目的ならブランチ名付きの
  preview デプロイ（`--branch=<name>`）を使う。
- `wrangler` 未ログインで失敗したら、ユーザーに `! wrangler login` の実行を依頼する。
