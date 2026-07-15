<template>
    <div style="border: 1px solid #ddd;">
        App组件
        <!-- <DefaultImp></DefaultImp> -->
        <!-- <CustomLocalDirective></CustomLocalDirective> -->
        <!-- <DirectiveLifeCycle></DirectiveLifeCycle> -->
        <!-- <DirectiveParamAndModifier></DirectiveParamAndModifier> -->
        <h4 v-format-time="'YYYY/MM/DDD'">{{ timestamp }}</h4>
    </div>
</template>
<script setup>
// import CustomLocalDirective from './CustomLocalDirective.vue';
// import DefaultImp from './DefaultImp.vue';
// import DirectiveLifeCycle from './DirectiveLifeCycle.vue';
// import DirectiveParamAndModifier from './DirectiveParamAndModifier.vue';
// export default {
//     components: {
//         DefaultImp,
//         CustomLocalDirective,
//         DirectiveLifeCycle,
//         DirectiveParamAndModifier
//     }
// }


const timestamp = 1645710167;
</script>