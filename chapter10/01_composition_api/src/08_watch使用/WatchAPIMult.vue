<template>
    <div>
        <h4>{{ info.name }} - {{ name }}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>
<script>
import { ref, reactive, watch } from "vue"
export default {
    setup(props, context) {
        // 定义响应式对象
        const info = reactive({ name: "coder", age: 18 });
        const name = ref("why");
        const age = ref(20);
        // 监听多个数据源。参数一是一个数组：数组中可以有getter函数，以及ref或reactive函数返回的响应式对象
        watch([() => ({ ...info }), name, age], ([newInfo, newName, newAge], [oldInfo, oldName, oldAge]) => {
            console.log(newInfo, newName, newAge);
            console.log(oldInfo, oldName, oldAge);
        })
        const changeData = () => {
            info.name = "Kobe";
            name.value = "jack";
        }
        return {
            info,
            name,
            age,
            changeData
        }
    }
}
</script>