<script setup>
import { onMounted, ref } from 'vue';
import api from '../services/api';


const pokemonProps = defineProps(['name', 'urlImgPokemon']);
const pokemonData = ref({})
onMounted(async () => {
    const { data } = await api.get(`/pokemon/${pokemonProps.name}`);
    pokemonData.value = data;
})
</script>

<template>
    <main
        class="w-56 h-60 bg-slate-200 rounded-lg flex flex-col justify-center items-center border border-zinc- cursor-pointer">

        <img class="w-40 rounded-lg mb-2" :src="pokemonProps.urlImgPokemon" alt="Pokémon">
        <strong class=" text-cyan-900 rounded-2xl py-2 px-4 text-2xl flex justify-center">{{
            pokemonProps.name
        }}</strong>

    </main>
</template>