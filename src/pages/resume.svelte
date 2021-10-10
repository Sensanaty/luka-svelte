<div
  id="resume"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => document.body.style.overflow = "visible" }
>
  <h1>Resume</h1>
</div>

<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
</script>
