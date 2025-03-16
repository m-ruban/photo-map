<script lang="ts">
  import { Router, Route } from 'svelte5-router';
  import Login from 'src/pages/Login.svelte';
  import Registration from 'src/pages/Registration.svelte';
  import Profile from 'src/pages/Profile.svelte';
  import Map from 'src/pages/Map.svelte';

  export let url = "";
</script>

<Router {url}>
  <main>
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/profile" component={Profile} />
    <Route path="/map" component={Map} />
    <Route path="/">HOME</Route>
  </main>
</Router>
