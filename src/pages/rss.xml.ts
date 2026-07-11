import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/posts';
import { site } from '../site.config';

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: `${site.name} — Blog`,
		description: site.description,
		// astro.config の site を使う。未設定時はフォールバック
		site: context.site ?? site.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
			author: post.data.author ?? site.author,
		})),
		customData: `<language>${site.locale}</language>`,
	});
}
