export default {
    title: '自动化の学习记录', // 博客的标题
    description: '在这里记录入行自动化学习的所有笔记', // 博客的介绍
    base: '/techlog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        // 页面右上角的导航（只要是在右上角的都在这里
        nav: [
            { text: "PLC学习笔记", link: "/articles/PLC/PLC-docs" },
            { text: "后端文档", link: "/articles/backend/backend-docs" },
            { text: "api文档", link: "/articles/api/api-docs" },
            { text: "亮点功能", link: "/articles/features/features-docs" },
            { text: "效果演示", link: "/articles/demo/demo-docs" },
            { text: "文献综述", link: "/articles/review/review-docs" },
            { text: "我的博客", link: "/articles/blog/blog-docs" },
            { text: "代码仓库", link: "/articles/code/code.docs" },
            {
                text: '记录模板',
                items: [ // 可以配置成下拉
                    { text: 'PLC学习笔记模板', link: '/articles/template/PLC-learn-template' },
                    { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '其他', link: '/articles/other/nvm管理node' },
                ]
            }
        ],
        //这个是点击右上角对应的导航区后，左侧的侧边栏
        sidebar: { // 侧边栏，可以分组,

            //前端文档（下拉菜单分组效果）
            "/articles/PLC": [
                // //基础下拉菜单单元
                // {
                //     text: "西门子S7-1200&1500硬件介绍",
                //     collapsible: true, // 开启折叠（下拉）功能
                //     collapsed: true,    // 默认折叠（可选，不写默认展开）
                //     items: [
                //         { text: "SMART和博图的区别", link: "/articles/PLC/learn/learn001" },
                //         { text: "1200&1500硬件讲解", link: "/articles/PLC/learn/learn002" },
                //     ],
                // },
                {
                    text: "西门子S7-1200",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "1200&1500硬件介绍", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "SMART和博图对比区别", link: "/articles/PLC/learn/learn001" },
                                { text: "1200&1500硬件讲解", link: "/articles/PLC/learn/learn002" },
                            ]
                        },
                        {
                            text: "软件安装", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "软件安装", link: "/articles/PLC/learn/learn003" },
                                { text: "软件基础操作", link: "/articles/PLC/learn/learn004" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "数据类型|置位复位|沿|DB块", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "数据类型", link: "/articles/PLC/learn/learn005" },
                                { text: "数据块DB讲解", link: "/articles/PLC/learn/learn006" },
                                { text: "置位复位和沿指令", link: "/articles/PLC/learn/learn007" },
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

