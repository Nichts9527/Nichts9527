<template>
    <div style="border: 1px solid #ddd;">
        App组件
        <!-- <DefaultImp></DefaultImp> -->
        <!-- <CustomLocalDirective></CustomLocalDirective> -->
        <DirectiveLifeCycle></DirectiveLifeCycle>
    </div>
</template>
<script>
import CustomLocalDirective from './CustomLocalDirective.vue';
import DefaultImp from './DefaultImp.vue';
import DirectiveLifeCycle from './DirectiveLifeCycle.vue';
export default {
    components: {
        DefaultImp,
        CustomLocalDirective,
        DirectiveLifeCycle
    }
}
</script>