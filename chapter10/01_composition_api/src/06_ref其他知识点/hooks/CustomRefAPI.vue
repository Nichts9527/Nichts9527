<template>
    <div>
        <input v-model="message"></input>
        <h4>{{ message }}</h4>
    </div>
</template>
<script>
// import {ref} from 'vue';
import useDebounceRef from './useDebounceRef';//导入自定义的ref函数
export default {
    setup(props, context) {
        // const message = ref("Hello World");//普通的响应式对象
        const message = useDebounceRef("Hello World");//带有防抖功能的响应式对象
        return {
            message
        }
    }
}
</script>