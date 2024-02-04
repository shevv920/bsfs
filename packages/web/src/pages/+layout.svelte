<script>
  import 'water.css';
  import SignInSignOutButton from '~/features/auth/components/signin-signout-button.svelte';
  export let data;
</script>
<nav>
  <a href="/">Home</a>
  <a href="/app">App</a>
  <SignInSignOutButton isAuthed={!!data.user} />
</nav>
<slot />

<style>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
</style>
