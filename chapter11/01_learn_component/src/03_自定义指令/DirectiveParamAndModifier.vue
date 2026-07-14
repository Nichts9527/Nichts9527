<template>
    <!-- 向指令传递参数、修饰符和值 -->
    <button v-why:info.aa.bb="{ name: 'coderwhy', age: 18 }">指令的参数和修饰符</button>
</template>
<script>
export default {
    directives:{
        why:{
            // 自定义v-why局部指令
            created(el,bingings,vnode,preVnode){
                console.log(bingings);//打印bingings参数
                
            }
        }
    }
}
</script>