<template>
    <div><button @click="increment">单击+1</button>{{ counter }}</div>
</template>
<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue';
export default {
    setup(props, context) {
        const counter = ref(0);
        const increment = () => counter.value++;
        // 生命周期钩子函数（同一个生命周期函数可以存在多次）
        onMounted(() => {
            console.log("App mounted1");
        })
        onMounted(() => {
            console.log("App mounted2");
        })
        onUpdated(() => {
            console.log("App onUpdated");
        })
        onUnmounted(() => {
            console.log("App onUnmounted");
        })
        return {
            counter,
            increment
        }
    }
}
</script>