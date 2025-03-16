<script lang="ts">
    let { children, typography = 'regular', size = 'large', style = 'default' } = $props();
</script>

<style lang="less">
    @import "src/components/Text/text.less";
</style>

<span class={`text text_typography-${typography} text_size-${size} text_style-${style}`}>
    {@render children?.()}
</span>