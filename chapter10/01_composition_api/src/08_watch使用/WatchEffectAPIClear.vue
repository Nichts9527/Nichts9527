<template>
    <div>
        <h4>{{ age }}</h4>
        <button @click="changeAge">修改age</button>
    </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
    setup(props, context) {
        const age = ref(18);
        // watchEffect会自动收集响应式依赖，默认先执行一次，但是获取不到新值和旧值
        watchEffect((onInvalidate) => {
            const timer = setTimeout(() => {
                console.log("模拟网络请求，网络请求成功");

            }, 2000)
            onInvalidate(() => {
                // 监听到age变化或监听停止时，会执行这里的代码
                clearTimeout(timer);//清除上一次的定时器
                console.log("onInvalidate");
            })
            console.log("age:", age.value);
        });
        const changeAge = () => {
            age.value++;
        }
        return {
            age,
            changeAge
        }
    }
}
</script>