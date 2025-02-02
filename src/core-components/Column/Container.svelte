<script lang="ts">
    let { children } = $props();
</script>

<style lang="less">
    @import "src/core-components/Column/container.less";
</style>

<div class="column-container">
    {@render children?.()}
</div>