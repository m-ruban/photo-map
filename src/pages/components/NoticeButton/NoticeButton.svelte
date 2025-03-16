<script lang="ts">
    import Button from 'src/components/Button/Button.svelte';
    import NotificationsEmpty from 'src/components/Icon/NotificationsEmpty.svelte';
    import NotificationsUnread from 'src/components/Icon/NotificationsUnread.svelte';
    import Dropdown from 'src/components/Dropdown/Dropdown.svelte';
    import NoticeList from 'src/components/NoticeList/NoticeList.svelte';

    interface NoticeButtonProps {
        haveUnreadNotifications?: boolean;
    }
    let buttonNoticeRef: HTMLElement | null = $state(null);
    let { haveUnreadNotifications = true }: NoticeButtonProps= $props();
</script>

<div bind:this={buttonNoticeRef}>
    <Button icon={haveUnreadNotifications ? NotificationsUnread : NotificationsEmpty} type="secondary" />
    <Dropdown activator={buttonNoticeRef} position="bottom-right">
        <NoticeList />
    </Dropdown>
</div>
