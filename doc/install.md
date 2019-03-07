
# 安装

- 安装 node-v6.9.5-x64.msi
- 安装 VSCodeSetup-ia32-1.13.1.exe
- 在html目录下解压 node_modules.zip
- 在DOS窗口html目录下，执行 npm version 验证开发环境安装成功
- npm run build  从源码构建运行代码
- 浏览器加载 MainPageTest.html 调试代码

## 开发

- 在 VSCode 中打开文件夹 html，加载项目目录
- 为了方便编辑vue文件，在vscode中安装一个插件
  https://marketplace.visualstudio.com/items?itemName=octref.vetur
- npm run build 把src目录源文件构建到 js/bundle.js
- npm run watch 采用增量方式构建