{#key refresh}
  <div
       out:fade={ { duration: 90, easing: quadInOut } }
       in:fade={ { duration: 90, easing: quadInOut, delay: 100 } }
       on:introstart={ () => document.body.style.overflow = "hidden" }
       on:outroend={ () => document.body.style.overflow = "visible" }
  >
    <slot />
  </div>
{/key}

<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  export let refresh = "";
</script>

<style>
  div {
    height: 100%;
  }
</style>
