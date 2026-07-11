<template>
    <div class="set-props">
        SetupProps组件
        <h4>{{ message }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    },
    // 参数一：props，父组件传递过来的属性
    setup(props) {
        console.log(props);
        console.log(props.message);
    }
}
</script>