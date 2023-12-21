<script>

  import { enhance } from "$app/forms";

</script>

<form use:enhance method="post" action="?/login">
<input type="text" name="email" placeholder="email">
<input type="password" name="password" placeholder="password">
<button type="submit">Login</button>


</form>
