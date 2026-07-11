<template>
    <div style="border: 1px solid #ddd;margin: 4px;">
        App组件
        <RenderExample></RenderExample>
        <!-- <RenderCounter></RenderCounter> -->
        <!-- <RenderSetupCounter></RenderSetupCounter> -->
        <RenderSlot></RenderSlot>
    </div>
</template>

<script>
import RenderCounter from './RenderCounter.vue';
import RenderExample from './RenderExample.vue';
import RenderSetupCounter from './RenderSetupCounter.vue';
import RenderSlot from './RenderSlot.vue';

export default {
    components: {
        RenderExample,
        RenderCounter,
        RenderSetupCounter,
        RenderSlot
    }
}
</script>