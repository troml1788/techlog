export default {
    title: '自动化の学习记录', // 博客的标题
    description: '在这里记录入行自动化学习的所有笔记', // 博客的介绍
    base: '/techlog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        // 页面右上角的导航（只要是在右上角的都在这里
        nav: [
            // { text: "现场问题", link: "/articles/scene/scene-docs" },
            { text: "PLC学习笔记", link: "/articles/PLC/PLC-docs" },

            { text: "伺服&步进", link: "/articles/api/api-docs" },
            { text: "亮点功能", link: "/articles/features/features-docs" },
            { text: "效果演示", link: "/articles/demo/demo-docs" },
            { text: "读书摘要", link: "/articles/read/read-docs" },
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
            "/articles/scene": [
                {
                    text: "联赢-客户现场报告",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "刚出新手村的大boss", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            link: "/articles/scene/evens/even001",
                        },
                        {
                            text: "软件安装", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "软件安装", link: "/articles/PLC/learn/siemens/learn003" },
                                { text: "软件基础操作", link: "/articles/PLC/learn/siemens/learn004" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "数据类型|置位复位|沿|DB块", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "数据类型", link: "/articles/PLC/learn/siemens/learn005" },
                                { text: "数据块DB讲解", link: "/articles/PLC/learn/siemens/learn006" },
                                { text: "置位复位和沿指令", link: "/articles/PLC/learn/siemens/learn007" },
                            ]
                        }
                    ],
                },
            ],
            //前端文档（下拉菜单分组效果）
            "/articles/PLC": [
                {
                    text: "汇川家族",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "基本常识", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果

                            items: [
                                { text: "汇川PLC阵容", link: "/articles/PLC/learn/inovance/learn/learn2025123101" },
                                { text: "H5U系列PLC硬件结构", link: "/articles/PLC/learn/inovance/learn/learn2026010101" },
                                { text: "H5U系列PLC端子分布图", link: "/articles/PLC/learn/inovance/learn/learn2026010201" },
                                { text: "H5U系列PLC实物接线", link: "/articles/PLC/learn/inovance/learn/learn2026010202" },
                                { text: "H5U系列PLC输出单元", link: "/articles/PLC/learn/inovance/learn/learn2026010203" },
                            ]
                        },
                        {
                            text: "相关软件", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "软件安装&基础操作", link: "/articles/PLC/learn/inovance/learn/learn2026010204" },
                                { text: "通讯&扩展&基础指令", link: "/articles/PLC/learn/inovance/learn/learn2026010205" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "PLC控制程序设计", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "三大经典电路", link: "/articles/PLC/learn/inovance/learn/learn2026010206" },
                                { text: "数据块DB讲解", link: "/articles/PLC/learn/siemens/learn006" },
                                { text: "置位复位和沿指令", link: "/articles/PLC/learn/siemens/learn007" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "仿真方案", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "触摸屏仿真", link: "/articles/PLC/learn/inovance/learn/learn2026010207" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "练习小实战", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "水泵+电机顺启逆停实战", link: "/articles/PLC/learn/inovance/learn/learn2026010301" },
                                { text: "抢答灯实战", link: "/articles/PLC/learn/inovance/learn/learn2026010302" },
                                { text: "置位复位和沿指令", link: "/articles/PLC/learn/siemens/learn007" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "理论知识", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "PLC工作原理&工作过程&双线圈冲突", link: "/articles/PLC/learn/inovance/learn/learn2026010401" },
                                { text: "虚拟继电器M", link: "/articles/PLC/learn/inovance/learn/learn2026010402" },
                                { text: "上升沿&下降沿", link: "/articles/PLC/learn/inovance/learn/learn2026010403" },
                            ]
                        },
                    ],
                },
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
                                { text: "SMART和博图对比区别", link: "/articles/PLC/learn/siemens/learn001" },
                                { text: "1200&1500硬件讲解", link: "/articles/PLC/learn/siemens/learn002" },
                            ]
                        },
                        {
                            text: "软件安装", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "软件安装", link: "/articles/PLC/learn/siemens/learn003" },
                                { text: "软件基础操作", link: "/articles/PLC/learn/siemens/learn004" },
                            ]
                        },
                        // 支持多级嵌套（二级下拉）
                        {
                            text: "数据类型|置位复位|沿|DB块", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "数据类型", link: "/articles/PLC/learn/siemens/learn005" },
                                { text: "数据块DB讲解", link: "/articles/PLC/learn/siemens/learn006" },
                                { text: "置位复位和沿指令", link: "/articles/PLC/learn/siemens/learn007" },
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
            // "/articles/read/": [
            //     //基础下拉菜单单元--开始
            //     {
            //         text: "当下的力量",
            //         collapsible: true, // 开启折叠（下拉）功能
            //         collapsed: true,    // 默认折叠（可选，不写默认展开）
            //         items: [
            //             { text: "为什么看这本书?", link: "/articles/read/books/book1" },
            //             { text: "本书摘要", link: "/articles/read/books/notes/note1" },
            //         ],
            //     },
            //     //基础单元--结尾符号

            //     //基础下拉菜单单元--开始
            //     {
            //         text: "与神对话",
            //         collapsible: true, // 开启折叠（下拉）功能
            //         collapsed: true,    // 默认折叠（可选，不写默认展开）
            //         items: [
            //             { text: "为什么看这本书?", link: "/articles/PLC/learn/learn001" },
            //             { text: "1200&1500硬件讲解", link: "/articles/PLC/learn/learn002" },
            //         ],
            //     },
            //     //基础单元--结尾符号
            //     //基础下拉菜单单元--开始
            //     {
            //         text: "纳瓦尔宝典",
            //         collapsible: true, // 开启折叠（下拉）功能
            //         collapsed: true,    // 默认折叠（可选，不写默认展开）
            //         items: [
            //             { text: "为什么看这本书?", link: "/articles/PLC/learn/learn001" },
            //             { text: "1200&1500硬件讲解", link: "/articles/PLC/learn/learn002" },
            //         ],
            //     },
            //     //基础单元--结尾符号
            // ],
            "/articles/read/": [

                //基本读书记录单元-----开始
                {
                    text: "当下的力量",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        { text: "为什么看这本书?", link: "/articles/read/books/book001" },
                        {
                            text: "本书摘要", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "1", link: "/articles/read/notes/book001/note001" },
                                { text: "2", link: "/articles/read/notes/book001/note002" },
                            ]
                        },
                    ],
                },
                //基本读书记录单元-----结尾

                //基本读书记录单元-----开始
                {
                    text: "与神对话",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        { text: "为什么看这本书?", link: "/articles/read/books/book002" },
                        {
                            text: "本书摘要", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "1", link: "/articles/read/notes/book002/note001" },
                                { text: "2", link: "/articles/read/notes/book002/note002" },
                            ]
                        },
                    ],
                },
                //基本读书记录单元-----结尾

                //基本读书记录单元-----开始
                {
                    text: "纳瓦尔宝典",
                    collapsible: true, // 开启下拉折叠
                    collapsed: false,  // 默认展开
                    items: [
                        { text: "为什么看这本书?", link: "/articles/read/books/book003" },
                        {
                            text: "本书摘要", // 二级分组（嵌套下拉）
                            collapsible: true,
                            collapsed: true,    // 如果不加这个，二级菜单就会受父组件影响默认展开，但是无法关闭，仅展示级联效果
                            items: [
                                { text: "1", link: "/articles/read/notes/book003/note001" },
                                { text: "2", link: "/articles/read/notes/book003/note002" },
                            ]
                        },
                    ],
                },
                //基本读书记录单元-----结尾
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

