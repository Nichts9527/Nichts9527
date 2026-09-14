<template>
    <div>
        <h4>当前计数：{{ $store.state.counter }}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <button @click="addTen">+10</button>
    </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
    methods: {
        increment() {
            // OtionsAPI语法
            this.$store.dispatch("incrementAction")//分发action
        }
    },
    setup() {
        // setup语法
        const store = useStore();
        const decrement = () => {
            store.dispatch("decrementAction")//分发action
        };
        const addTen = () => {
            // 分发actio，并传递对象参数
            store.dispatch("incrementNAction", { num: 10 })
        }
        return { decrement, addTen }
    }
}
</script>