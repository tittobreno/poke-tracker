<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const isAbout = ref(false);
const isHome = ref(true);
onMounted(() => {
    if (window.location.pathname === '/about') {
        isAbout.value = true;
        isHome.value = false;
    }
});
</script>

<template>
    <header class="flex items-center justify-between p-7 w-full h-16 bg-slate-200 text-slate-900 font-bold">
        <RouterLink to="/">
            <div class='flex items-center gap-2'>
                <img class="w-10" src='../assets/pokeball.png' alt="Pokeball">
                <strong class="text-base">Poke Tracker</strong>
            </div>
        </RouterLink>
        <nav>
            <ul>
                <RouterLink to="about">
                    <li v-if="isHome">About</li>
                </RouterLink>

                <RouterLink to="/">
                    <li v-if="isAbout">Home</li>
                </RouterLink>
            </ul>
        </nav>
    </header>
</template>