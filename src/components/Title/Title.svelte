<script lang="ts">
    let { children, typography = 'regular', size = 'medium' } = $props();
</script>

<style lang="less">
    @import "src/components/Title/title.less";
</style>

<span class={`title title_typography-${typography} title_size-${size}`}>{@render children?.()}</span>