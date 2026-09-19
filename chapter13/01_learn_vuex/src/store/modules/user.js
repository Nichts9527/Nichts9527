const userModule = {
    state() {
        // user模块的state
        return {
            // 在user模块中定义一个userCounter全局变量
            userCounter: 1000
        }
    },
    getters: {
        // user模块的mutation和getter函数接收的第一个参数是局部状态(state)
        doubleUserCount(state) {
            return state.userCounter * 2
        },
        // user模块的getter函数，根节点状态（rootState）作为第三个参数暴露出来
        userCounterAddRootCount(state, getters, rootState) {
            return state.userCounter + rootState.counter
        }
    },
    mutations: {
        increment(state) {
            // state是user模块的局部状态
            state.userCounter++
        }
    },
    actions: {
        // 在action函数中，局部状态通过context.state暴露出来，根节点状态通过context.rootState暴露出来
        incrementAction({ state, commit, rootState }) {
            commit('increment')
        }
    }
}
export default userModule