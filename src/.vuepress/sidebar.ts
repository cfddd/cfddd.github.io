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
      text: "OS操作系统知识点总结",
      icon: "desktop",
      prefix: "OS/OS操作系统知识点总结/",
      children: [
        {
          text: "导论",
          icon: "pen-to-square",
          link: "21.md",
        },
        {
          text: "进程的描述与控制",
          icon: "pen-to-square",
          link: "22.md",
        },
        {
          text: "处理机调度与死锁",
          icon: "pen-to-square",
          link: "23.md",
        },
        {
          text: "进程同步",
          icon: "pen-to-square",
          link: "24.md",
        },
        {
          text: "死锁",
          icon: "pen-to-square",
          link: "25.md",
        },
        {
          text: "存储器管理",
          icon: "pen-to-square",
          link: "26.md",
        },
        {
          text: "虚拟存储器",
          icon: "pen-to-square",
          link: "27.md",
        },
      ],
    },
    "intro",
    "slides",
  ],
});
