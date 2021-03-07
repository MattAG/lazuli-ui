<template>
    <button class="shadow"
            :class="{
                'btn-blue': colour === 'blue',
                'btn-red': colour === 'red',
                'btn-green': colour === 'green',
                'btn-yellow': colour === 'yellow',
                'btn-orange': colour === 'orange',
                'btn-purple': colour === 'purple',
                'btn-gray': colour === 'grey',
                'btn-white': colour === 'white',
                'btn-black': colour === 'black',

                'btn-small': size === 'small',
                'btn-medium': size === 'medium',
                'btn-large': size === 'large'
            }">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Colour } from '../../utilities';

export default defineComponent({
    name: 'LzButton',
    props: {
        colour: {
            type: String as () => Colour,
            default: 'white'
        },
        size: {
            type: String as () => 'small' | 'medium' | 'large',
            default: 'medium'
        }
    }
});
</script>
