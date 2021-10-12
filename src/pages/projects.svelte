<div
  id="projects"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => setTimeout(() => { document.body.style.overflow = "visible" }, 100 )}
>
  <h1>Projects</h1>
</div>

<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
</script>
