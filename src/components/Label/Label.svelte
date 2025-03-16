<script lang="ts">
    import Text from 'src/components/Text/Text.svelte';

    let { icon, title } = $props();
</script>

<style lang="less">
    @import "src/components/Label/label.less";
</style>

<div class="label">
    {@render icon?.()}
    <Text typography="regular" size="large">{title}</Text>
</div>