<template>
    <div style="display: flex; flex-direction: column; align-items: start">
      <label for="name">{{ title }}</label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useMainStore } from "../store/mainStore";
import { storeToRefs } from "pinia";

defineProps({
  title: String,
});
const store = useMainStore();
const {name} = storeToRefs(store);
</script>

<style scoped></style>
