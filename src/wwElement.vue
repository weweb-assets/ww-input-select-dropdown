<template>
    <wwLayout class="ww-select-dropdown" path="slot" />
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    setup(props) {},
};
</script>

<style lang="scss" scoped></style>
