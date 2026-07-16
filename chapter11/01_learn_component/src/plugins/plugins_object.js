export default{
    //必须包含一个install函数
    install(app){
        // 插件的作用是为App实例添加一个全局属性$name
        app.config.globalProperties.$name = "coderwhy"
    }
}