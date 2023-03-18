<script setup>
import { ref } from "vue";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const pokemonProps = defineProps(["name", "urlImgPokemon", "pokemon"]);
const urlImgPokemon = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
let imgPokemonSvg =
  urlImgPokemon.value + pokemonProps.pokemon.url.split("/")[6] + ".svg";
</script>

<template>
  <main
    class="cardPokemon w-52 h-56 bg-slate-200 rounded-lg flex flex-col justify-between items-center p-5 cursor-pointer">
    <img class="w-28 rounded-lg mb-2" :src="imgPokemonSvg" alt="Pokémon" />
    <strong class="text-cyan-900 rounded-2xl py-2 px-4 text-2xl flex justify-center">{{
      capitalizeFirstLetter(pokemonProps.name)
    }}</strong>
  </main>
</template>

<style scoped>
.cardPokemon img {
  transition: ease-out 140ms;
}

.cardPokemon img:hover {
  transform: scale(1.04);
  transition: ease-in 140ms;
}
</style>
