<script setup>
import api from '../services/api';
import SelectedPokemon from '@/components/SelectedPokemon.vue';
import CardPokemon from '@/components/CardPokemon.vue';
import { ref, reactive } from 'vue';

const urlImgPokemon = ref('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/')
const showSelectedPokemon = ref(false);
const pokemonSelected = reactive(ref())
const showPokemon = ref(false);
const showAlert = ref(false);
const pokemons = ref([]);
const currentPokemon = ref([])
let idPoke = ref();
const currentInputName = ref('')
const onSubmit = async () => {
  if (currentInputName.value.trim() === "") {
    alert("Ops, digite um nome no campo!")
    return
  }
  currentPokemon.value = [];

  try {
    const { data } = await api.get('/pokemon?limit=100000&offset=0');
    pokemons.value = data.results;

    const pokemon = pokemons.value.filter(pokemon => pokemon.name.toLowerCase() === currentInputName.value.toLowerCase());
    if (pokemon.length > 0) {
      showPokemon.value = true
      showAlert.value = false;
      currentPokemon.value.push(pokemon)

    } else {
      showPokemon.value = false
      showAlert.value = true;
    }
    showSelectedPokemon.value = false;

    currentInputName.value = '';
  } catch (error) {
    console.log(error);
  }
}

const handlePokemonSelected = async (pokemon) => {
  try {
    const { data } = await api.get(pokemon.url);
    pokemonSelected.value = data;

    idPoke.value = pokemon.url.split('/')[6];
  } catch (error) {
    console.log(error);
  }

  showPokemon.value = false;
  showSelectedPokemon.value = true
}
</script>

<template>
  <main class="flex flex-col items-center min-w-full min-h-full p-10">
    <form @submit.prevent="onSubmit" class="form">
      <input class="input mt-10 mb-10 py-3 px-5 bg-slate-200 rounded-xl font-bold text-cyan-900 placeholder:font-bold"
        type="text" v-model="currentInputName" placeholder='Digite o nome aqui..'>
      <button class="ml-3 py-3 px-5 rounded-xl bg-slate-200 font-bold text-cyan-900" type="submit">Buscar</button>
    </form>

    <span v-if="showAlert" class='p-5 bg-slate-200 rounded-xl font-bold text-lg text-cyan-900'>Nenhum Pokémon
      encontrado!</span>

    <section v-if="showPokemon" class="flex gap-3 flex-wrap">
      <CardPokemon @click="handlePokemonSelected(pokemon)" v-for="pokemon in currentPokemon[0]" :key="pokemon.name"
        :name="pokemon.name" :urlImgPokemon="urlImgPokemon + pokemon.url.split('/')[6] + '.svg'" />
    </section>
    <SelectedPokemon v-if="showSelectedPokemon" :name="pokemonSelected?.name" :hp="pokemonSelected?.stats[0].base_stat"
      :attack="pokemonSelected?.stats[1].base_stat" :defense="pokemonSelected?.stats[2].base_stat"
      :specialAttack="pokemonSelected?.stats[3].base_stat" :specialDefense="pokemonSelected?.stats[4].base_stat"
      :speed="pokemonSelected?.stats[5].base_stat" :img="pokemonSelected?.sprites.other.dream_world.front_default"
      :weight="pokemonSelected?.weight" :height="pokemonSelected?.height" :idPoke="idPoke" />


  </main>
</template>

<style scoped>
@media (max-width: 450px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    width: 100%;
  }
}
</style>