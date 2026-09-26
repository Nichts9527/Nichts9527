<template>
    <div>
        <!-- 访问子模块的state和getters（这次添加了模块的前缀） -->
        <h4>home子模块homeCounter的状态:{{ $store.state.home.homeCounter }}</h4>
        <h4>home子模块doubleHomeCounter:
            {{ $store.getters['home/doubleHomeCounter'] }}
        </h4>
        <h4>home子模块homeCounterAddRootCounter:
            {{ $store.getters['home/homeCounterAddRootCounter'] }}
        </h4>
        <button @click="incrementAction">+1</button>
    </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        const incrementAction = () => {
            store.dispatch('home/incrementAction')//只会触发home模块的incrementAction函数
        }
        return { incrementAction }
    }
}
</script>