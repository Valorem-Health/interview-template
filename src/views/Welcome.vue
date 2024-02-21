<template>
  <div>
    <h1>{{title}}</h1>
    <p>Click the "Next" button to begin</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});

</script>

<style scoped>

</style>