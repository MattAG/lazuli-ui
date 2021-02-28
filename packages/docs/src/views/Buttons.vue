<template>
    <router-link class="border-b border-transparent hover:border-blue-200 mb-2"
                 to="/">
        Home
    </router-link>

    <div v-for="size in sizes"
         :key="size"
         class="flex flex-wrap py-1">
        <lz-button
            v-for="colour in colours"
            :key="colour"
            class="mr-1"
            :colour="colour"
            :size="size">
            Button
        </lz-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Buttons',
    setup() {
        const sizes = [
            'small',
            'medium',
            'large'
        ];
        const colours = [
            'blue',
            'red',
            'green',
            'yellow',
            'orange',
            'purple',
            'black',
            'white'
        ];

        return {
            colours,
            sizes
        };
    }
});
</script>
