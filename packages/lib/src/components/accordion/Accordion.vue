<template>
    <ul class="shadow-md border-t border-grey-100">
        <li v-for="(item, index) in managedItems"
            :key="index"
            class="p-6 shadow-sm hover:shadow relative cursor-pointer overflow-visible z-0"
            @click="toggleItem(item)">
            <div v-if="titles"
                 class="font-medium">
                {{ item.name }}
            </div>

            <div v-show="item.open"
                 :class="{ 'pt-4': titles }">
                <slot :name="item.id" />

                <ph-caret-up class="absolute right-3 top-3" />
            </div>

            <ph-caret-down v-show="!item.open"
                           class="absolute right-3 top-3" />
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { toKeyValue } from '../../utilities';

interface AccordionItem {
    id: string;
    name: string;
    open: boolean;
}

export default defineComponent({
    name: 'LzAccordion',
    props: {
        items: {
            type: Array as () => string[],
            required: true
        },
        exclusive: {
            type: Boolean,
            default: false
        },
        titles: {
            type: Boolean,
            default: false
        },
        firstOpen: {
            type: Boolean,
            default: true
        }
    },
    setup (props) {
        const managedItems = ref<AccordionItem[]>([]);

        /**
         * Initialises the internal item list, from the item props.
         */
        function initialiseItems (): void {
            managedItems.value = props.items.map(v => {
                return {
                    id: toKeyValue(v),
                    name: v,
                    open: false
                };
            });

            if (props.firstOpen && managedItems.value.length > 0) {
                managedItems.value[0].open = true;
            }
        }

        /**
         * Opens/closes the item.
         *
         * @param {AccordionItem} item The item to open/close.
         */
        function toggleItem (item: AccordionItem): void {
            if (!item.open) {
                managedItems.value.forEach(i => {
                    if (props.exclusive) {
                        i.open = false;
                    }
                });
            }

            item.open = !item.open;
        }

        onMounted(initialiseItems);

        watch(() => props.items, () => initialiseItems, {
            deep: true
        });

        return {
            managedItems,
            toggleItem
        };
    }
});
</script>
