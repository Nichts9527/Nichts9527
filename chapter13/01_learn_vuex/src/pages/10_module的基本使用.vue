<template>
    <div>
        <h4>root state 根模块的状态：{{ $store.state.counter }}</h4>
        <h4>home state 子模块的状态：{{ $store.state.home.homeCounter }}</h4>
        <h4>user state 子模块的状态：{{ $store.state.user.userCounter }}</h4>
    </div>
</template>
<script>
export default {}
</script>