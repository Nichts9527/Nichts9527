<!-- App.vue作为根组件 -->
<template>
    <h4>App Title</h4>
    <hello-world></hello-world>
</template>
<script>
import HelloWorld from './HelloWorld.vue';

export default {
    components: {
        HelloWorld
    }
}
</script>
<style scoped>
h4 {
    text-decoration: underline;
}

/* 速度选择器：选中子组件class为msg的元素 */
:deep(.msg) {
    text-decoration: underline;
}
</style>