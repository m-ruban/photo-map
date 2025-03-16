<script lang="ts">
    import Text from 'src/components/Text/Text.svelte';

    let { children = null, icon = null, type = 'primary', ...otherProps } = $props();
    let hideLabel = children === null;
</script>

<style lang="less">
    @import "src/components/Button/button.less";
</style>

<button
    class={`button button_type-${type}`}
    class:button_hile-label={hideLabel}
    type="button"
    {...otherProps}
>
    {#if children}
        <Text typography="medium" size="medium" style="secondary">
            {@render children?.()}
        </Text>
    {/if}
    {#if icon}
        <span class="icon" class:icon_without-label={hideLabel}>{@render icon?.()}</span>
    {/if}
</button>