<script lang="ts">
    import Info from 'src/components/Icon/Info.svelte';
    import Delete from 'src/components/Icon/Delete.svelte';
    import Text from 'src/components/Text/Text.svelte';

    let { type = 'info', children, onDelete } = $props()
    const ICONS: Record<string, typeof Info> = {'info' : Info};
    const Icon = ICONS[type];
</script>

<style lang="less">
    @import "src/components/Notice/notice.less";
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