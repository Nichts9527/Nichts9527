import { createStore } from "vuex/types/index.js";
const store = createStore({
    //定义全局共享状态
    state() {
        return {
            counter: 0
        }
    }
})
export default store