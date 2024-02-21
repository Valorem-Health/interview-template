import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    yellowOrBlue: null,
    name: null,
  }),
});
