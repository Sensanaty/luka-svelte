{#key refresh}
  <div id="transition-wrapper"
       out:fade={ { duration: 110, easing: quadInOut } }
       in:fade={ { duration: 110, easing: quadInOut, delay: 110 } }
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
  #transition-wrapper {
    height: 100%;
  }
</style>
