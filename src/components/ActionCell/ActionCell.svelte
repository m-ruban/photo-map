<script lang="ts">
    import Text from 'src/components/Text/Text.svelte';

    let { icon, children, onClick, ...props } = $props()
</script>

<style lang="less">
    @import "src/components/ActionCell/action-cell.less";
</style>

<div class="action-cell" role="button" tabindex="0" onclick={onClick} {...props}>
    <div>{@render icon?.()}</div>
    <div><Text typography="regular" size="medium">{@render children?.()}</Text></div>
</div>