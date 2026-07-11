<template>
    <div style="border: 1px solid #ddd;">
        App组件
        <!-- <DefaultImp></DefaultImp> -->
        <CustomLocalDirective></CustomLocalDirective>
    </div>
</template>
<script>
import CustomLocalDirective from './CustomLocalDirective.vue';
import DefaultImp from './DefaultImp.vue';

export default {
    components: {
        DefaultImp,
        CustomLocalDirective
    }
}
</script>