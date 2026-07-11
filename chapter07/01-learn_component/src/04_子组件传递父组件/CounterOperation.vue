<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <input type="text" name="" id="" v-model.number="num">
        <button @click="incrementN">+n</button>
    </div>
</template>
<script>
export default {
    // 数组写法
    // emits: ["add", "sub", "addN"],//定义该组件可以向父组件触发的add、sub和addN事件
    // 对象写法，目的是进行参数的验证
    emits: {
        add: null,//定义该组件可以向其父组件触发的add事件
        sub: null,
        addN: (num, name, age) => {
            if (num > 10) {
                // 如果num大于10，则验证通过
                return true
            }
            // 如果num小于等于10，则返回false。控制台会出现参数验证不通过的警告，但不影响程序的运行
            return false;
        }
    },
    data() {
        return {
            num: 0//存储输入的值
        }
    },
    methods: {
        increment() {
            this.$emit("add");//触发自定义add事件，$emit可以接收多个参数，其中第一个参数是事件名称
        },
        decrement() {
            this.$emit("sub");//触发自定义sub事件
        },
        incrementN() {
            // 触发addN事件，并传递num、name、age三个参数给父组件
            this.$emit("addN", this.num, "why", 18);
        }
    }
}
</script>