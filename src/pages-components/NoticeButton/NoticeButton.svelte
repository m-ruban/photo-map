<script lang="ts">
    import Button from 'src/core-components/Button/Button.svelte';
    import NotificationsEmpty from 'src/core-components/Icon/NotificationsEmpty.svelte';
    import NotificationsUnread from 'src/core-components/Icon/NotificationsUnread.svelte';

    let { haveUnreadNotifications = true } = $props();
</script>

<Button icon={haveUnreadNotifications ? NotificationsUnread : NotificationsEmpty} type="secondary" />