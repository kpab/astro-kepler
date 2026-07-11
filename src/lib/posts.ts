import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** タグ・パス用の slug 化。空白→ハイフン、英数とハイフンのみに正規化 */
export function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');
}

/** 本文の語数から読了時間（分）を概算する。remark 非依存 */
export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/**
 * 公開記事を新しい順で返す。
 * draft は本番ビルド（PROD）でのみ除外し、開発時は下書きも見える。
 */
export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);
	return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export interface TagInfo {
	name: string;
	slug: string;
	count: number;
}

/** 全記事から出現タグを集計し、記事数の多い順に返す */
export function collectTags(posts: Post[]): TagInfo[] {
	const map = new Map<string, TagInfo>();
	for (const post of posts) {
		for (const name of post.data.tags) {
			const slug = slugify(name);
			const existing = map.get(slug);
			if (existing) existing.count += 1;
			else map.set(slug, { name, slug, count: 1 });
		}
	}
	return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
