<script lang="ts">
    import Info from 'src/core-components/Icon/Info.svelte';
    import Delete from 'src/core-components/Icon/Delete.svelte';
    import Text from 'src/core-components/Text/Text.svelte';

    let { type = 'info', children, onDelete } = $props()
    const ICONS: Record<string, typeof Info> = {'info' : Info};
    const Icon = ICONS[type];
</script>

<style lang="less">
    @import "src/core-components/Notice/notice.less";
</style>

<div class={`notice notice_type-${type}`}>
    <div><Icon /></div>
    <div><Text typography="regular" size="medium">{@render children?.()}</Text></div>
    <div class="notice-button-wrapper">
        <button class="notice-button" onclick={onDelete}>
            <Delete />
        </button>
    </div>
</div>