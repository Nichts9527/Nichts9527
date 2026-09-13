<template>
    <div>
        <h4>Setup:{{ $store.state.counter }}</h4>
        <h4>Setup:{{ counter }}</h4>
        <h4>Name:{{ name }}</h4>
        <h4>Age:{{ age }}</h4>
    </div>
</template>
<script>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue';
export default {
    setup() { 
        const store = useStore();
        const storeStateFns = mapState(["counter","name","age"])
        const storeState = {}
        Object.keys(storeStateFns).forEach(elementfnKey => {
            const fn = storeStateFns[fnKey].bind({$store:store})//绑定this为{$store:store}
            storeState[fnKey] = computed(fn)//将普通函数转换为计算属性函数
        });
        // // 在computed中通过store读取状态
        // // const counter = computed(()=>store.state.counter);
        // // const name = computed(()=>store.state.name);
        // // const age = computed(()=>store.state.age);
        // // return{
        //     counter,
        //     name,
        //     age
        // }
        return{
            ...storeState
        }
    }
}
</script>