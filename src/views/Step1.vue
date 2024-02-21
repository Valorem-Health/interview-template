<template>
  <div>
    <div style="display: flex; flex-direction: column; align-items: start">
    <div>
      <label for="color">{{ title }}</label>
    </div>
    <div>
      <input type="radio" id="blue" name="color" value="blue" v-model="yellowOrBlue" />
      <label for="blue">Blue</label><br />
    </div>
    <div>
      <input type="radio" id="yellow" name="color" value="yellow" v-model="yellowOrBlue"/>
      <label for="yellow">Yellow</label><br />
    </div>
    </div>
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
const {yellowOrBlue} = storeToRefs(store);
</script>

<style scoped></style>
