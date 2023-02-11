<script setup>
import api from '../services/api';
import SelectedPokemon from '@/components/SelectedPokemon.vue';
import CardPokemon from '@/components/CardPokemon.vue';
import { ref } from 'vue';

const urlImgPokemon = ref('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/')
const showSelectedPokemon = ref(false);
const showPokemon = ref(false);
const showAlert = ref(false);
const pokemons = ref([]);
const currentPokemon = ref([])

const currentInputName = ref('')

const onSubmit = async () => {
  if (currentInputName.value.trim() === "") {
    alert("Ops, Digite um nome de pokémon")
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



const handleModal = () => {
  showPokemon.value = false;
  showSelectedPokemon.value = true
}
</script>

<template>
  <main class="flex flex-col items-center min-w-full min-h-full p-10">
    <form @submit.prevent="onSubmit">
      <input class="mt-10 mb-10 py-3 px-5 bg-slate-200 rounded-xl font-bold text-cyan-900 placeholder:font-bold"
        type="text" v-model="currentInputName" placeholder='Digite o nome aqui..'>
      <button class="ml-3 py-3 px-5 rounded-xl bg-slate-200 font-bold text-cyan-900" type="submit">Buscar</button>
    </form>

    <span v-if="showAlert" class='p-5 bg-slate-200 rounded-xl font-bold text-lg text-cyan-900'>Nenhum Pokémon
      encontrado!</span>

    <section v-if="showPokemon" class="flex gap-3 flex-wrap">
      <CardPokemon @click="handleModal" v-for="pokemon in currentPokemon[0]" :key="pokemon.name" :name="pokemon.name"
        :urlImgPokemon="urlImgPokemon + pokemon.url.split('/')[6] + '.svg'" />
    </section>
    <SelectedPokemon v-if="showSelectedPokemon" />

  </main>
</template>
