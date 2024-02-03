<script>
  import 'water.css';
  export let data;
</script>
<nav>
  <a href="/">Home</a>
  <a href="/app">App</a>
  <div>
    {#if !data.user}
      <a href="/auth/sign-in">Sign in</a>
    {:else}
      <a href="/auth/sign-out">Sign out</a>
    {/if}
  </div>
</nav>
<slot />