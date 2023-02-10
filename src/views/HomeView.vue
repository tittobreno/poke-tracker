<script setup>
import CardPokemonSelected from '@/components/CardPokemonSelected.vue'
import { ref } from 'vue';

const showPokemonSelected = ref(false)
</script>

<template>
  <main class="flex items-center justify-center w-screen h-screen">
    <CardPokemonSelected v-if="showPokemonSelected" />

  </main>
</template>
