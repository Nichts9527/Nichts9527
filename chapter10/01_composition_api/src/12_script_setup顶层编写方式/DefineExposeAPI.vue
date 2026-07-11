<template>
    <div style="border: 1px solid #ddd;margin: 8px;">
        DefineExposeAPI组件
    </div>
</template>

<script setup>
import { ref } from 'vue';
const age = 18;//普通数据
const name = ref("coderwhy");//响应式数据
const showMessage = () => {
    console.log('showMessage方法');
};//定义方法
// 该组件需要暴露出去的属性和方法
defineExpose({ age, name, showMessage })
</script>