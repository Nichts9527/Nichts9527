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
        // home模块:state、commit、dispatch；根模块:rootState、rootGetters
        homeCountAddRootCount(state, getters, rootState, rootGetters) {
            return state.homeCounter + rootState.counter
        }
    },
    mutations: {
        // home模块:state、commit、dispatch；根模块:rootState、rootGetters
        increment(state, commit, dispatch, getters, rootState, rootGetters) {
            commit("increment")//提交当前模块的mutations
            commit('increment',null,{root:true})//提交到根模块的mutations中
            dispatch("incrementAction",null,{root:true})//分发到根模块的action中
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