<script lang="ts">
    import { profile } from 'src/store/profile';

    const userProfile = {name: ''};
    const update = () => {
            $profile = { name: 'Admin'};
        }

    profile.subscribe(value => {
        userProfile.name = value.name;
    });
</script>

<style lang="less">
    button {
        color: red;
    }
    
    .test {
        color: red;

        & .test1 {
            color: orange;
        }
    }
</style>

<div class="test">
    test
    <div class="test1">test</div>
</div>

<button on:click={update}>
    User is {userProfile.name}
</button>
