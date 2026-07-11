<template>
    <div class="hy-multiple-input">
        HyMultipleInput组件
        <input type="text" :value="modelValue" @input="input1Change">
        <input type="text" :value="title" @input="input2Change">
    </div>
</template>
<script>
export default {
    props: {
        modelValue: String,//默认v-model绑定的属性
        title: String//指定v-model绑定的属性
    },
    emits: ["update:modelVlaue", "update:title"],
    methods: {
        input1Change(event) {
            this.$emit("unpdate:modelValue", event.target.value)//默认触发的事件
        },
        input2Change(event) {
            this.$emit("update:title", event.target.value)//指定触发的事件
        }
    }
}
</script>