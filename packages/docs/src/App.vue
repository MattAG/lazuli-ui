<template>
    <div class="bg-blue-500 p-1 w-full">
        <img src="./assets/banner.png"
             class="h-14">
    </div>

    <div class="p-1">
        <router-link v-for="(route, index) in routes"
                     :key="index"
                     class="border-b border-transparent hover:border-blue-200 mr-2"
                     :to="route.path">
            {{ route.name }}
        </router-link>
    </div>

    <div class="px-2 py-1">
        <router-view />
    </div>
</template>

<style>
@import '/@lib/index.css';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { routes } from './router';

export default defineComponent({
    name: 'App',
    setup () {
        return {
            routes
        };
    }
});
</script>
