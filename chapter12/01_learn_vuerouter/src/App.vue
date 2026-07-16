<template>
  <div class="nav">
    <!-- 切换路由，即切换页面 -->
    <router-link class="tab" to="/home">首页</router-link>
    <router-link class="tab" to="/about">关于</router-link>
  </div>
  <!-- 路由组件的占位 -->
  <router-view></router-view>
</template>
<style>
.nav {
  margin: 20px 0px;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}
</style>
