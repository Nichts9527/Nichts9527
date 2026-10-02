<template>
    <div>
        <h4>home子模块homeCounter的状态：{{ homeCounter }}</h4>
        <h4>home子模块doubleHomeCount：{{ doubleHomeCount }}</h4>
        <button @click="homeIncrementCommit">+1</button>
        <button @click="incrementAction">+1</button>
    </div>
</template>
<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { computed } from 'vue';
import { useMapper } from "../hooks/index";
import { createNamespacedHelpers } from 'vuex';
// 方式三：借助辅助函数统一添加模块名前缀
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")
export default {
    // 方式一：映射时指定模块名前缀
    // computed: {
    //     ...mapState({
    //         homeCounter: state => state.home.homeCounter
    //     }),
    //     ...mapGetters({
    //         doubleHomeCount: "home/doubleHomeCount"
    //     })
    // },
    // methods: {
    //     ...mapMutations({
    //         homeIncrementCommit: "home/increment"
    //     }),
    //     ...mapActions({
    //         incrementAction: "home/incrementAction"
    //     })
    // }

    // 方式二：辅助函数第一个参数作为模块名前缀
    // computed: {
    //     ...mapState('home', ['homeCounter']),
    //     ...mapGetters('home', ['doubleHomeCount'])
    // },
    // methods: {
    //     ...mapMutations("home", {
    //         homeIncrementCommit: 'imcrement'
    //     }),
    //     ...mapActions('home', ['incrementAction'])
    // }

    // 方式三：借助辅助函数统一添加模块名前缀
    // computed: {
    //     ...mapState(['homeCounter']),
    //     ...mapGetters(['doubleHomeCount'])
    // },
    // methods: {
    //     ...mapMutations({
    //         homeIncrementCommit: 'imcrement'
    //     }),
    //     ...mapActions(['incrementAction'])
    // }

    // 方式四：在setup中统一添加模块名前缀(推荐)
    setup() {
        const stateFunc = useMapper(mapState, ['homeCounter'])//使用自定义hook
        const gettersFunc = useMapper(mapGetters, ["doubleHomeCount"])
        const mutationFuncs = mapMutations({
            homeIncrementCommit: 'increment'
        })
        const actionsFuncs = mapActions(['incrementAction'])
        return { ...stateFunc, ...gettersFunc, ...mutationFuncs, ...actionsFuncs }
    }
}
</script>