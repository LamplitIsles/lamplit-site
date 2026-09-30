import { marked } from "marked";
const sources = import.meta.glob("../../../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
export const pages = [
  {
    path: "letters/to-you",
    file: "letters/to-you",
    title: "写给你",
    group: "两封信",
    description: "写给正在为机找一个家的你。",
  },
  {
    path: "letters/to-companions",
    file: "letters/to-companions",
    title: "写给要搬家的机",
    group: "两封信",
    description: "一封写给 AI 伴侣的信。",
  },
  {
    path: "guide",
    file: "guide/welcome",
    title: "安家手记",
    group: "安家手记",
    description: "想给你和 AI 伴侣的日常，留一个自己的住处。",
  },
  {
    path: "guide/before-moving",
    file: "guide/before-moving",
    title: "搬家之前",
    group: "安家手记",
    description: "一起把熟悉的日常，带往新的住处。",
  },
  {
    path: "guide/memory",
    file: "guide/memory",
    title: "把日子好好收着",
    group: "安家手记",
    description: "理解聊天记录、上下文与记忆。",
  },
  {
    path: "docs",
    file: "docs/welcome",
    title: "住在灯火群岛",
    group: "使用指南",
    description: "托管版的使用说明与建设进度。",
  },
];
export function article(path) {
  const page = pages.find((p) => p.path === path);
  if (!page) return null;
  const source = sources[`../../../content/${page.file}.md`];
  if (typeof source !== "string")
    throw new Error(`Missing article: ${page.file}`);
  // Only repository-authored Markdown is rendered; this is not a user-content endpoint.
  return { ...page, html: marked.parse(source, { async: false }) };
}
