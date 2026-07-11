<template>
    <div style="border: 1px solid #ddd;margin: 8px;">
        <div>DefinePropsEmitAPI组件</div>
        <p>{{ message }}</p>
        <button @click="emitEvent">触发emit事件</button>
    </div>
</template>

<script setup>
// 定义props属性，类似于Options API的props选项
const props = defineProps({
    message: {
        type: String,
        default: "默认的message"
    }
})

// 注册需要触发的emit事件
const emit = defineEmits(["increment"]);
const emitEvent = () => {
    console.log('子组件拿到父组件传递进来的message:' + props.message);
    emit('increment', 1)//触发increment事件，并传递参数1

};
</script>