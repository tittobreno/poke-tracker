<script setup>

const pokemonProps = defineProps(['name', 'hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed', 'img'])

</script>

<template>
    <main class="w-3/4 h-2/3 p-5 flex gap-3 justify-between rounded-lg border bg-slate-200 border-slate-500">
        <section class="w-1/2 min-h-full rounded-lg flex flex-col justify-center items-center gap-1">

            <img class="w-52 rounded-lg mb-4 mt-4" :src="pokemonProps.img" alt="Ícone Pokémon">
            <strong class="bg-cyan-900 text-white rounded-2xl py-2 px-4 text-2xl">{{
                pokemonProps.name
            }}</strong>
        </section>

        <section class="flex flex-col gap-2 w-2/4 ">

            <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">HP</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.hp }}</span>
            </section>

            <section class="flex justify-between items-center  text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">ATTACK</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.attack }}</span>
            </section>

            <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">DEFENSE</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.defense }}</span>
            </section>

            <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">SPECIAL ATTACK</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.specialAttack }}</span>
            </section>

            <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">SPECIAL DEFENSE</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.specialDefense }}</span>
            </section>

            <section class="flex justify-between items-center text-white bg-cyan-900 rounded-2xl py-2 px-4">
                <strong class="text-2xl">SPEED</strong>
                <span class='text-xl font-semibold'>{{ pokemonProps.speed }}</span>
            </section>

        </section>
    </main>
</template>