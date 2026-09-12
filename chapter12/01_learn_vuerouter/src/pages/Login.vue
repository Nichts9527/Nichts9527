<template>
    <div class="login">
        <button @click="loginClick">登录</button>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const loginClick = () => {
            // 模拟登录功能
            window.sessionStorage.setItem("token", "why")//存储登录信息
            router.push("/home");//跳转到登录页面
        };
        return {
            loginClick
        }
    }
}
</script>