<template>
    <div>
        <!-- h4元素挂载完成后，会自动赋值到titleRef内部值中 -->
        <h4 ref="titleRef">哈哈哈</h4>
    </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
    setup(props, context) {
        // 定义一个titleRef对象，用于存储h4元素的DOM对象
        const titleRef = ref(null);
        // 监听titleRef的变化，即赋值操作
        watchEffect(() => {
            console.log(titleRef.value);//打印h4元素的DOM对象
        },
            {
                flush: "post"
            })
        return {
            titleRef//返回titleRef对象给template使用
        }
    }
}
</script>