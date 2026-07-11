<template>
    <div class="hy-input">
        HyInput组件：
        <!-- 支持 -->
        <!-- <input type="text" :value="modelValue" @input="inputClick"> -->
        <!-- 不支持 -->
        <!-- <input type="text" v-model="modelValue"> -->
        <!-- 支持 -->
        <input type="text" v-model="value">
    </div>
</template>
<script>
export default {
    props: {
        modelValue: String
    },
    emits: ["update:modelValue"],
    methods: {
        inputClick(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    },
    computed: {
        // 计算属性value
        value: {
            set(value) {
                this.$emit("unpdate:modelValue", value)
            },
            get() { 
                return this.modelValue;//getter方法
            }
        }
    }
}
</script>