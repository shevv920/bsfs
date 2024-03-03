<script>
  import 'water.css';
  import { Navbar } from "~/widgets/navbar";
  export let data;
</script>
<Navbar isAuthed={!!data.user} />
<slot />
