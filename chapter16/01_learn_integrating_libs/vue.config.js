const { defineConfig } = require('@vue/cli-service')
// 按需自动导入组件的插件
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 为webpack添加两个插件
    plugins: [
      // AutoImport({
      //   resolvers: [ElementPlusResolver()]
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()]
      // })

      //自动导入样式 
      require('unplugin-element-plus/webpack')({})
    ]
  }
})
