<script lang="ts">
  export let form: undefined | { error: string };
</script>

<div class="container">
  <h1>Sign-in</h1>
  <form method="POST">
    <input required type="email" name="email" placeholder="email@some-example.com"/>
    <input required type="password" name="password" placeholder="Password"/>
    <button type="submit">Sign-in</button>
  </form>
  {#if form?.error}
    <p class="error">{form?.error}</p>
  {/if}
</div>

<style lang="css">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .error {
    color: red;
  }
</style>
