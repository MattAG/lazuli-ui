<template>
    <button class="border-transparent border"
            :class="{
                'bg-white text-black hover:bg-grey-100': colour === 'white',
                'bg-black text-white hover:bg-grey-800': colour === 'black',
                'bg-blue-500 text-white hover:bg-blue-600': colour === 'blue',
                'bg-red-500 text-white hover:bg-red-600': colour === 'red',
                'bg-green-500 text-white hover:bg-green-600': colour === 'green',
                'bg-yellow-500 text-white hover:bg-yellow-600': colour === 'yellow',
                'bg-orange-500 text-white hover:bg-orange-600': colour === 'orange',
                'bg-purple-500 text-white hover:bg-purple-600': colour === 'purple',
                'text-xs px-4 py-0.5': size === 'small',
                'text-sm px-8 py-1': size === 'medium',
                'px-16 py-2': size === 'large'
            }">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LzButton',
    props: {
        colour: {
            type: String as () => 'white' | 'black' | 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple',
            default: 'white'
        },
        size: {
            type: String as () => 'small' | 'medium' | 'large',
            default: 'medium'
        }
    }
});
</script>
