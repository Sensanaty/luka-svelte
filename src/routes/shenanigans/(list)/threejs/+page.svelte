<script lang="ts">
  import Divider from "@/components/Divider.svelte";
  import Infobox from "@/components/Infobox.svelte";

  type Examples = {
    basic: boolean,
    geometry: boolean,
  }

  let loadedExamples: Examples = {
    basic: false,
    geometry: false,
  };

  let shownExamples: Examples = {
    basic: false,
    geometry: false,
  };

  const toggleExample = (item: keyof Examples) => {
    loadedExamples[item] = true;
    shownExamples[item] = !shownExamples[item];
  };
</script>

<div class="flex flex-col">
  <div class="title-box lg:w-max">
    <h1>EZ 3D</h1>
  </div>

  <p class="leading-7 mb-4">
    <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> is a really cool library that lets you create interactive 3D scenes in the browser. I've always had an interest in 3D-related things, so I thought why not give it a try myself?
  </p>

  <Infobox
    text="All examples below are loaded asynchronously to save on bandwith & decrease load times, so just click on the button to load the relevant example"
  />

  <Divider class="mb-4" />

  <button class="activate-button" on:click={() => toggleExample("basic")}>
    Basic Example
  </button>

  {#if loadedExamples.basic && shownExamples.basic}
    {#await import("@/components/shenanigans/three/BasicExample.svelte")}
      <img src="/favicon/android-chrome-192x192.png" height="40" width="40" class="spinner" alt="Loading Spinner">
    {:then component}
      <svelte:component this={component.default} />
    {/await}
  {/if}


  <button class="activate-button" on:click={() => toggleExample("geometry")}>
    Geometry Example
  </button>

  {#if loadedExamples.geometry && shownExamples.geometry}
    {#await import("@/components/shenanigans/three/GeometryExample.svelte")}
      <img src="/favicon/android-chrome-192x192.png" height="40" width="40" class="spinner" alt="Loading Spinner">
    {:then component}
      <svelte:component this={component.default} />
    {/await}
  {/if}
</div>

<style>
  .activate-button {
    @apply bg-highlight w-fit px-4 py-3 mb-4 hover:bg-zinc-800 dark:hover:bg-amber-50;
  }

  .title-box {
    @apply mb-4 pb-1 border-b-2 border-accent border-dotted text-3xl font-black;
  }

  .spinner {
    animation: spin 1000ms ease-in-out infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg) }
    50% { transform: rotate(180deg) }
    100% { transform: rotate(360deg) }
  }

  .spinner {
    @apply mx-auto;
    transform: rotate(360deg);
  }
</style>
