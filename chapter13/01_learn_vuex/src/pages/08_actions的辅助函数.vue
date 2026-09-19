<template>
    <div>
        <h4>当前计数：{{ $store.state.counter }}</h4>
        <!-- 单击“+1”按钮会回调下面映射好的incrementAction函数 -->
        <button @click="incrementAction">+1</button>
        <button @click="decrement">-1</button>
        <button @click="addTen({ num: 20 })">+10</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // 将this.incrementAction()映射为this.$store.dispatch('incrementAction')
        ...mapActions(['incrementAction'])//OptionsAPI语法
    },
    setup() {
        // 将this.incrementAction()映射为this.$store.dispatch('incrementAction')
        const actionsFuncs = mapActions({
            //setup语法
            decrement: "decrementAction",
            addTen: 'incrementNAction'
        })
        return { ...actionsFuncs }
    }
}
</script>