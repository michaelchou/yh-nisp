## 概念设计

- 名称：faceplate
- 充分利用现代浏览器技术制作富客户端交互子系统
- 支持B/S网页方式加载，也支持C/S模式下磁盘文件加载
- 界面端模块加载器兼打包处理，webpack v3
- 基于HTML5栅格布局，bootstrap v3
- 单页面应用（SPA）模式，通过页面锚点(页面内超级链接)加载及切换页面，自动局部刷新
- 界面组件化（Composable）构建
- 响应式系统（Reactive），支持数据绑定
- 统一界面定制开发，各运行平台适配使用

## 适配设计

- 通过浏览器控件URL，形如 index.html#pageId 加载页面
- 每个页面组件通过 platformAdapter.getData(names, function callback(name_values){}) 获取运行平台内部数据
- 页面通过 platformAdapter.setData(name_values) 给运行平台设置新数据
- 页面通过 platformAdapter.sendEvent(pageId, event) 发送界面事件给内部平台
- 接口中：pageId是页面标识，names是数据项名字列表，name_values是名字值对，event是界面事件；value值支持任意json数据
- 运行平台不再理解浏览器内界面相关信息，通过URL加载后，界面端获得控制权
- 按键通过系统键盘输入队列进入网页，faceplate承担输入有效性控制和格式化显示
