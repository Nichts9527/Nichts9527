<!-- ShowdMessage.vue作为子组件 -->
<template>
    <div class="show-message">
        <h4>{{ title }}</h4>
        <div>{{ content }}</div>
    </div>
</template>
<script>
export default {
    // 数组形式
    // props: ["title", "content"]
    // 对象形式
    props: {
        title:String,//定义title属性为String类型（这里是简写，下面content属性是完整写法）
        content:{
            type:String,//定义参数类型为string类型
            required:true,//父组件使用该组件时必须传递该参数，否则控制台会出现警告
            default:"我是内容的默认值"//如果父组件使用该组件时没有传递content参数，则使用默认值
        }
    }
}
</script>