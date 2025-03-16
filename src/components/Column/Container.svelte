<script lang="ts">
    let { children, layout = 'default' } = $props();
</script>

<style lang="less">
    @import "src/components/Column/container.less";
</style>

<div class={`column-container column-container_layout-${layout}`}>
    {@render children?.()}
</div>