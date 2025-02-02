<script lang="ts">
    let { children } = $props();
</script>

<style lang="less">
    @import "src/core-components/Icon/icon.less";
</style>

<div class="icon">
    {@render children?.()}
</div>