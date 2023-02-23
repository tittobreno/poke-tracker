<script setup>
import CardPokemon from "@/components/CardPokemon.vue";
import SelectedPokemon from "@/components/SelectedPokemon.vue";
import Header from '@/components/Header.vue';
import { storeToRefs } from "pinia";
import { ref } from "vue";
import api from "../services/api";
import { usePokemonStore } from "../stores/pokemonStore";

const pokemonStore = usePokemonStore();
const { pokemonSelected, pokemons, currentPokemon } = storeToRefs(pokemonStore);

const isLoading = ref(false);
const showSelectedPokemon = ref(false);
const showPokemon = ref(false);
const showAlert = ref(false);
const currentInputName = ref("");

const onSubmit = async () => {
  if (currentInputName.value.trim() === "") {
    alert("Ops, digite um nome no campo!");
    return;
  }

  try {
    isLoading.value = true;
    currentPokemon.value = [];

    const { data } = await api.get("/pokemon?limit=100000&offset=0");
    pokemonStore.setListPokemons(data.results);

    const pokemon = pokemons.value.filter(
      (pokemon) =>
        pokemon.name.toLowerCase() === currentInputName.value.toLowerCase()
    );

    if (pokemon.length > 0) {
      showPokemon.value = true;
      showAlert.value = false;
      pokemonStore.setCurrentPokemon(pokemon);
    } else {
      showPokemon.value = false;
      showAlert.value = true;
    }

  } catch (error) {
    console.log(error);
  } finally {
    showSelectedPokemon.value = false;
    currentInputName.value = "";
    isLoading.value = false;
  }
};

const handlePokemonSelected = async (pokemon) => {
  isLoading.value = true;
  showPokemon.value = false;

  try {
    const { data } = await api.get(pokemon.url);
    pokemonStore.setPokemonSelected(data);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
    showSelectedPokemon.value = true;
  }

};
</script>

<template>
  <main class="flex flex-col items-center min-w-full min-h-full px-10">
    <Header />

    <form @submit.prevent="onSubmit" class="form w-96 m-10 flex items-center justify-between">
      <input class="input py-3 px-5 bg-slate-200 rounded-xl font-bold text-cyan-900 placeholder:font-bold" type="text"
        v-model="currentInputName" placeholder="Digite o nome aqui.." />
      <button class="py-3 px-5 rounded-xl bg-slate-200 font-bold text-cyan-900" type="submit">
        Buscar
      </button>
    </form>

    <img v-if="isLoading" class="w-28" src="../assets/loader.svg" alt="Loader">

    <span v-if="showAlert" class="w-96 p-5 bg-slate-200 rounded-xl font-bold text-lg text-cyan-900 text-center">Nenhum
      Pokémon
      encontrado!</span>

    <section v-if="showPokemon" class="flex gap-3 flex-wrap">
      <CardPokemon @click="handlePokemonSelected(pokemon)" v-for="pokemon in currentPokemon[0]" :key="pokemon.name"
        :name="pokemon.name" :pokemon="pokemon" />
    </section>
    <SelectedPokemon v-if="showSelectedPokemon" :name="pokemonSelected?.name" :hp="pokemonSelected?.stats[0].base_stat"
      :attack="pokemonSelected?.stats[1].base_stat" :defense="pokemonSelected?.stats[2].base_stat"
      :specialAttack="pokemonSelected?.stats[3].base_stat" :specialDefense="pokemonSelected?.stats[4].base_stat"
      :speed="pokemonSelected?.stats[5].base_stat" :img="pokemonSelected?.sprites.other.dream_world.front_default"
      :weight="pokemonSelected?.weight" :height="pokemonSelected?.height" />
  </main>
</template>

<style scoped>
@media (max-width: 450px) {
  .form {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
