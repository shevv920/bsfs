<script lang="ts">
  import { SignInSignOutButton } from "~/features/auth";

  export let isAuthed: boolean;
</script>

<nav>
  <a href="/">Home</a>
  <a href="/app">App</a>
  <SignInSignOutButton isAuthed={isAuthed} />
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
</style>
