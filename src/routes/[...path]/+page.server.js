import { error } from "@sveltejs/kit";
import { article, pages } from "$lib/server/content";
export const entries = () => pages.map((page) => ({ path: page.path }));
export function load({ params }) {
  const page = article(params.path.replace(/\/$/, ""));
  if (!page) error(404, "这页还没有写到。");
  return { article: page, pages };
}
