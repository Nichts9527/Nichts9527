<template>
    <div>
        <h4>{{ info.name }}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>
<script>
import { reactive, watch, ref } from 'vue';
export default {
    setup(props, context) {
        const info = reactive(
            {
                name: "coderwhy",
                age: 18
            }
        );
        const name = ref("coderwhy")
        // //传入一个getter函数，该函数引用响应式对象info
        // watch(() => info.name, (newValue, oldValue) => {
        //     // 监听info中name的变化
        //     console.log("newValue:", newValue, "oldValue:", oldValue);
        // })


        // 传入reactive函数返回的响应式对象
        // watch(info, (newValue, oldValue) => {
        //     console.log("newValue:", newValue, "oldValue:", oldValue);//值为响应式对象
        // })

        // watch监听ref对象
        watch(name, (newValue, oldValue) => {
            console.log("newValue:", newValue, "oldValue:", oldValue);//值为value本身
        })
        const changeData = () => {
            info.name = "Kobe";//改变info对象中的name
        }
        return {
            info,
            changeData,
            name
        }
    }
}
</script>