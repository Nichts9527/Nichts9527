<template>
    <div class="app">
        <!-- 在h4上通过ref注册一个模版引用 -->
        <h4 ref="title">App中的h4元素</h4>
        <!-- 在<nav-bar>上通过ref注册一个模版引用 -->
        <nav-bar ref="navBar"></nav-bar>
        <button @click="btnClick">获取h4元素对象和Navbar组件实例</button>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            names: ["coder", "why"]
        }
    },
    methods: {
        btnClick() {
            // 通过this.$refs访问已注册的模版引用（title）
            console.log('h4元素对象=', this.$refs.title);
            //访问已注册的模版引用（navBar）
            console.log('NavBar组件实例', this.$refs.navBar);
            console.log('访问NavBar组件实例的message变量：', this.$refs.navBar.message);
            // 调用NavBar组件实例的sayHello()方法
            this.$refs.navBar.sayHello()
            // 获取NavBar组件实例的DOM元素对象
            console.log(this.$refs.navBar.$el);
        }
    }
}
</script>