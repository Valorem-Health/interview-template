
<template>
  <div>
  <router-view
        class="mx-auto"
        v-slot="{ Component, route }"
        :title="currentPage?.title ?? 
        'Loading...'"
      >
        <component :is="Component" :route="route" />
      </router-view>
  <button style="margin: 1em;" @click="goNext()">Next</button>
  <div style="position: absolute; bottom: 0; right: 0; padding: 3em;">
    {{ currentPos+1 }} / {{ survey.length }}
  </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { survey } from './survey/survey.js'

const currentPos = ref(0)
const router = useRouter()

onMounted(() => {
  router.push({name: survey[0].view})
})

const currentPage = computed(() => {
  return survey[currentPos.value]
})


const goNext = () => {
  if (currentPos.value < survey.length - 1) {
    currentPos.value++
  }
  router.push({name: survey[currentPos.value].view})
}
</script>

<style scoped>
</style>
