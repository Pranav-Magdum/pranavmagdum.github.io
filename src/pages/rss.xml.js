import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { url } from '../lib/url';

let posts = [];

try {
	posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
} catch {
	// Collection is empty or missing
}

export function GET(context) {
	const baseUrl = new URL(import.meta.env.BASE_URL, context.site);
	return rss({
		title: 'Pranav Magdum — Blog',
		description: 'Writing by Pranav Magdum on mathematics, study notes, and more.',
		site: baseUrl,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: url(`/blog/${post.id}/`),
			categories: post.data.tags,
		})),
		customData: `<language>en-us</language>`,
	});
}
