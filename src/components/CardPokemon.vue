<script setup>
const pokemon = defineProps(['name', 'avatar'])
</script>

<template>
    <main
        class="w-40 h-44 bg-slate-200 rounded-lg flex flex-col justify-center items-center border border-zinc- cursor-pointer">

        <img class="w-24 rounded-lg mb-2" :src='pokemon.avatar' alt="Pokémon">
        <strong class=" text-cyan-900 rounded-2xl py-2 px-4 text-2xl flex justify-center">{{ pokemon.name }}</strong>

    </main>
</template>