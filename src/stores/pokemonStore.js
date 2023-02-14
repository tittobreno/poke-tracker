import { defineStore } from "pinia";
import { ref } from "vue";
import api from '../services/api';

export const usePokemonStore = defineStore("pokemonStore", () => {
  const pokemonSelected = ref()
  const pokemons = ref([]);
  const currentPokemon = ref([])

  const getIdEvolutionsChains = async (pokemonEvolutionId) => {
    try {
      const { data } = await api.get(`/evolution-chain/${pokemonEvolutionId}`)

    } catch (error) {
      console.log(error);
    }
  };


  const setListPokemons = (pokemonsList) => {
    pokemons.value = pokemonsList;
  };

  const setPokemonSelected = (pokemon) => {
    pokemonSelected.value = pokemon;
  };

  const setCurrentPokemon = (currentPokemonData) => {
    currentPokemon.value.push(currentPokemonData)
  };



  return { pokemons, pokemonSelected, currentPokemon, setPokemonSelected, setListPokemons, setCurrentPokemon };
});
