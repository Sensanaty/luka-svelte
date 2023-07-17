<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { createScene, stopScene, cameraSlide, cameraRotate } from "@/util/three/geometry";

  let canvasWrapper;
  let positionX = 0;
  let positionY = 0;
  let positionZ = 0;
  let rotationX = 0;
  let rotationY = 0;
  let rotationZ = 0;

  $: cameraSlide(positionX, positionY, positionZ);
  $: cameraRotate(rotationX, rotationY, rotationZ);

  onMount(() => {
    createScene(canvasWrapper);
  });

  onDestroy(() => {
    stopScene();
  });
</script>

<div id="canvasWrapper">
  <p class="mb-3">In this example I played around with generating some randomized geometry on a plane, as well as dealing with rudimentary control systems using some sliders.</p>

  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-black">camera position</h1>

    <div class="flex flex-row items-center w-full justify-evenly my-2">
      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="-250" max="250" bind:value={positionX} />
        x: { positionX }
      </div>

      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="-50" max="50" bind:value={positionY} />
        y: { positionY }
      </div>

      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="-250" max="250" bind:value={positionZ} />
        z: { positionZ }
      </div>
    </div>

    <h1 class="text-2xl font-black">camera rotation</h1>

    <div class="flex flex-row items-center w-full justify-evenly my-2">
      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="{-Math.PI}" max="{Math.PI}" step="0.001" bind:value={rotationX} />
        x: { rotationX.toFixed(2) }
      </div>

      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="{-Math.PI}" max="{Math.PI}" step="0.001" bind:value={rotationY} />
        y: { rotationY.toFixed(2) }
      </div>

      <div class="flex flex-col items-center">
        <input class="mb-2" type="range" min="{-Math.PI}" max="{Math.PI}" step="0.01" bind:value={rotationZ} />
        z: { rotationZ.toFixed(2) }
      </div>
    </div>
  </div>

  <canvas id="canvas" class="w-full h-[650px]" bind:this={canvasWrapper}></canvas>
</div>
