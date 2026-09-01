import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.PNVe5cA1.js";const g=JSON.parse('{"title":"一、这个案例要做什么","description":"","frontmatter":{},"headers":[],"relativePath":"articles/compute/cs/ABmenu001.md","filePath":"articles/compute/cs/ABmenu001.md"}'),i={name:"articles/compute/cs/ABmenu001.md"};function t(l,s,c,d,o,h){return p(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="一、这个案例要做什么" tabindex="-1">一、这个案例要做什么 <a class="header-anchor" href="#一、这个案例要做什么" aria-label="Permalink to &quot;一、这个案例要做什么&quot;">​</a></h1><p>不是只解决这一次 <code>Battery_Data</code>。 而是做一个以后可以反复使用的：</p><blockquote><p><strong>上位机自动化基础类库</strong> 以后新建一个项目，例如：</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>海辰组盘机</span></span>
<span class="line"><span>PACK测试机</span></span>
<span class="line"><span>电芯检测机</span></span>
<span class="line"><span>扫码设备</span></span>
<span class="line"><span>机器人上下料</span></span></code></pre></div><p>都可以直接引用：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ByteQuestor.Automation.Core</span></span>
<span class="line"><span>ByteQuestor.Automation.Plc.Siemens</span></span></code></pre></div><p>然后业务项目只需要写：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> batteries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> batteryService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadAllAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>而不是每个项目重新写：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PLC连接</span></span>
<span class="line"><span>PLC读取</span></span>
<span class="line"><span>Byte转换</span></span>
<span class="line"><span>String解析</span></span>
<span class="line"><span>BOOL解析</span></span>
<span class="line"><span>INT解析</span></span>
<span class="line"><span>结构体解析</span></span>
<span class="line"><span>异常处理</span></span></code></pre></div><hr><h1 id="二、先看最终项目结构" tabindex="-1">二、先看最终项目结构 <a class="header-anchor" href="#二、先看最终项目结构" aria-label="Permalink to &quot;二、先看最终项目结构&quot;">​</a></h1><p>目前是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ByteQuestor.Automation</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ReadCodeDemo</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ByteQuestor.Automation.Core</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── ByteQuestor.Automation.Plc.Siemens</span></span></code></pre></div><p>最终逐渐发展成下面这样：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ByteQuestor.Automation                         【解决方案】</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ReadCodeDemo                                【业务项目 / Demo】</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Models                                  【业务模型层】</span></span>
<span class="line"><span>│   │   └── BatteryData.cs</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Services                                【业务服务层】</span></span>
<span class="line"><span>│   │   ├── BatteryService.cs</span></span>
<span class="line"><span>│   │   └── BatteryDataParser.cs</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Forms                                   【UI表现层】★后续整理</span></span>
<span class="line"><span>│   │   └── Form1.cs</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   └── Program.cs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ByteQuestor.Automation.Core                【核心基础层】</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Plc                                     【PLC抽象层】</span></span>
<span class="line"><span>│   │   ├── IPlcClient.cs</span></span>
<span class="line"><span>│   │   └── PlcAddress.cs</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Data                                    【通用数据层】</span></span>
<span class="line"><span>│   │   └── ...                                 ★后续</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Results                                 【统一结果层】</span></span>
<span class="line"><span>│   │   ├── Result.cs</span></span>
<span class="line"><span>│   │   └── ResultT.cs</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── Extensions                              【通用扩展层】</span></span>
<span class="line"><span>│   │   └── ...                                 ★后续</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   └── Utilities                               【通用工具层】</span></span>
<span class="line"><span>│       └── ...                                 ★后续</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── ByteQuestor.Automation.Plc.Siemens         【西门子实现层】</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├── SiemensPlcClient.cs                     【PLC通讯实现】</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├── Address                                 【西门子地址层】</span></span>
<span class="line"><span>    │   └── SiemensAddressParser.cs</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └── Data                                    【西门子数据解析层】</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        └── Readers</span></span>
<span class="line"><span>            ├── S7StringReader.cs</span></span>
<span class="line"><span>            ├── S7IntReader.cs</span></span>
<span class="line"><span>            └── S7BitReader.cs</span></span></code></pre></div><p><strong>先记住这一棵树。</strong> 后面所有代码，都要问：</p><blockquote><p><strong>“它应该挂在哪个树枝上？”</strong></p></blockquote><hr><h1 id="三、最重要-三大项目到底干什么" tabindex="-1">三、最重要：三大项目到底干什么？ <a class="header-anchor" href="#三、最重要-三大项目到底干什么" aria-label="Permalink to &quot;三、最重要：三大项目到底干什么？&quot;">​</a></h1><p>整个架构可以简单理解成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                  ByteQuestor.Automation</span></span>
<span class="line"><span>                          │</span></span>
<span class="line"><span>          ┌───────────────┼───────────────┐</span></span>
<span class="line"><span>          ↓               ↓               ↓</span></span>
<span class="line"><span>     ReadCodeDemo        Core          Plc.Siemens</span></span>
<span class="line"><span>      【业务】          【基础】          【实现】</span></span>
<span class="line"><span>          │               │               │</span></span>
<span class="line"><span>          │               │               │</span></span>
<span class="line"><span>      我要电池数据       我规定标准        我负责西门子</span></span>
<span class="line"><span>          │               │               │</span></span>
<span class="line"><span>          └───────────────┼───────────────┘</span></span>
<span class="line"><span>                          ↓</span></span>
<span class="line"><span>                         PLC</span></span></code></pre></div><hr><h1 id="四、1-readcodedemo-——-业务层" tabindex="-1">四、① ReadCodeDemo —— 业务层 <a class="header-anchor" href="#四、1-readcodedemo-——-业务层" aria-label="Permalink to &quot;四、① ReadCodeDemo —— 业务层&quot;">​</a></h1><p>这是最容易理解的一层。</p><p>它代表：</p><blockquote><p><strong>“现在正在做的这台设备/这个项目。”</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReadCodeDemo</span></span></code></pre></div><p>以后也可能变成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HaichenAssembly</span></span>
<span class="line"><span>PackTester</span></span>
<span class="line"><span>CellTester</span></span>
<span class="line"><span>RobotStation</span></span></code></pre></div><hr><h2 id="models-——-业务模型层" tabindex="-1">Models —— 业务模型层 <a class="header-anchor" href="#models-——-业务模型层" aria-label="Permalink to &quot;Models —— 业务模型层&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReadCodeDemo</span></span>
<span class="line"><span>└── Models</span></span>
<span class="line"><span>    └── BatteryData.cs</span></span></code></pre></div><p>这里放：</p><blockquote><p><strong>PLC数据经过解析以后，在C#里面长什么样。</strong></p></blockquote><p>例如：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BatteryData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BarCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> State</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Have</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScanOk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScanNg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>PLC原来是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>36 Byte</span></span></code></pre></div><p>经过解析：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>36 Byte</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>BatteryData</span></span></code></pre></div><p>所以：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Models</span></span>
<span class="line"><span>=</span></span>
<span class="line"><span>“数据长什么样”</span></span></code></pre></div><hr><h1 id="五、services-——-业务服务层" tabindex="-1">五、Services —— 业务服务层 <a class="header-anchor" href="#五、services-——-业务服务层" aria-label="Permalink to &quot;五、Services —— 业务服务层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReadCodeDemo</span></span>
<span class="line"><span>└── Services</span></span>
<span class="line"><span>    ├── BatteryService.cs</span></span>
<span class="line"><span>    └── BatteryDataParser.cs</span></span></code></pre></div><p>这一层非常重要。</p><p>它负责：</p><blockquote><p><strong>“我要完成什么业务。”</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>读取10个Battery</span></span>
<span class="line"><span>读取扫码结果</span></span>
<span class="line"><span>判断扫码是否成功</span></span>
<span class="line"><span>获取当前电池状态</span></span></code></pre></div><h3 id="batterydataparser" tabindex="-1">BatteryDataParser <a class="header-anchor" href="#batterydataparser" aria-label="Permalink to &quot;BatteryDataParser&quot;">​</a></h3><p>负责：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>36 Byte</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>BatteryData</span></span></code></pre></div><p>它知道：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>0~30      → BarCode</span></span>
<span class="line"><span>32~33     → State</span></span>
<span class="line"><span>34.0      → Have</span></span>
<span class="line"><span>34.1      → Scan_OK</span></span>
<span class="line"><span>34.2      → Scan_NG</span></span></code></pre></div><p>注意：</p><p>这些东西是<strong>你的 Battery 项目自己的结构定义</strong>。</p><p>所以它属于：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReadCodeDemo</span></span></code></pre></div><p>而不是 Core。</p><hr><h1 id="六、2-bytequestor-automation-core-——-核心基础层" tabindex="-1">六、② ByteQuestor.Automation.Core —— 核心基础层 <a class="header-anchor" href="#六、2-bytequestor-automation-core-——-核心基础层" aria-label="Permalink to &quot;六、② ByteQuestor.Automation.Core —— 核心基础层&quot;">​</a></h1><p>这个项目是整个框架最重要的东西。</p><p>你可以把它理解成：</p><blockquote><p><strong>“所有自动化项目共同遵守的规则。”</strong></p></blockquote><p>它不知道你现在是什么机器。</p><p>也不知道：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Battery</span></span>
<span class="line"><span>Groupip</span></span>
<span class="line"><span>扫码</span></span>
<span class="line"><span>机器人</span></span></code></pre></div><p>它只提供：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PLC应该怎么抽象</span></span>
<span class="line"><span>数据怎么返回</span></span>
<span class="line"><span>通用工具怎么处理</span></span></code></pre></div><hr><h1 id="七、core-→-plc-——-plc抽象层" tabindex="-1">七、Core → Plc —— PLC抽象层 <a class="header-anchor" href="#七、core-→-plc-——-plc抽象层" aria-label="Permalink to &quot;七、Core → Plc —— PLC抽象层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Plc</span></span>
<span class="line"><span>    ├── IPlcClient.cs</span></span>
<span class="line"><span>    └── PlcAddress.cs</span></span></code></pre></div><h3 id="iplcclient" tabindex="-1">IPlcClient <a class="header-anchor" href="#iplcclient" aria-label="Permalink to &quot;IPlcClient&quot;">​</a></h3><p>它定义：</p><blockquote><p><strong>“一个PLC客户端应该具备什么能力。”</strong></p></blockquote><p>例如：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ConnectAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DisconnectAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadBytesAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteBytesAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>它不管：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>西门子怎么连接</span></span>
<span class="line"><span>欧姆龙怎么连接</span></span>
<span class="line"><span>汇川怎么连接</span></span></code></pre></div><p>它只规定：</p><blockquote><p>作为一个 PLC Client，必须能连接、断开、读、写。</p></blockquote><hr><h1 id="八、为什么需要-iplcclient" tabindex="-1">八、为什么需要 IPlcClient？ <a class="header-anchor" href="#八、为什么需要-iplcclient" aria-label="Permalink to &quot;八、为什么需要 IPlcClient？&quot;">​</a></h1><p>因为以后可能遇到：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>西门子</span></span>
<span class="line"><span>欧姆龙</span></span>
<span class="line"><span>汇川</span></span>
<span class="line"><span>三菱</span></span>
<span class="line"><span>Modbus</span></span></code></pre></div><p>如果没有接口，业务代码可能写成：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SiemensPlcClient</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><p>那么以后换欧姆龙：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>整个业务层全部改</span></span></code></pre></div><p>有了：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IPlcClient</span></span></code></pre></div><p>业务层只认识：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>IPlcClient</span></span></code></pre></div><p>下面可以换：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>             IPlcClient</span></span>
<span class="line"><span>                 │</span></span>
<span class="line"><span>        ┌────────┼────────┐</span></span>
<span class="line"><span>        ↓        ↓        ↓</span></span>
<span class="line"><span>     Siemens   Omron   Inovance</span></span></code></pre></div><p>这就是<strong>解耦</strong>。</p><hr><h1 id="九、plcaddress-——-地址抽象" tabindex="-1">九、PlcAddress —— 地址抽象 <a class="header-anchor" href="#九、plcaddress-——-地址抽象" aria-label="Permalink to &quot;九、PlcAddress —— 地址抽象&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Plc</span></span>
<span class="line"><span>    └── PlcAddress.cs</span></span></code></pre></div><p>它代表：</p><blockquote><p><strong>“要访问PLC里的某个位置。”</strong></p></blockquote><p>Core不应该直接认识：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DB100</span></span>
<span class="line"><span>DBX</span></span>
<span class="line"><span>M100</span></span>
<span class="line"><span>D100</span></span>
<span class="line"><span>FINS</span></span></code></pre></div><p>所以先统一成：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PlcAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DB100.5616&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>然后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>“给我这个地址的数据”</span></span></code></pre></div><p>具体怎么解释：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DB100.5616</span></span></code></pre></div><p>由：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Siemens</span></span></code></pre></div><p>自己解决。</p><hr><h1 id="十、3-bytequestor-automation-plc-siemens-——-西门子实现层" tabindex="-1">十、③ ByteQuestor.Automation.Plc.Siemens —— 西门子实现层 <a class="header-anchor" href="#十、3-bytequestor-automation-plc-siemens-——-西门子实现层" aria-label="Permalink to &quot;十、③ ByteQuestor.Automation.Plc.Siemens —— 西门子实现层&quot;">​</a></h1><p>这个项目的定位非常简单：</p><blockquote><p><strong>所有“西门子特有”的东西都放这里。</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S7.NetPlus</span></span>
<span class="line"><span>CpuType</span></span>
<span class="line"><span>DB</span></span>
<span class="line"><span>DBX</span></span>
<span class="line"><span>S7 STRING</span></span>
<span class="line"><span>S7 INT</span></span>
<span class="line"><span>S7 BOOL</span></span></code></pre></div><p>都不应该污染 Core。</p><hr><h1 id="十一、siemensplcclient-——-plc通讯实现" tabindex="-1">十一、SiemensPlcClient —— PLC通讯实现 <a class="header-anchor" href="#十一、siemensplcclient-——-plc通讯实现" aria-label="Permalink to &quot;十一、SiemensPlcClient —— PLC通讯实现&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ByteQuestor.Automation.Plc.Siemens</span></span>
<span class="line"><span>└── SiemensPlcClient.cs</span></span></code></pre></div><p>它负责：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>连接 Siemens PLC</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>读取 Siemens PLC</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>写入 Siemens PLC</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>断开 Siemens PLC</span></span></code></pre></div><p>它实现：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IPlcClient</span></span></code></pre></div><p>所以关系是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── IPlcClient</span></span>
<span class="line"><span>       ↑</span></span>
<span class="line"><span>       │ 实现</span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>Siemens</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── SiemensPlcClient</span></span></code></pre></div><hr><h1 id="十二、address-——-西门子地址解析层" tabindex="-1">十二、Address —— 西门子地址解析层 <a class="header-anchor" href="#十二、address-——-西门子地址解析层" aria-label="Permalink to &quot;十二、Address —— 西门子地址解析层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Siemens</span></span>
<span class="line"><span>└── Address</span></span>
<span class="line"><span>    └── SiemensAddressParser.cs</span></span></code></pre></div><p>这个类负责：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DB100.5616</span></span></code></pre></div><p>解析成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DB = 100</span></span>
<span class="line"><span>Byte = 5616</span></span></code></pre></div><p>为什么放 Siemens？</p><p>因为：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DB100.5616</span></span></code></pre></div><p>是西门子的概念。</p><p>以后如果是欧姆龙：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D100</span></span></code></pre></div><p>它的解析方式完全不同。</p><p>所以：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SiemensAddressParser</span></span></code></pre></div><p>绝对不能放 Core。</p><hr><h1 id="十三、data-→-readers-——-西门子数据解析层" tabindex="-1">十三、Data → Readers —— 西门子数据解析层 <a class="header-anchor" href="#十三、data-→-readers-——-西门子数据解析层" aria-label="Permalink to &quot;十三、Data → Readers —— 西门子数据解析层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Siemens</span></span>
<span class="line"><span>└── Data</span></span>
<span class="line"><span>    └── Readers</span></span>
<span class="line"><span>        ├── S7StringReader.cs</span></span>
<span class="line"><span>        ├── S7IntReader.cs</span></span>
<span class="line"><span>        └── S7BitReader.cs</span></span></code></pre></div><p>这里是我们刚才开始做的东西。</p><p>它负责：</p><blockquote><p><strong>把 PLC 原始 Byte 按照 S7 的数据规则解释出来。</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>byte[]</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>S7StringReader</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>string</span></span></code></pre></div><p>或者：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>byte[]</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>S7IntReader</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>short</span></span></code></pre></div><p>或者：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>byte[]</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>S7BitReader</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>bool</span></span></code></pre></div><hr><h1 id="十四、为什么-reader-不是-readcodedemo" tabindex="-1">十四、为什么 Reader 不是 ReadCodeDemo？ <a class="header-anchor" href="#十四、为什么-reader-不是-readcodedemo" aria-label="Permalink to &quot;十四、为什么 Reader 不是 ReadCodeDemo？&quot;">​</a></h1><p>这是你现在最应该理解的一个问题。</p><p>假设：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BatteryData</span></span></code></pre></div><p>有：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String[29]</span></span>
<span class="line"><span>INT</span></span>
<span class="line"><span>BOOL</span></span>
<span class="line"><span>BOOL</span></span>
<span class="line"><span>BOOL</span></span></code></pre></div><p>我们发现：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S7StringReader</span></span></code></pre></div><p>其实不仅 Battery 用。</p><p>以后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RobotData</span></span>
<span class="line"><span>ProductData</span></span>
<span class="line"><span>TrayData</span></span>
<span class="line"><span>StationData</span></span>
<span class="line"><span>AlarmData</span></span></code></pre></div><p>也全部可能出现：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String</span></span>
<span class="line"><span>INT</span></span>
<span class="line"><span>BOOL</span></span></code></pre></div><p>所以：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S7StringReader</span></span>
<span class="line"><span>S7IntReader</span></span>
<span class="line"><span>S7BitReader</span></span></code></pre></div><p>是<strong>可复用能力</strong>。</p><p>因此：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Siemens</span></span></code></pre></div><p>而不是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReadCodeDemo</span></span></code></pre></div><hr><h1 id="十五、results-——-统一结果层" tabindex="-1">十五、Results —— 统一结果层 <a class="header-anchor" href="#十五、results-——-统一结果层" aria-label="Permalink to &quot;十五、Results —— 统一结果层&quot;">​</a></h1><p>你现在已经有：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Results</span></span>
<span class="line"><span>    ├── Result.cs</span></span>
<span class="line"><span>    └── ResultT.cs</span></span></code></pre></div><p>这个设计非常好。</p><p>它解决的是：</p><blockquote><p><strong>所有方法到底成功还是失败？</strong></p></blockquote><p>例如：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Result</span></span></code></pre></div><p>可以表达：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>成功</span></span>
<span class="line"><span>失败</span></span>
<span class="line"><span>错误信息</span></span></code></pre></div><p>而：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>可以表达：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>成功</span></span>
<span class="line"><span>失败</span></span>
<span class="line"><span>错误信息</span></span>
<span class="line"><span>返回数据</span></span></code></pre></div><p>例如：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>就是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PLC读取</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>成功？</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>是 → byte[]</span></span>
<span class="line"><span>否 → Error</span></span></code></pre></div><p>以后：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BatteryData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>也可以：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>解析成功 → BatteryData</span></span>
<span class="line"><span>解析失败 → Error</span></span></code></pre></div><p>这样整个框架的错误处理就统一了。</p><hr><h1 id="十六、extensions-——-扩展层" tabindex="-1">十六、Extensions —— 扩展层 <a class="header-anchor" href="#十六、extensions-——-扩展层" aria-label="Permalink to &quot;十六、Extensions —— 扩展层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Extensions</span></span></code></pre></div><p>这里以后放：</p><blockquote><p><strong>给现有类型增加通用能力的扩展方法。</strong></p></blockquote><p>例如以后可能有：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToHexString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>或者：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsNullOrEmptySafe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>或者：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IEnumerable&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ForEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>但是现在：</p><p><strong>先空着。</strong></p><p>我们不要为了“看起来完整”而乱塞代码。</p><hr><h1 id="十七、utilities-——-工具层" tabindex="-1">十七、Utilities —— 工具层 <a class="header-anchor" href="#十七、utilities-——-工具层" aria-label="Permalink to &quot;十七、Utilities —— 工具层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Utilities</span></span></code></pre></div><p>这里放：</p><blockquote><p><strong>不属于具体业务，但很多地方都可能使用的小工具。</strong></p></blockquote><p>比如以后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ByteHelper</span></span>
<span class="line"><span>DateTimeHelper</span></span>
<span class="line"><span>RetryHelper</span></span>
<span class="line"><span>ValidationHelper</span></span></code></pre></div><p>等等。</p><p>但是同样：</p><p><strong>现在先不要写。</strong></p><hr><h1 id="十八、data-——-core里的通用数据层" tabindex="-1">十八、Data —— Core里的通用数据层 <a class="header-anchor" href="#十八、data-——-core里的通用数据层" aria-label="Permalink to &quot;十八、Data —— Core里的通用数据层&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Core</span></span>
<span class="line"><span>└── Data</span></span></code></pre></div><p>这个目录我们现在甚至可以暂时空着。</p><p>以后可能出现：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Data</span></span>
<span class="line"><span>├── DataBuffer.cs</span></span>
<span class="line"><span>├── DataBlock.cs</span></span>
<span class="line"><span>├── ArrayReader.cs</span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>但只有当我们实际遇到需求，再放进去。</p><hr><h1 id="十九、把整个架构压缩成一句话" tabindex="-1">十九、把整个架构压缩成一句话 <a class="header-anchor" href="#十九、把整个架构压缩成一句话" aria-label="Permalink to &quot;十九、把整个架构压缩成一句话&quot;">​</a></h1><p>以后脑子里只要记住：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌───────────────────────────────────────┐</span></span>
<span class="line"><span>│ ReadCodeDemo                           │</span></span>
<span class="line"><span>│ 【这个设备到底要干什么】              │</span></span>
<span class="line"><span>│                                       │</span></span>
<span class="line"><span>│ Models       → 我的数据               │</span></span>
<span class="line"><span>│ Services     → 我的业务               │</span></span>
<span class="line"><span>│ Forms        → 我的界面               │</span></span>
<span class="line"><span>└───────────────────┬───────────────────┘</span></span>
<span class="line"><span>                    │</span></span>
<span class="line"><span>                    ▼</span></span>
<span class="line"><span>┌───────────────────────────────────────┐</span></span>
<span class="line"><span>│ ByteQuestor.Automation.Core           │</span></span>
<span class="line"><span>│ 【所有设备共同遵守的规则】              │</span></span>
<span class="line"><span>│                                       │</span></span>
<span class="line"><span>│ IPlcClient   → PLC应该有什么能力       │</span></span>
<span class="line"><span>│ Result       → 结果怎么统一表达         │</span></span>
<span class="line"><span>│ Utilities    → 通用工具                │</span></span>
<span class="line"><span>└───────────────────┬───────────────────┘</span></span>
<span class="line"><span>                    │</span></span>
<span class="line"><span>                    ▼</span></span>
<span class="line"><span>┌───────────────────────────────────────┐</span></span>
<span class="line"><span>│ ByteQuestor.Automation.Plc.Siemens    │</span></span>
<span class="line"><span>│ 【西门子具体怎么实现】                  │</span></span>
<span class="line"><span>│                                       │</span></span>
<span class="line"><span>│ SiemensPlcClient → 西门子通讯          │</span></span>
<span class="line"><span>│ Address          → 西门子地址解析       │</span></span>
<span class="line"><span>│ Readers          → 西门子数据解析       │</span></span>
<span class="line"><span>└───────────────────────────────────────┘</span></span></code></pre></div><hr><h1 id="二十、再用现在这个实际例子串起来" tabindex="-1">二十、再用现在这个实际例子串起来 <a class="header-anchor" href="#二十、再用现在这个实际例子串起来" aria-label="Permalink to &quot;二十、再用现在这个实际例子串起来&quot;">​</a></h1><p>你现在要做：</p><blockquote><p><strong>读取 Groupip[1]</strong></p></blockquote><p>完整流程应该是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① BatteryService</span></span>
<span class="line"><span>   “读取Groupip[1]”</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>② IPlcClient</span></span>
<span class="line"><span>   “读取这段PLC数据”</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>③ SiemensPlcClient</span></span>
<span class="line"><span>   “我是西门子，我知道怎么读”</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>④ PLC</span></span>
<span class="line"><span>   返回36 Byte</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>⑤ BatteryDataParser</span></span>
<span class="line"><span>   “这36 Byte是BatteryData”</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>⑥ S7StringReader</span></span>
<span class="line"><span>   读取String[29]</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>⑦ S7IntReader</span></span>
<span class="line"><span>   读取INT</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>⑧ S7BitReader</span></span>
<span class="line"><span>   读取BOOL</span></span>
<span class="line"><span>             ↓</span></span>
<span class="line"><span>⑨ BatteryData</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      BarCode,</span></span>
<span class="line"><span>      State,</span></span>
<span class="line"><span>      Have,</span></span>
<span class="line"><span>      ScanOk,</span></span>
<span class="line"><span>      ScanNg</span></span>
<span class="line"><span>   }</span></span></code></pre></div><hr><h1 id="二十一、你现在暂时不要记具体代码" tabindex="-1">二十一、你现在暂时不要记具体代码 <a class="header-anchor" href="#二十一、你现在暂时不要记具体代码" aria-label="Permalink to &quot;二十一、你现在暂时不要记具体代码&quot;">​</a></h1><p>你现在只记下面这张表：</p><table tabindex="0"><thead><tr><th>层</th><th>项目/目录</th><th>负责什么</th></tr></thead><tbody><tr><td><strong>UI层</strong></td><td><code>Forms</code></td><td>界面、按钮、显示</td></tr><tr><td><strong>业务层</strong></td><td><code>ReadCodeDemo/Services</code></td><td>“我要完成什么业务”</td></tr><tr><td><strong>模型层</strong></td><td><code>ReadCodeDemo/Models</code></td><td>“我的业务数据是什么”</td></tr><tr><td><strong>核心抽象层</strong></td><td><code>Core/Plc</code></td><td>定义PLC统一标准</td></tr><tr><td><strong>结果层</strong></td><td><code>Core/Results</code></td><td>统一成功/失败/数据</td></tr><tr><td><strong>西门子实现层</strong></td><td><code>Plc.Siemens</code></td><td>西门子具体通讯</td></tr><tr><td><strong>地址解析层</strong></td><td><code>Siemens/Address</code></td><td>解析西门子地址</td></tr><tr><td><strong>数据解析层</strong></td><td><code>Siemens/Data/Readers</code></td><td>Byte → S7数据</td></tr><tr><td><strong>工具层</strong></td><td><code>Core/Utilities</code></td><td>通用工具</td></tr><tr><td><strong>扩展层</strong></td><td><code>Core/Extensions</code></td><td>通用扩展方法</td></tr></tbody></table><hr><h1 id="二十二、还有一个非常关键的原则" tabindex="-1">二十二、还有一个非常关键的原则 <a class="header-anchor" href="#二十二、还有一个非常关键的原则" aria-label="Permalink to &quot;二十二、还有一个非常关键的原则&quot;">​</a></h1><p>以后你写一个类之前，先问自己三个问题：</p><h3 id="问题1-这是所有项目都能用的吗" tabindex="-1">问题1：这是所有项目都能用的吗？ <a class="header-anchor" href="#问题1-这是所有项目都能用的吗" aria-label="Permalink to &quot;问题1：这是所有项目都能用的吗？&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>是</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>Core</span></span></code></pre></div><h3 id="问题2-它只是西门子能用吗" tabindex="-1">问题2：它只是西门子能用吗？ <a class="header-anchor" href="#问题2-它只是西门子能用吗" aria-label="Permalink to &quot;问题2：它只是西门子能用吗？&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>是</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>Plc.Siemens</span></span></code></pre></div><h3 id="问题3-它只是我这个电池项目能用吗" tabindex="-1">问题3：它只是我这个电池项目能用吗？ <a class="header-anchor" href="#问题3-它只是我这个电池项目能用吗" aria-label="Permalink to &quot;问题3：它只是我这个电池项目能用吗？&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>是</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>ReadCodeDemo</span></span></code></pre></div><p>这三个问题基本能解决你<strong>80%的代码放置问题</strong>。</p><hr><h1 id="二十三、我们目前实际上已经完成到哪里" tabindex="-1">二十三、我们目前实际上已经完成到哪里？ <a class="header-anchor" href="#二十三、我们目前实际上已经完成到哪里" aria-label="Permalink to &quot;二十三、我们目前实际上已经完成到哪里？&quot;">​</a></h1><p>按照整个路线：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>阶段1：架构</span></span>
<span class="line"><span>████████████████████ 100%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段2：PLC通讯</span></span>
<span class="line"><span>████████████████████ 100%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段3：单个结构体解析</span></span>
<span class="line"><span>████████░░░░░░░░░░░░  40%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段4：ARRAY批量读取</span></span>
<span class="line"><span>░░░░░░░░░░░░░░░░░░░░   0%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段5：通用结构体解析</span></span>
<span class="line"><span>░░░░░░░░░░░░░░░░░░░░   0%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段6：Service业务封装</span></span>
<span class="line"><span>░░░░░░░░░░░░░░░░░░░░   0%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段7：WinForms调用</span></span>
<span class="line"><span>░░░░░░░░░░░░░░░░░░░░   0%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段8：提炼成真正可复用的类库</span></span>
<span class="line"><span>░░░░░░░░░░░░░░░░░░░░   0%</span></span></code></pre></div><p>所以你现在<strong>没有落后，也没有做错</strong>。</p><p>我们只是刚进入最容易混乱的“解析层”。</p><hr><h1 id="二十四、接下来我们换一种学习方式" tabindex="-1">二十四、接下来我们换一种学习方式 <a class="header-anchor" href="#二十四、接下来我们换一种学习方式" aria-label="Permalink to &quot;二十四、接下来我们换一种学习方式&quot;">​</a></h1><p>我建议从现在开始，<strong>一次只攻一个模块</strong>。</p><p>不要再一次给你十几个类。</p><p>我们下一步只做：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Groupip[1]</span></span>
<span class="line"><span>     ↓</span></span>
<span class="line"><span>36 Byte</span></span>
<span class="line"><span>     ↓</span></span>
<span class="line"><span>BatteryData</span></span></code></pre></div><p>也就是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S7StringReader</span></span>
<span class="line"><span>S7IntReader</span></span>
<span class="line"><span>S7BitReader</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>BatteryDataParser</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>BatteryData</span></span></code></pre></div><p><strong>只把这一条链跑通。</strong></p><p>等你亲眼看到：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PLC里的：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5616.0</span></span>
<span class="line"><span>String[29]</span></span>
<span class="line"><span>5616.32</span></span>
<span class="line"><span>Int</span></span>
<span class="line"><span>5616.34.0</span></span>
<span class="line"><span>Bool</span></span></code></pre></div><p>变成 C#：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BatteryData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BarCode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    State </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Have </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ScanOk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ScanNg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你就会突然明白我们前面为什么要分这么多层。</p><p>然后我们再继续做：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Groupip[1]</span></span>
<span class="line"><span>Groupip[2]</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Groupip[10]</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>一次读取360 Byte</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>List&lt;BatteryData&gt;</span></span></code></pre></div><p><strong>这才是下一站。</strong></p><p>你现在先不用写任何新代码。先把上面这张架构图和每一层的职责吃透。我们后面的实操就严格按照这棵树往下走，不再让你在多个层之间来回跳。</p>`,284)])])}const k=a(i,[["render",t]]);export{g as __pageData,k as default};
