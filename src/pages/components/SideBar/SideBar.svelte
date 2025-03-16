<script lang="ts">
    import Column from 'src/components/Column/Column.svelte';

    import Button from 'src/components/Button/Button.svelte';
    import AddLocation from 'src/components/Icon/AddLocation.svelte';
    import NoticeButton from 'src/pages/components/NoticeButton/NoticeButton.svelte';
    import ArticleItem from 'src/pages/components/ArticleItem/ArticleItem.svelte';
</script>

<style lang="less">
    @import "src/pages/components/SideBar/side-bar.less";
</style>

<Column xs="10" s="10" m="3" l="3">
    <div class="side-bar">
        <div class="side-bar-header">
            <div class="side-bar-header-add-item">
                <Button icon={AddLocation} type="primary" stretched>Добавить</Button>
            </div>
            <div><NoticeButton /></div>
        </div>
        <ArticleItem
            layout="default"
            user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
            article={{ 
                id: '1', 
                images: ['https://picsum.photos/seed/picsum/500/350', 'https://picsum.photos/500/350'],
                point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
            }}
        />
        <ArticleItem 
            layout="default"
            user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
            article={{ 
                id: '1', 
                images: ['https://picsum.photos/seed/test1/500/350'],
                point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
            }}
        />
        <ArticleItem
            layout="default"
            user={{ avatar: 'https://i.pravatar.cc/150?img=13', login: 'angry_duck' }} 
            article={{ 
                id: '1', 
                images: ['https://picsum.photos/seed/test2/500/350'],
                point: { lat: 1, long: 2, title: 'Сочи, ул. Ленина, д. 10'}, 
                description: 'Мы были в Сочи и там было не плохо, но могло быть лучше...'
            }}
        />
    </div>
</Column>