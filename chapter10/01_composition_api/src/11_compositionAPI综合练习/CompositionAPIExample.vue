<template>
    <div>
        <!-- 计数器案例 -->
        <div>当前计数：{{ counter }}</div>
        <div>当前计数*2:{{ doubleCounter }}</div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>


        <!-- 显示页面滚动位置 -->
        <p style="width: 3000px;height: 5000px;">
            width:3000px height:5000px的标签，模拟页面滚动
        </p>
        <div style="position: fixed;top: 20px;right: 20px;">
            <div>scrollX:{{ scrollX }}</div>
            <div>scrollY:{{ scrollY }}</div>
        </div>

    </div>
</template>

<script>
import { ref, computed } from "vue";
import useCounter from './hooks/useCounter';
import useTitle from "./hooks/useTitle";
import useScrollPosition from "./hooks/useScrollPosition";
export default {
    setup(props, context) {
        // 计数器案例的逻辑代码
        // const counter = ref(100);
        // const doubleCounter = computed(() => counter.value * 2);
        // const increment = () => {
        //     counter.value++;
        // };
        // const decrement = () => {
        //     counter.value--;
        // };
        // return {
        //     counter,
        //     doubleCounter,
        //     increment,
        //     decrement
        // }


        // 使用自定义hooks函数
        const { counter, doubleCounter, increment, decrement } = useCounter();
        // return {
        //     counter,
        //     doubleCounter,
        //     increment,
        //     decrement
        // }

        // 修改网页标题
        const titleRef = useTitle("coder");
        setTimeout(() => {
            // 过3秒后修改titleRef的值，被useTitle函数的watch监听到，就会修改标题
            titleRef.value = "why";
        }, 3000)
        // document.title = titleRef.value;//更新网页标题为coder
        // return {
        //     titleRef,
        //     counter,
        //     doubleCounter,
        //     increment,
        //     decrement
        // }



        // // 监听页面滚动
        // const scrollX = ref(0);
        // const scrollY = ref(0);
        // document.addEventListener("scroll", () => {
        //     scrollX.value = window.scrollX;
        //     scrollY.value = window.scrollY;
        // });
        // return {
        //     counter,
        //     doubleCounter,
        //     increment,
        //     decrement,
        //     scrollX,
        //     scrollY
        // }


        // 监听页面滚动位置（可直接解构，因为Hook函数返回的对象属性是ref对象）
        const { scrollX, scrollY } = useScrollPosition();
        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            scrollX,
            scrollY
        }
    }
}
</script>