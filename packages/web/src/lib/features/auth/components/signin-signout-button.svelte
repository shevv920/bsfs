<script lang="ts">
  export let isAuthed: boolean;
</script>


{#if isAuthed}
  <a href="/auth/sign-out">Sign out</a>
{:else}
  <a href="/auth/sign-in">Sign in</a>
{/if}
