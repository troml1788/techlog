export default {
    title: '毕业设计の技术文档', // 博客的标题
    description: '我是李超水，这是我的个人博客', // 博客的介绍
    base: '/blog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        // 页面右上角的导航（只要是在右上角的都在这里
        nav: [
            { text: "前端文档", link: "/articles/frontend/frontend-docs" },
            { text: "后端文档", link: "/articles/backend/backend-docs" },
            { text: "api文档", link: "/articles/api/api-docs" },
            { text: "亮点功能", link: "/articles/features/features-docs" },
            { text: "效果演示", link: "/articles/demo/demo-docs" },
            { text: "文献综述", link: "/articles/review/review-docs" },
            { text: "我的博客", link: "/articles/blog/blog-docs" },
            { text: "代码仓库", link: "/articles/code/code.docs" },
            {
                text: '博客文档',
                items: [ // 可以配置成下拉
                    { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '其他', link: '/articles/other/nvm管理node' },
                ]
            }
        ],
        //这个是点击右上角对应的导航区后，左侧的侧边栏
        sidebar: { // 侧边栏，可以分组,

            //前端文档（下拉菜单分组效果）
            "/articles/frontend": [
                //基础下拉菜单单元
                {
                    text: "一级下拉菜单",
                    collapsible: true, // 开启折叠（下拉）功能
                    collapsed: true,    // 默认折叠（可选，不写默认展开）
                    items: [
                        { text: "基础概念1", link: "/articles/learn/基础概念1" },
                        { text: "基础概念2", link: "/articles/learn/基础概念2" },
                    ],
                },
                 {
          text: "代码段",
          collapsible: true, // 开启下拉折叠
          collapsed: false,  // 默认展开
          items: [
            { text: "技术点1", link: "/articles/learn/" },
            { text: "技术点2", link: "/articles/learn/文件下载" },
            // 支持多级嵌套（二级下拉）
            {
              text: "高级代码段", // 二级分组（嵌套下拉）
              collapsible: true,
                collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
              items: [
                { text: "代码段3", link: "/articles/learn/高级代码段3" },
                { text: "代码段4", link: "/articles/learn/高级代码段4" },
              ]
            }
          ],
        },
            ],
            "/articles/learn/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "技术点1",
                            link: "/articles/learn/",
                        },
                        {
                            text: "技术点2",
                            link: "/articles/learn/文件下载",
                        },
                    ],
                },
            ],
            "/articles/uniapp/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "一键登录",
                            link: "/articles/uniapp/一键登录",
                        }
                    ],
                },
            ],
            "/articles/javaScript-core/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "1. 构造函数、原型、原型链",
                            link: "/articles/javaScript-core/构造函数、原型、原型链",
                        },
                        {
                            text: "2. 执行上下文和执行上下文栈",
                            link: "/articles/javaScript-core/执行上下文和执行上下文栈",
                        },
                        {
                            text: "3. this的指向",
                            link: "/articles/javaScript-core/this的指向",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/articles/libs/": [
                {
                    items: [
                        {
                            text: "1. VForm3低代码初体验",
                            link: "/articles/libs/VForm3低代码初体验",
                        },
                    ],
                }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/mlyz-wdy" }], // 可以连接到 github
    },
}

