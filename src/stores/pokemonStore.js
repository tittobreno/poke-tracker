import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from '../services/api';
export const pokemonStore = defineStore("pokemon", () => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getIdEvolutionsChains = async (pokemonEvolutionId) => {
    try {
      const { data } = await api.get(`/evolution-chain/${pokemonEvolutionId}`)

    } catch (error) {
      console.log(error);
    }
  };

  return { capitalizeFirstLetter };
});
