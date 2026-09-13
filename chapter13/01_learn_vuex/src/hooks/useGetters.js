import { useStore, mapGetters } from "vuex";
import { computed } from "vue";
export function useGetters(mapper) {
    const store = useStore();
    const stateFns = mapGetters(mapper)//mapGetters辅助函数
    const state = {}
    Object.keys(stateFns).forEach(fnkey => {
        //将普通函数转换成计算属性函数，并绑定一个包含$store属性的对象
        state[fnkey] = computed(stateFns[fnkey].bind({ $store: store }))
    })
    return state
}