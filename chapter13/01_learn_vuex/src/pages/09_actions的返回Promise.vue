<template>
    <div>
        <h4>uuid:{{ $store.state.uuid }}</h4>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        onMounted(() => {
            // 分发一个getUUIDAction，并返回一个Promise对象
            const promise = store.dispatch("getUUIDAction")
            promise.then((res) => {
                // .then函数处理异步请求成功的结果
                console.log(res);
            })
        });
        return { }
    }
}
</script>