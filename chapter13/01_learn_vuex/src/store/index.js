import { createStore } from "vuex";
import { INCREMENT_N } from "./mutation_types";
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
            discount: 0.9//书籍打9折
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
        }
    }
})
export default store