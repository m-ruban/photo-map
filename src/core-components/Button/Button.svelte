<script lang="ts">
    import Text from 'src/core-components/Text/Text.svelte';

    let { children = null, icon = null, type = 'primary', ...otherProps } = $props()
    let hideLabel = children === null
</script>

<style lang="less">
    @import "src/core-components/Button/button.less";
</style>

<button
    class={`button button_type-${type}`}
    class:button_hile-label={hideLabel}
    type="button"
    {...otherProps}
>
    {#if children}
        <Text typography="regular" size="medium" style="secondary">
            {@render children?.()}
        </Text>
    {/if}
    {#if icon}
        <span class="icon" class:icon_without-label={hideLabel}>{@render icon?.()}</span>
    {/if}
</button>