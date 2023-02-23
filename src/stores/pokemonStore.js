import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemonStore", () => {
  const pokemonSelected = ref();
  const pokemons = ref([]);
  const currentPokemon = ref([]);

  const getIdEvolutionsChains = (urlEvolutionChain) => {
    try {
      const idEvolutionChain =
        urlEvolutionChain.evolution_chain.url.split("/")[6];
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
    currentPokemon.value.push(currentPokemonData);
  };

  return {
    pokemons,
    pokemonSelected,
    currentPokemon,
    getIdEvolutionsChains,
    setPokemonSelected,
    setListPokemons,
    setCurrentPokemon,
  };
});
