import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const pokemonStore = defineStore("pokemon", () => {
  let pokeId = reactive(ref());

  return { pokeId };
});
