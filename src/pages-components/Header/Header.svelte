<script lang="ts">
    import Column from 'src/core-components/Column/Column.svelte';
    import Title from 'src/core-components/Title/Title.svelte';
</script>

<style lang="less">
    @import "src/pages-components/Header/header.less";
</style>

<Column m="1" l="1">
    <div class="header">
        <div class="logo"></div>
        <Title typography="semibold" size="medium">Photo Points</Title>
    </div>
</Column>