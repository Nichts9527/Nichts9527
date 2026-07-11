<template>
    <div>
        <h4>当前计数：{{ counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>
<!-- script setup语法糖 -->
<script setup>
// counter,increment是在顶层定义的，能在模版中直接使用
import { ref } from "vue";
const counter = ref(0);
const increment = () => {
    return counter.value++;
};
</script>