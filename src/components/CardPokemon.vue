<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
const pokemonProps = defineProps(["name", "urlImgPokemon", 'pokemon']);
const pokemonData = ref({});

const urlImgPokemon = ref('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/')
let imgPokemonSvg = urlImgPokemon.value + pokemonProps.pokemon.url.split('/')[6] + '.svg';

onMounted(async () => {
  const { data } = await api.get(`/pokemon/${pokemonProps.name}`);
  pokemonData.value = data;
});

</script>

<template>
  <main
    class="cardPokemon w-72 h-80 bg-slate-200 rounded-lg flex flex-col justify-center items-center border border-zinc- cursor-pointer">
    <img class="w-44 rounded-lg mb-2" :src="imgPokemonSvg" alt="Pokémon" />
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
