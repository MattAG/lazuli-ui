import { ref } from 'vue';
import { Colour, generateKey } from '../utilities';

export interface Toast {
    id?: string;
    message: string;
    colour: Colour;
    duration: number;
}

export const toasts = ref<Toast[]>([]);

/**
 * Adds the provided toast to the list of toasts to display.
 *
 * @param {Toast} toast The toast to display.
 */
export function showToast (toast: Toast): void {
    if (toasts.value.length < 20) {
        if (toast.id === undefined) {
            toast.id = generateKey();
        }

        toasts.value.push(toast);

        setTimeout(() => removeToast(toast), toast.duration);
    }
}

/**
 * Removes the provided toast from the list of toasts to display.
 *
 * @param {Toast} toast The toast to remove.
 */
export function removeToast (toast: Toast): void {
    toasts.value = toasts.value.filter(t => t.id !== toast.id);
}
