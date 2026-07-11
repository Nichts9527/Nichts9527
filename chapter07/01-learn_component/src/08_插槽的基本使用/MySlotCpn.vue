<template>
    <div class="my-slot-cpn">
        <div class="header">header</div>
        <!-- 中间显示的内容用slot占位，因为内容不确定 -->
        <slot>插槽的默认内容，只在没有提供插入的内容时，才会显示</slot>
        <div class="fotter">fotter</div>
    </div>
</template>
<script>
export default {}
</script>