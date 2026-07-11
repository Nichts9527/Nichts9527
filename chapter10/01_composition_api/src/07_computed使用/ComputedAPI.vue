<template>
    <div>
        <!-- 使用fullName计算属性 -->
        <h4>{{ fullName }}</h4>
        <button @click="changeName">修改firstName</button>
    </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
    setup(props, context) {
        const firstName = ref("Kobe");
        const lastName = ref("Bryant");
        // 方式一：传入一个getter函数。computed返回值是一个ref对象
        // const fullName = computed(() => firstName.value + " " + lastName.value);

        // 方式二：传入一个对象，对象包含get和set方法
        const fullName = computed({
            get: () => firstName.value + " " + lastName.value,//getter方法
            // setter方法
            set(newValue) {
                const names = newValue.split(" ");
                firstName.value = names[0];
                lastName.value = names[1];
            }
        });
        const changeName = () => {
            // 修改firstName，计算属性会重新计算
            // firstName.value = "James"

            //修改fullName属性
            fullName.value = "James Bryant";
        }
        return {
            changeName,
            fullName
        }
    }
}
</script>