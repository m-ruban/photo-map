<script lang="ts">
    let { children, ...linkProps } = $props()
</script>

<style lang="less">
    @import "src/core-components/Link/link.less";
</style>

<a class="link" {...linkProps}>
    {@render children?.()}
</a>