<template>
  <div>当前计数：{{ counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    console.log('useStore 返回:', store)

    const counter = computed(() => store.state.counter)
    const increment = () => store.commit('increment')
    const decrement = () => store.commit('decrement')

    return { counter, increment, decrement }
  }
}
</script>