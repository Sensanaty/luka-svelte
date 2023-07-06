<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { createScene, stopScene } from "@/util/three/basic";

  let canvasWrapper;

  onMount(() => {
    createScene(canvasWrapper);
  });

  onDestroy(() => {
    stopScene();
  });
</script>

<div>
  <p class="mb-3">This is the simplest possible example, pretty much just a proof of concept copied straight from the three.js docs, with some small tweaks, like making it a torus, the wireframing, transparent background color.</p>
  <canvas style="height: 350px; width: 350px" class="rounded-full mx-auto" bind:this={canvasWrapper}></canvas>
</div>
