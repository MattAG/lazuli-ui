<template>
    <teleport :to="container">
        <div class="absolute z-40"
             :class="{
                 'top-5 left-5': position === 'top-left',
                 'top-5 left-1/2': position === 'top-centre',
                 'top-5 right-5': position === 'top-right',
                 'bottom-5 left-5': position === 'bottom-left',
                 'bottom-5 left-1/2': position === 'bottom-centre',
                 'bottom-5 right-5': position === 'bottom-right'
             }">
            <div v-for="toast in toasts"
                 :key="toast.id"
                 class="font-medium my-2 text-xs py-2.5 px-10 relative shadow-md"
                 :class="{
                     'tst-blue': toast.colour === 'blue',
                     'tst-red': toast.colour === 'red',
                     'tst-green': toast.colour === 'green',
                     'tst-yellow': toast.colour === 'yellow',
                     'tst-orange': toast.colour === 'orange',
                     'tst-purple': toast.colour === 'purple',
                     'tst-gray': toast.colour === 'grey',
                     'tst-white': toast.colour === 'white',
                     'tst-black': toast.colour === 'black'
                 }">
                {{ toast.message }}

                <ph-x class="absolute right-2 top-3 inline-block cursor-pointer"
                      :size="12"
                      weight="bold"
                      @click="removeToast(toast)" />
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { toasts, removeToast } from '../../composables/toast';

export default defineComponent({
    name: 'LzToast',
    props: {
        container: {
            type: String,
            default: 'body'
        },
        position: {
            type: String as () => 'top-left' | 'top-centre' | 'top-right' | 'bottom-left' | 'bottom-centre' | 'bottom-right',
            default: 'top-right'
        }
    },
    setup() {
        return {
            removeToast,
            toasts
        };
    }
});
</script>
