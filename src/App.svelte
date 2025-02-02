<script lang="ts">
  import { Router, Route } from 'svelte5-router';
  import Login from 'src/pages-components/Login.svelte';
  import Registration from 'src/pages-components/Registration.svelte';

  export let url = "";
</script>

<Router {url}>
  <main>
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/">HOME</Route>
  </main>
</Router>
