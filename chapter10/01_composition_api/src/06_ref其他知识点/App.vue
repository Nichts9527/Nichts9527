<template>
    <div class="app" style="border: 1px solid #ddd;margin: 4px;">
        App组件
        <!-- <ToRefsAPI></ToRefsAPI> -->
         <CustomRefAPI></CustomRefAPI>
    </div>
</template>
<script>
import CustomRefAPI from './hooks/CustomRefAPI.vue';
import ToRefsAPI from './ToRefsAPI.vue';

export default {
    components: {
        ToRefsAPI,
        CustomRefAPI
    }
}
</script>