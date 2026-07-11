<template>
    <div>
        <button v-for="item in tabs" :key="item" @click="itemClick(item)" :class="{ active: currentTab === item }">{{
            item }}</button>
        <!-- 根据if的条件，显示不同的组件 -->
        <!-- <template v-if="currentTab === 'home'">
        <home></home>
    </template>
<template v-else-if="currentTab === 'about'">
        <about></about>
    </template>
<template v-else>
        <Category></Category>
    </template> -->



        <!-- 动态组件的实现（is属性是动态绑定组件的名称。例如is="home",代表绑定<home/>组件） -->
        <!-- 向<home>/<About>/<category>三个组件传递name和age属性，以及监听pageClick事件 -->
        <!-- 用keep-alive组件保留动态组件的状态，同时会保留其对应的子孙组件的状态 -->

        <!-- <keep-alive include="home,about">
            <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
        </keep-alive> -->

        <!-- <keep-alive :include="/home|about">
            <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
        </keep-alive> -->

        <keep-alive :include="['home', 'about']">
            <component :is="currentTab" name="coderwhy" :age="18" @pageClick="pageClick"></component>
        </keep-alive>
    </div>
</template>
<script>
import About from './About.vue';
import Category from './Category.vue';
import Home from './Home.vue';

export default {
    components: {
        Home,
        About,
        Category
    },
    data() {
        return {
            tabs: ["home", "about", "category"],//button数组
            currentTab: "home",//记录当前选中哪个button，默认选中home
        }
    },
    methods: {
        itemClick(item) {
            this.currentTab = item;
        },
        pageClick() {
            console.log(value);
        }
    }
}
</script>