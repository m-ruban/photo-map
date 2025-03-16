<script lang="ts">
    import Container from 'src/components/Column/Container.svelte';
    import Header from 'src/pages/components/Header/Header.svelte';
    import SideBar from 'src/pages/components/SideBar/SideBar.svelte';
    import Map from 'src/pages/components/Map/Map.svelte';
</script>

<Container layout='full-page'>
    <Header search calendar />
    <Map />
    <SideBar />
</Container>