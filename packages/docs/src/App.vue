<template>
    <div class="bg-blue-500 w-full">
        <img src="./assets/banner.png"
             class="h-14">
    </div>

    <div class="px-2 py-1">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App'
});
</script>
