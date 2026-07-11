import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * ブログ記事コレクション。frontmatter は型付きで検証される。
 * 記事は src/content/blog/ に .md / .mdx で追加する（テーマ利用者のコンテンツ領域）。
 */
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),
			/** true の記事は本番ビルドで一覧・詳細から除外される */
			draft: z.boolean().default(false),
			/** アイキャッチ画像（任意）。src/content/blog からの相対パス */
			heroImage: image().optional(),
		}),
});

/*
 * ポートフォリオ（プロジェクト）コレクション。本文はケーススタディ。
 * src/content/work/ に .md / .mdx で追加する。
 */
const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			/** フィルタに使う主カテゴリ */
			category: z.string(),
			/** 使用技術・スタック */
			tech: z.array(z.string()).default([]),
			year: z.number(),
			role: z.string().optional(),
			client: z.string().optional(),
			/** 公開サイト・リポジトリ（任意） */
			url: z.string().url().optional(),
			repo: z.string().url().optional(),
			/** サムネイル（任意）。無い場合はグラデーションのプレースホルダを表示 */
			thumbnail: image().optional(),
			featured: z.boolean().default(false),
			/** 並び順（小さいほど前）。同値は year の新しい順 */
			order: z.number().default(0),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, work };
