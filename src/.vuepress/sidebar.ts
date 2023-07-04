import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "算法竞赛笔记",
      icon: "calculator",
      prefix: "Algorithm/",
      children: "structure",
    },
    {
      text: "OS操作系统",
      icon: "desktop",
      prefix: "OS/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
