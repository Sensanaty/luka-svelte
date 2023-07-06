<script lang="ts">
  import Infobox from "@/components/Infobox.svelte";
</script>

<div class="flex flex-col">
  <div class="title-box lg:w-max">
    <h1>EZ 3D</h1>
  </div>

  <p class="leading-7 mb-4">
    <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> is a really cool library that lets you create interactive 3D scenes in the browser. I've always had an interest in 3D-related things, so I thought why not give it a try to do it myself?
  </p>

  <Infobox
    text="All examples below are loaded asynchronously to save on bandwith, so just click on the button to load the relevant example"
  />
</div>

<style>
  .title-box {
    @apply mb-4 pb-1 border-b-2 border-accent border-dotted text-3xl font-black;
  }
</style>
