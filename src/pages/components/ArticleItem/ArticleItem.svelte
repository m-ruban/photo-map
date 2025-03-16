<script lang="ts">
    import Avatar from 'src/components/Avatar/Avatar.svelte';
    import Link from 'src/components/Link/Link.svelte';
    import Text from 'src/components/Text/Text.svelte';
    import VSpace from 'src/components/VSpace/VSpace.svelte';
    import HSpace from 'src/components/HSpace/HSpace.svelte';
    import More from 'src/components/Icon/More.svelte';
    import Location from 'src/components/Icon/Location.svelte';
    import Favorite from 'src/components/Icon/Favorite.svelte';
    import Checklist from 'src/components/Icon/Checklist.svelte';
    import DeleteSecondary from 'src/components/Icon/DeleteSecondary.svelte';
    import Edit from 'src/components/Icon/Edit.svelte';
    import Report from 'src/components/Icon/Report.svelte';
    import Dropdown from 'src/components/Dropdown/Dropdown.svelte';
    import ActionCell from 'src/components/ActionCell/ActionCell.svelte';

    let { user, article, layout = 'tile' } = $props();
    const { avatar, login } = user;
    const { images, point, description } = article;
    let buttonMoreRef: HTMLElement | null = $state(null);;
</script>

<style lang="less">
    @import "src/pages/components/ArticleItem/article-item.less";
</style>

<div class={`article-item article-item_layout-${layout}`}>
    <div class="article-item-profile">
        <Avatar src={avatar} alt={login} size="small" radius="half" />
        <span class="article-item-profile-login">
            <Link href={`/profile/${login}`}>{login}</Link>
        </span>
        <div class="article-item-profile-actions" bind:this={buttonMoreRef}>
            <More />
        </div>
        <Dropdown activator={buttonMoreRef} position="bottom-right">
            <ActionCell icon={Edit} onClick={() => null}>Редактировать</ActionCell>
            <ActionCell icon={DeleteSecondary} onClick={() => null}>Удалить</ActionCell>
            <ActionCell icon={Report} onClick={() => null}>Пожаловаться</ActionCell>
        </Dropdown>
    </div>
    <VSpace height="15" />
    <div class="article-item-images">
        {#each images as image}
            <img class="article-item-image" src={image} alt={description}>
        {/each} 
    </div>
    <VSpace height="15" />
    <div class="article-item-location">
        <Location />
        <HSpace width="3" />
        <Text typography="regular" size="medium">{point.title}</Text>
    </div>
    <VSpace height="10" />
    <div>
        <Text typography="regular" size="medium">{description}</Text>
    </div>
    <VSpace height="15" />
    <div class="article-item-actions">
        <div class="article-item-actions-item">
            <Favorite />
            <HSpace width="3" />
            <Text typography="regular" size="medium">Лайк</Text>
        </div>
        <div class="article-item-actions-item">
            <Checklist />
            <HSpace width="3" />
            <Text typography="regular" size="medium">Хочу сюда</Text>
        </div>
    </div>
</div>