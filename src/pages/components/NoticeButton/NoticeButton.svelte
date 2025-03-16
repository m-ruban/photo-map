<script lang="ts">
    import Button from 'src/components/Button/Button.svelte';
    import NotificationsEmpty from 'src/components/Icon/NotificationsEmpty.svelte';
    import NotificationsUnread from 'src/components/Icon/NotificationsUnread.svelte';

    interface NoticeButtonProps {
        haveUnreadNotifications?: boolean;
    }

    let { haveUnreadNotifications = true }: NoticeButtonProps= $props();
</script>

<Button icon={haveUnreadNotifications ? NotificationsUnread : NotificationsEmpty} type="secondary" />