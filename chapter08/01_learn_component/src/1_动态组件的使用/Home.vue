<template>
    <div @click="divClick">Home组件:{{ name }} - {{ age }}</div>
</template>
<script>
export default {
    name: "home",//组件名称
    props: {
        name: {
            // 动态组件传递过来的name属性
            type: String,
            default: ""
        },
        age: {
            type: Number,
            default: 0
        }
    },
    emits: ["pageClick"],//该组件触发的pageClick事件
    methods: {
        divClick() {
            this.$emit("pageClick", "Home组件触发的单击");
        }
    }
}
</script>