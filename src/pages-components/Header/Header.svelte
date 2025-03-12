<script lang="ts">
    import Column from 'src/core-components/Column/Column.svelte';
    import Title from 'src/core-components/Title/Title.svelte';

    import Button from 'src/core-components/Button/Button.svelte';
    import Account from 'src/core-components/Icon/Account.svelte';
    import Settings from 'src/core-components/Icon/Settings.svelte';
    import Logout from 'src/core-components/Icon/Logout.svelte';
    import ActionCell from 'src/core-components/ActionCell/ActionCell.svelte';
    import Dropdown from 'src/core-components/Dropdown/Dropdown.svelte';

    let buttonActionRef: HTMLElement | null = $state(null);;
</script>

<style lang="less">
    @import "src/pages-components/Header/header.less";
</style>

<Column m="1" l="1">
    <div class="header">
        <div class="logo"></div>
        <Title typography="semibold" size="small">Photo Points</Title>
        <div class="bottom" bind:this={buttonActionRef}>
            <Button icon={Account} type="secondary" />
        </div>
        <Dropdown activator={buttonActionRef} position="top-left">
            <ActionCell icon={Settings} onClick={() => null}>Настройки</ActionCell>
            <ActionCell icon={Logout} onClick={() => null}>Выйти</ActionCell>
        </Dropdown>
    </div>
</Column>