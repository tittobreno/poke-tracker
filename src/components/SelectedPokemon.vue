<script setup>
import { onMounted } from "vue";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import api from "../services/api";
import { usePokemonStore } from "../stores/pokemonStore";
import { formatHeightAndWeight } from '../utils/formatHeightAndWeight';
const pokemonStore = usePokemonStore();
const selectedProps = defineProps([
  "name",
  "hp",
  "attack",
  "defense",
  "specialAttack",
  "specialDefense",
  "speed",
  "img",
  "height",
  "weight",
]);


onMounted(async () => {
  const { data } = await api.get(`pokemon-species/${selectedProps.name}`);
  pokemonStore.getIdEvolutionsChains(data);
});
</script>

<template>
  <main class="container-selected w-full h-full p-5 flex flex-col gap-3 items-center rounded-lg">
    <section
      class="container-selected__main w-3/4 h-2/3 p-5 flex gap-3 justify-between rounded-lg border bg-slate-200 border-slate-500">
      <section class="container-attributes w-1/2 h-full rounded-lg flex flex-col justify-between items-center gap-1">
        <div class="flex flex-col items-center">
          <img class="w-52 h-40 rounded-lg mb-7 mt-4" :src="selectedProps.img" alt="Ícone Pokémon" />
          <strong class="bg-cyan-900 w-full text-white text-center rounded-2xl py-2 px-4 text-2xl">{{
            capitalizeFirstLetter(selectedProps.name) }}</strong>
        </div>

        <div class="section-attributes flex items-center w-full gap-5 mt-2">
          <div
            class="section-attributes__item bg-lime-500 text-white w-1/2 flex justify-between items-center rounded-xl py-2 px-4 text-xl">
            <strong>HEIGHT</strong>
            <strong>{{ formatHeightAndWeight(selectedProps.height) + ' m' }}</strong>
          </div>

          <div
            class="section-attributes__item bg-orange-500 text-white w-1/2 flex justify-between items-center rounded-xl py-2 px-4 text-xl">
            <strong>WEIGHT</strong>
            <strong>{{ formatHeightAndWeight(selectedProps.weight) + ' kg' }}</strong>
          </div>
        </div>
      </section>

      <section class="section__skills flex flex-col justify-between w-2/4">
        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">HP</strong>
          <span class="text-xl font-semibold">{{ selectedProps.hp }}</span>
        </section>

        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">ATTACK</strong>
          <span class="text-xl font-semibold">{{ selectedProps.attack }}</span>
        </section>

        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">DEFENSE</strong>
          <span class="text-xl font-semibold">{{ selectedProps.defense }}</span>
        </section>

        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">SPECIAL ATTACK</strong>
          <span class="text-xl font-semibold">{{
            selectedProps.specialAttack
          }}</span>
        </section>

        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">SPECIAL DEFENSE</strong>
          <span class="text-xl font-semibold">{{
            selectedProps.specialDefense
          }}</span>
        </section>

        <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
          <strong class="text-2xl">SPEED</strong>
          <span class="text-xl font-semibold">{{ selectedProps.speed }}</span>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped>
@media (max-width: 1300px) {
  .section-attributes {
    flex-direction: column;
    width: 100%;
  }

  .section-attributes__item {
    width: 100%;
  }

  .container-attributes {
    width: 100%;
  }
}

@media (max-width: 990px) {
  .container-selected__main {
    flex-direction: column;
    align-items: center;
  }

  .section__skills {
    width: 100%;
    gap: 0.7rem;
  }
}

@media (max-width: 500px) {
  .container-selected__main {
    width: 100%;
  }
}
</style>
