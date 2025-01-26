<script lang="ts">
  import { Router, Link, Route } from 'svelte5-router';
  import Counter from 'src/components/Counter.svelte';
  import Profile from 'src/components/Profile.svelte';

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
    <Link to="/profile">Profile</Link>
  </nav>
  <main>
    <div class="card">
      <Route path="/counter" component={Counter} />
      <Route path="/profile" component={Profile} />
      <Route path="/">HOME</Route>
    </div>
  </main>
</Router>

