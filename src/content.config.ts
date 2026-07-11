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

export const collections = { blog };
