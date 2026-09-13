<template>
    <div>
        <h4>当前计数：{{ $store.state.counter }}</h4>
        <button @click="$store.commit('increment')">+1</button>
        <button @click="$store.commit('decrement')">-1</button>
        <button @click="addTen">+10</button>
    </div>
</template>
<script>
import { INCREMENT_N } from '@/store/mutation_types';

export default {
    methods: {
        addTen() {
            // 向mutations中incrementN函数的paylo参数传递一个对象（也支持传递number类型）
            this.$store.commit(INCREMENT_N, { num: 10, name: "why", age: 18 })
        }
    }
}
</script>