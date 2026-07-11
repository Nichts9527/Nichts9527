<template>
    <div>
        <input type="text" v-model="keyword">
        <transition-group tag="ul" name="why" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <!-- 每个li绑定了data-index属性，该值用于计算当前li动画的延时实现动画交替结果 -->
            <li v-for="(item, index) in showNames" :key="item" :data_index="index">{{ item }}</li>
        </transition-group>
    </div>
</template>
<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            names: ['abc', 'cba', 'nba', 'why', 'lilei', 'hmm', 'kobe', 'james'],
            keyword: ""
        }
    },
    methods: {
        beforeEnter(el) {
            // el是将要添加到ul中的li元素。注意：添加n个li元素会回调n次
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done) {
            // el是将要添加到ul中的li元素。注意：添加n个li元素会回调n次
            gsap.to(el, {
                // to函数为el元素的opacity和height这两个CSS属性实现动画
                opacity: 1,
                height: "1.5em",
                // el.dataset.index是获取li元素上data-index绑定的属性的值
                delay: el.dataset.index * 0.5,
                onComplete: done
            })
        },
        leave(el, done) {
            //el是将要从ul中移除的li元素。注意：移除n个li元素会回调n次
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index,
                onComplete: done
            })
        }
    },
    computed: {
        showNames() {
            return this.names.filter(item => item.indexOf(this.keyword) != -1)
        }
    },
}
</script>
<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}
</style>