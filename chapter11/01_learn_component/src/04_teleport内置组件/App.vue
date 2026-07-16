<template>
    <div class="app" style="border: 1px solid #ddd;margin: 4px;">
        App组件
        <teleport to="body">
            <h4>h4挂载到body上，而不是id=app上</h4>
            <hello-world></hello-world>
        </teleport>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    components: {
        HelloWorld
    }
}
</script>