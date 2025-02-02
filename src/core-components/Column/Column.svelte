<script lang="ts">
    let { children, size, layout = 'default' } = $props();
</script>

<style lang="less">
    @import "src/core-components/Column/column.less";
</style>

<div class={`column column-size_${size} column_layout-${layout}`}>
    {@render children?.()}
</div>