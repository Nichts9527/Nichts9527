<template>
    <div class="ref-api-other" style="border: 1px solid #ddd;margin: 10px;">
        RefAPIOther组件（演示ref的浅层解包）
        <h4>当前计数：{{ counter }}</h4>
        <!-- info中的ref对象可以自动解包 -->
        <h2>当前计数：{{ info.counter }}</h2>
        <!-- reactiveInfo中的ref对象可以自动解包 -->
        <h2>当前计数：{{ reactiveInfo.counter }}</h2>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
// 导入响应式API
import { ref } from 'vue';
import { reactive } from 'vue';
export default {
    setup(props, context) {
        let counter = ref(100);//定义响应式数据
        const info = {
            // 普通对象包含ref响应式对象
            counter
        }
        const reactiveInfo = reactive({
            // reactiveInfo响应式对象包含ref响应式对象
            counter
        })
        const increment = () => {
            counter.value++;
            console.log(counter.value);
        }
        return {
            counter,
            increment,
            info,
            reactiveInfo
        }
    }
}
</script>