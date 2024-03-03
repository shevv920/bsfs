<script lang="ts">
  export let form: undefined | { error: string };
</script>

<div class="container">
  <h1>Sign-in</h1>
  <form method="POST">
    <input required type="text" name="username" placeholder="Username"/>
    <input required type="password" name="password" placeholder="Password"/>
    <button type="submit">Sign-in</button>
  </form>
  {#if form?.error}
    <p>{form?.error}</p>
  {/if}
</div>

<style lang="css">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
