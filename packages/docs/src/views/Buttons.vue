<template>
    <div v-for="size in sizes"
         :key="size"
         class="flex flex-wrap py-1">
        <lz-button v-for="colour in colours"
                   :key="colour"
                   class="mr-1"
                   :colour="colour"
                   :size="size"
                   @click.prevent="label = `The ${size} ${colour} button clicked.`">
            Button
        </lz-button>
    </div>

    <div class="mt-4">
        {{ label }}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
            'grey',
            'white',
            'black'
        ];

        const label = ref<string>('');

        return {
            colours,
            label,
            sizes
        };
    }
});
</script>
