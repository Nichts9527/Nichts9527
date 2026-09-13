<template>
    <div>
        <h4>当前计数：{{ $store.state.counter }}</h4>
        <!-- 单击“+1”按钮。会回调下面映射好的increment函数 -->
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <button @click="incrementN({ num: 20 })">+20</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { INCREMENT_N } from '@/store/mutation_types';
export default {
    method: {
        // 将this.increment()映射为this.$store.commit("increment")
        ...mapMutations(["increment"]),//数组语法，解构出一个个方法
        // 将this.incrementN()映射为this.$store.commit(INCREMENT_N)
        ...mapMutations({
            // 对象语法
            incrementN: INCREMENT_N
        })
    },
    setup() {
        const storeMutations = mapMutations(["decrement"])//setup语法
        return { ...storeMutations }
    }
}
</script>