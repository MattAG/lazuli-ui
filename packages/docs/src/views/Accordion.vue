<template>
    <lz-accordion :items="items">
        <template #title-a>
            <div class="text-sm flex">
                <img class="inline-block mr-2"
                     src="https://via.placeholder.com/250/26619c/000000?text=%20">

                <span>
                    <p class="mb-1">
                        {{ loremIpsum1 }}
                    </p>

                    <p>
                        {{ loremIpsum2 }}
                    </p>
                </span>
            </div>
        </template>

        <template #title-b>
            <lz-button @click.stop="() => {}">
                Hello
            </lz-button>
        </template>

        <template #title-c>
            <p class="text-sm mb-1">
                {{ loremIpsum1 }}
            </p>

            <p class="text-sm">
                {{ loremIpsum2 }}
            </p>
        </template>
    </lz-accordion>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { loremIpsum1, loremIpsum2 } from '../utilities';

export default defineComponent({
    name: 'Accordion',
    setup () {
        const items = ref<string[]>([
            'Title A',
            'Title B',
            'Title C'
        ]);

        return {
            items,
            loremIpsum1,
            loremIpsum2
        };
    }
});
</script>
