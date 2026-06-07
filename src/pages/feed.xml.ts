import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const pieces = await getCollection('pieces');
  const sorted = pieces.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Daniel Weng — Analysis',
    description: 'Macroeconomic and geopolitical analysis.',
    site: context.site ?? 'https://danielcweng.github.io',
    items: sorted.map(piece => ({
      title: piece.data.title,
      pubDate: piece.data.date,
      description: piece.data.summary,
      link: `/pieces/${piece.id}/`,
    })),
  });
}
