<template>
    <div>
        <h4>{{ info.name }}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>
<script>
import { ref, reactive, watch } from "vue"
export default {
    setup(props, cont) {
        // 定义响应式对象
        const info = reactive({
            name: "coderwhy",
            age: 18,
            friend: {
                name: "kobe"
            }
        });
        // 监听响应式对象
        watch(() => ({ ...info }), (newInfo, oldInfo) => {
            console.log(newInfo, oldInfo);
        }, {
            deep: true,
            immediate: true
        })
        const changeData = () => {
            info.friend.name = "james"
        }
        return {
            changeData,
            info
        }
    }
}
</script>