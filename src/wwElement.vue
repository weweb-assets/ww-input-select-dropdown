<template>
    <wwLayout class="ww-select-dropdown" path="slot" />
</template>

<script>
import { computed, watch, inject } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    setup(props) {
        const updateDropdownConfig = inject('_wwSelectUpdateDropdownConfig', () => {});

        const dropdownConfig = computed(() => ({
            side: props.content.side,
            align: props.content.align,
            offsetX: props.content.offsetX,
            offsetY: props.content.offsetY,
            autoPosition: props.content.autoPosition,
            boundOffset: props.content.boundOffset,
        }));

        watch(
            dropdownConfig,
            () => {
                updateDropdownConfig(dropdownConfig.value);
            },
            { immediate: true, deep: true }
        );

        return {
            dropdownConfig,
        };
    },
};
</script>
