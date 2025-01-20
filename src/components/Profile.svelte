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

<button on:click={update}>
    User is {userProfile.name}
</button>