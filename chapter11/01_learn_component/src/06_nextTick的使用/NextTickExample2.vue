<template>
    <div class="app" style="border: 1px solid #ddd;margin: 4px;">
        <div>计数器:{{ counter }}</div>
        <button @click="increment">+1</button>
        <h4 style="width: 80px;" ref="titleRef">{{ message }}</h4>
        <button @click="addMessageContent">添加内容</button>
    </div>
</template>
<script>
import { ref, onUpdated, nextTick } from "vue";
export default {
    setup(props, context) {
        const message = ref("");
        const titleRef = ref(null);
        const counter = ref(0);
        const addMessageContent = () => {
            //触发更新h4元素内容
            message.value += "更新DOM"
        }
        //触发更新div元素内容
        const increment = () => {
            counter.value++
        }
        // onUpdated生命周期函数。凡是DOM更新，都会被回调
        onUpdated(() => console.log('获取到h4元素的高度:', titleRef.value.offsetHeight));
        return {
            message,
            titleRef,
            addMessageContent,
            increment,
            counter
        }
    }
}
</script>