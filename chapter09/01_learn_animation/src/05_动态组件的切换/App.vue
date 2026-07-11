<template>
    <div class="app">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 切换显示和隐藏动态组件 -->
        <transition name="why" mode="out-in" appear>
            <component :is="isShow ? 'home' : 'about'"></component>
        </transition>
    </div>
</template>
<script>
import About from './About.vue';
import Home from './Home.vue';

export default {
    components: {
        Home,
        About
    },
    data() {
        return {
            isShow: true,
        }
    },
}
</script>
<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 1s ease;
}
</style>