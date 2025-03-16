<script lang="ts">
    import Column from 'src/components/Column/Column.svelte';
    import Title from 'src/components/Title/Title.svelte';

    import Button from 'src/components/Button/Button.svelte';
    import Account from 'src/components/Icon/Account.svelte';
    import Settings from 'src/components/Icon/Settings.svelte';
    import Calendar from 'src/components/Icon/Calendar.svelte';
    import Search from 'src/components/Icon/Search.svelte';
    import Logout from 'src/components/Icon/Logout.svelte';
    import ActionCell from 'src/components/ActionCell/ActionCell.svelte';
    import Dropdown from 'src/components/Dropdown/Dropdown.svelte';

    let { search = false, calendar = false } = $props();
    let buttonActionRef: HTMLElement | null = $state(null);
</script>

<style lang="less">
    @import "src/pages/components/Header/header.less";
</style>

<Column m="1" l="1">
    <div class="header">
        <div class="logo"></div>
        <Title typography="semibold" size="small">Photo Points</Title>
        <div class="bottom">
            {#if search}
                <div class="bottom-item">
                    <Button icon={Search} type="secondary" />
                </div>
            {/if}
            {#if calendar}
                <div class="bottom-item">
                    <Button icon={Calendar} type="secondary" />
                </div>
            {/if}
            <div class="bottom-item" bind:this={buttonActionRef}>
                <Button icon={Account} type="secondary" />
            </div>
        </div>
        <Dropdown activator={buttonActionRef} position="top-left">
            <ActionCell icon={Settings} onClick={() => null}>Настройки</ActionCell>
            <ActionCell icon={Logout} onClick={() => null}>Выйти</ActionCell>
        </Dropdown>
    </div>
</Column>