const homeModule = {
    namespaced: true,//为home模块添加命名空间，其他代码和user模块一样
    state() {
        // home模块的state
        return {
            // 在home模块中定义一个homeCounter全局变量
            homeCounter: 100
        }
    },
    getters: {
        doubleHomeCount(state) {
            return state.homeCounter * 2
        },
        homeCounterAddRootCount(state, getter, rootState) {
            return state.homeCounter + rootState.counter
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        }
    },
    actions: {
        incrementAction({ state, commit, rootState }) {
            commit('increment')
        }
    }
}
export default homeModule