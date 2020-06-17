// 项目配置
// 或者在package.json中的vue字段中配置
module.exports = {
  // VUE-CLI 3.3 起已弃用baseUrl，使用publicPath
  publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",

  // 运行build时生成的生产环境构建文件的目录，目标目录会在构建之前被清空（构建时传入 --no-clean 可关闭该行为）
  outputDir: "dist",

  // 放置生成的静态资源的目录，相对于outputDir
  assetsDir: "",

  // 生成index.html的输出路径
  indexPath: "app.html",

  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件

  devServer: {
    host: "sn3.sso.taihe.web",
    port: "8888",
    open: true,
    proxy: {
      "/sinan30": {
        target: "http://192.168.2.98:8083",
        changeOrigin: true,
      },
    },
  },
};
