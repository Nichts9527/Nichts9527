import { createStore } from "vuex";
import { INCREMENT_N } from "./mutation_types";
import user from "./modules/user";
import home from "./modules/home";
const store = createStore({
    //定义全局共享状态
    state() {
        return {
            counter: 0,
            name: "why",
            age: 18,
            books: [
                // 购物车书籍列表
                { name: "Vue.js", count: 10, price: 10 },
                { name: "React", count: 5, price: 20 },
                { name: 'webpack', count: 4, price: 25 }
            ],
            discount: 0.9,//书籍打9折
            uuid: null
        }
    },
    // getter的基本使用
    getters: {
        // 参数一：state对象，参数二：getters对象
        totalPrice(state, getters) {
            // 计算购买的书籍总价
            let totalPrice = 0;
            for (const book of state.books) {
                totalPrice += book.count * book.price
            }
            return totalPrice * getters.currentDiscount//通过getters访问当前的折扣
        },
        currentDiscount(state) {
            //获取当前的折扣
            return state.discount
        },
        totalPriceByName(state) {
            return (bookName) => {
                // 返回一个函数，该函数接收一个bookName参数
                let totalPrice = 0;
                for (const book of state.books) {
                    if (bookName === book.name) {
                        // 只计算当前那本书的总价
                        totalPrice += book.count * book.price
                    }
                }
            }
        }
    },
    //mutations的基本使用
    mutations: {
        increment(state) {
            // 定义increment函数，该函数可获取state()返回的对象
            state.counter++//通过state对象修改全局counter
        },
        decrement(state) {
            state.counter--
        },
        [INCREMENT_N](state, payload) {
            state.counter += payload.num//修改counter的值
        },
        addUUID(state, payload) {
            state.uuid = payload//存储网络获取的uuid
        }
    },
    // actions的基本使用
    actions: {
        incrementAction(context) {
            // setTimeout模拟异步
            setTimeout(() => {
                context.commit('increment')//提交一个type为increment的mutation
            })
        },
        decrementAction(context) {
            // ES6解构context对象
            let { commit, dispatch, state, rootState, getters, rootGetters } = context
            commit('decrement')//提交一个type为decrement的mutation
        },
        // payload接收dispatch传递过来的参数
        incrementNAction(context, payload) {
            context.commit(INCREMENT_N, payload)//payload值为{num:10},提交给mutation
        },
        // 编写一个获取uuid的action
        getUUIDAction({ commit }) {
            // 直接返回promise对象，作为dispatch函数的返回值
            return new Promise((resolve, reject) => {
                // 发起网络请求，该URL是一个免费的uuid的接口
                fetch('https://httpbin.org/uuid')
                    // 将res解析为JSON格式的promise对象
                    .then(res => res.json())
                    .then((data) => {
                        // 将请求获取的数据存到Vuex中
                        commit("addUUID", data.uuid)
                        // 调用resolve完成异步操作
                        resolve(data)
                    }).catch((err) => {
                        reject(err)//错误处理
                    })
            })
        }
    },
    // 引入home和user两个子模块
    modules: {
        home: home,//key指定模块的名称，value指定引入的模块
        user//ES6简写语法，相当于user:user
    }
})
export default store