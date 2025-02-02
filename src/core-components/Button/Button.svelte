<script lang="ts">
    import Text from 'src/core-components/Text/Text.svelte';

    let { children, icon = null, ...otherProps } = $props()
</script>

<style lang="less">
    @import "src/core-components/Button/button.less";
</style>

<button
    class="button"
    type="button"
    {...otherProps}
>
    <Text typography="regular" size="medium" style="secondary">
        {@render children?.()}
    </Text>
    {#if icon}
        <span class="icon">{@render icon?.()}</span>
    {/if}
</button>