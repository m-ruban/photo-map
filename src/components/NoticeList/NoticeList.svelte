<script lang="ts">
    import Notice from 'src/components/Notice/Notice.svelte';
</script>

<div>
    <Notice type="info" onDelete={() => null}>
        Что-то там про рыбу 1
    </Notice>
    <Notice type="info" onDelete={() => null}>
        Что-то там про подписку и новое событие в ней 2
    </Notice>
    <Notice type="info" onDelete={() => null}>
        Что-то там про подписку 3
    </Notice>
    <Notice type="info" onDelete={() => null}>
        Что-то там про рыбу 1
    </Notice>
</div>