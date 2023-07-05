import { navbar } from "vuepress-theme-hope";


export default navbar([
  "/",
  "/demo/",
  "/Algorithm/",
  {
    text: "OS",
    icon: "desktop",
    prefix: "/OS/",
    children: [
          { text: "c++多线程之互斥锁", icon: "desktop", link: "1" },
          {
            text: "OS操作系统知识点总结",
            icon: "desktop",
            prefix: "OS操作系统知识点总结/",
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
          

    ]
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
