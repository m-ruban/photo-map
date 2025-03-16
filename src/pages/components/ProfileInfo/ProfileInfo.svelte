<script lang="ts">
    import Column from 'src/components/Column/Column.svelte';
    import Avatar from 'src/components/Avatar/Avatar.svelte';
    import Title from 'src/components/Title/Title.svelte';
    import Text from 'src/components/Text/Text.svelte';
    import Button from 'src/components/Button/Button.svelte';
    import NotificationsAdd from 'src/components/Icon/NotificationsAdd.svelte';
    import VSpace from 'src/components/VSpace/VSpace.svelte';

    import ArticleItem from 'src/pages/components/ArticleItem/ArticleItem.svelte';
    import NoticeButton from 'src/pages/components/NoticeButton/NoticeButton.svelte';
    
    function sendRequest() {
		console.log('sendRequest');
	}
</script>

<style lang="less">
    @import "src/pages/components/ProfileInfo/profile-info.less";
</style>

<Column xs="11" s="10" m="9" l="9" layout="horizontal-center">
    <div class="notification-button">
        <NoticeButton />
    </div>
    <div class="profile-info">
        <div class="profile-info-avatar">
            <Avatar src="https://i.pravatar.cc/150?img=13" alt="alt" radius="small" />
        </div>
        <div>
            <div>
                <Title typography="semibold" size="medium">angry_duck</Title>
            </div>
            <VSpace height="10" />
            <div>
                <Text typography="regular" size="medium">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes.
                </Text>
            </div>
            <VSpace height="20" />
            <div>
                <Button onclick={sendRequest} icon={NotificationsAdd}>Подписаться</Button>
            </div>
        </div>
    </div>
    <div class="profile-articles">
        <div class="profile-articles-date">
            <Title typography="medium" size="medium">2024</Title>
        </div>
        <div class="profile-articles-list">
            <div class="profile-articles-list-tile">
                <ArticleItem
                    layout="tile"
                    user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
                    article={{ 
                        id: '1', 
                        images: ['https://picsum.photos/seed/picsum/500/350', 'https://picsum.photos/500/350'],
                        point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                        description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
                    }}
                />
            </div>
            <div class="profile-articles-list-tile">
                <ArticleItem 
                    layout="tile"
                    user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
                    article={{ 
                        id: '1', 
                        images: ['https://picsum.photos/seed/test1/500/350'],
                        point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                        description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
                    }}
                />
            </div>
            <div class="profile-articles-list-tile">
                <ArticleItem
                    layout="tile"
                    user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
                    article={{ 
                        id: '1', 
                        images: ['https://picsum.photos/seed/test2/500/350'],
                        point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                        description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
                    }}
                />
            </div>
            <div class="profile-articles-list-tile">
                <ArticleItem
                    layout="tile"
                    user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
                    article={{ 
                        id: '1', 
                        images: ['https://picsum.photos/seed/test3/500/350'],
                        point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                        description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
                    }}
                />
            </div>
            <div class="profile-articles-list-tile">
                <ArticleItem
                    layout="tile"
                    user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
                    article={{ 
                        id: '1', 
                        images: ['https://picsum.photos/seed/test4/500/350'],
                        point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                        description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
                    }}
                />
            </div>
        </div>
    </div>
</Column>