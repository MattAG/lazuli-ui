<template>
    <lz-accordion :items="items">
        <template #title-a>
            <div class="text-sm flex">
                <img class="inline-block mr-2"
                     src="https://via.placeholder.com/250/26619c/000000?text=%20">

                <span>
                    <p class="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in mi commodo, gravida nibh euismod, sodales ligula. Aenean pharetra, eros in ultrices commodo, elit nunc sodales risus, quis egestas enim dolor volutpat quam. Duis lacinia magna sapien, id consequat elit venenatis accumsan. Nulla lacus velit, ultrices pulvinar fringilla iaculis, faucibus in mauris. Nulla facilisi. Duis dapibus enim tellus, ut faucibus massa laoreet at. Aenean quam ante, tempus volutpat congue id, ultricies at sapien. Nullam ultrices, libero id vestibulum placerat, nisl metus rutrum lorem, in maximus erat arcu id ex. Duis velit elit, interdum vel facilisis vel, molestie eu odio. Suspendisse leo augue, scelerisque in vehicula aliquet, varius id ligula. In ut fringilla risus. Ut venenatis elementum dolor, eu aliquet eros varius sit amet. Curabitur malesuada, ipsum et gravida finibus, erat urna sodales velit, nec volutpat ex ante ac urna. Fusce facilisis viverra finibus.
                    </p>

                    <p>
                        In id dolor rutrum, iaculis lorem in, blandit metus. Mauris auctor dolor et risus laoreet, ac vulputate libero fringilla. Proin vehicula sapien nec quam fringilla fermentum. Sed et dictum dui. Phasellus et magna in mi consequat molestie. Donec ac lectus justo. Etiam ultricies massa sed porta condimentum. Nulla sit amet sollicitudin enim. Aliquam tortor est, sagittis vel vestibulum ac, aliquet ac augue. Etiam lacus mauris, dapibus et aliquam id, vestibulum nec augue. Nulla facilisi. Morbi tempus sagittis ligula, eu aliquam ex tempus eget. Etiam ultricies, velit in dignissim lacinia, velit nisi vulputate elit, vel fermentum augue libero tempus felis. Fusce mollis arcu ac erat lacinia, quis convallis nibh dapibus. Praesent venenatis lacus id lectus suscipit, non porttitor sapien maximus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in mi commodo, gravida nibh euismod, sodales ligula. Aenean pharetra, eros in ultrices commodo, elit nunc sodales risus, quis egestas enim dolor volutpat quam. Duis lacinia magna sapien, id consequat elit venenatis accumsan. Nulla lacus velit, ultrices pulvinar fringilla iaculis, faucibus in mauris. Nulla facilisi. Duis dapibus enim tellus, ut faucibus massa laoreet at. Aenean quam ante, tempus volutpat congue id, ultricies at sapien. Nullam ultrices, libero id vestibulum placerat, nisl metus rutrum lorem, in maximus erat arcu id ex. Duis velit elit, interdum vel facilisis vel, molestie eu odio. Suspendisse leo augue, scelerisque in vehicula aliquet, varius id ligula. In ut fringilla risus. Ut venenatis elementum dolor, eu aliquet eros varius sit amet. Curabitur malesuada, ipsum et gravida finibus, erat urna sodales velit, nec volutpat ex ante ac urna. Fusce facilisis viverra finibus.
            </p>

            <p class="text-sm">
                In id dolor rutrum, iaculis lorem in, blandit metus. Mauris auctor dolor et risus laoreet, ac vulputate libero fringilla. Proin vehicula sapien nec quam fringilla fermentum. Sed et dictum dui. Phasellus et magna in mi consequat molestie. Donec ac lectus justo. Etiam ultricies massa sed porta condimentum. Nulla sit amet sollicitudin enim. Aliquam tortor est, sagittis vel vestibulum ac, aliquet ac augue. Etiam lacus mauris, dapibus et aliquam id, vestibulum nec augue. Nulla facilisi. Morbi tempus sagittis ligula, eu aliquam ex tempus eget. Etiam ultricies, velit in dignissim lacinia, velit nisi vulputate elit, vel fermentum augue libero tempus felis. Fusce mollis arcu ac erat lacinia, quis convallis nibh dapibus. Praesent venenatis lacus id lectus suscipit, non porttitor sapien maximus.
            </p>
        </template>
    </lz-accordion>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Accordion',
    setup () {
        const items = ref<string[]>([
            'Title A',
            'Title B',
            'Title C'
        ]);

        return {
            items
        };
    }
});
</script>
