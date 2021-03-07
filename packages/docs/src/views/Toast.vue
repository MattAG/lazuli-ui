<template>
    <lz-toast />

    <lz-button @click="displayToast">
        Show Toast
    </lz-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { showToast } from '../../../lib/src/composables';

export default defineComponent({
    name: 'Toast',
    setup() {
        /**
         * Displays an example toast notification.
         */
        function displayToast (): void {
            showToast({
                message: 'A toast notification.',
                colour: 'purple',
                duration: 5000
            });
        }

        return {
            displayToast
        };
    }
});
</script>
