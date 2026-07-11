<!-- App.vue作为根组件 -->
<template>
    <div class="app">
        <!-- 使用注册的组件 -->
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>
<script>
// 分别导入Header、Main、Footer组件
import Header from './Header.vue';
// 导入文件可以省略拓展名，但不建议省略。省略拓展名后，在模版中使用该组件时，将不会有智能提示
import Main from './Main.vue';
import Footer from './Footer.vue';
export default {
    components: {
        // 注册局部组件
        Header,
        Main,
        Footer
    }
}
</script>