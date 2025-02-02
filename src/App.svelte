<script lang="ts">
  import { Router, Route } from 'svelte5-router';
  import Login from 'src/pages/Login.svelte';

  export let url = "";
</script>

<Router {url}>
  <main>
    <Route path="/login" component={Login} />
    <Route path="/">HOME</Route>
  </main>
</Router>
