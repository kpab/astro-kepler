import { getCollection, type CollectionEntry } from 'astro:content';
import { slugify } from './posts';

export type Project = CollectionEntry<'work'>;

/**
 * 公開プロジェクトを表示順で返す。
 * order 昇順 → 同値なら year 降順。draft は本番ビルドでのみ除外。
 */
export async function getPublishedProjects(): Promise<Project[]> {
	const projects = await getCollection('work', ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);
	return projects.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export interface CategoryInfo {
	name: string;
	slug: string;
	count: number;
}

/** 出現カテゴリを件数付きで返す（件数の多い順 → 名前順） */
export function collectCategories(projects: Project[]): CategoryInfo[] {
	const map = new Map<string, CategoryInfo>();
	for (const project of projects) {
		const name = project.data.category;
		const slug = slugify(name);
		const existing = map.get(slug);
		if (existing) existing.count += 1;
		else map.set(slug, { name, slug, count: 1 });
	}
	return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
