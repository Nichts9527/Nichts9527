import { createStore } from "vuex";
const store = createStore({
    //定义全局共享状态
    state() {
        return {
            counter: 0,
            name:"why",
            age:18
        }
    },
    //在mutations中修改全局状态
    mutations: {
        //定义increment函数，参数state是state()函数返回的对象
        increment(state) {
            state.counter++//修改全局的counter
        },
        decrement(state) {
            state.counter--
        }
    }
})
export default store