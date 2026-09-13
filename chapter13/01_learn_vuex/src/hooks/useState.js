import { computed } from "vue";
import { mapState } from 'vuex';
import { useStore } from "vuex";
// 自定义一个useState Hook函数
export function useState(mapper) {
    // 获取store对象
    const store = useStore()
    // 获取映射后的对象
    const storeStateFns = mapState(mapper)
    // 将普通函数转换成计算属性函数
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnkey=>{
        const fn=storeStateFns[fnkey].bind({$store:store})
        storeState[fnkey]=computed(fn)
    })
    return{
        storeState
    }
}