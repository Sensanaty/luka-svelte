<script lang="ts">
  import ShenaniganCard from "@/components/shenanigans/ShenaniganCard.svelte";
  import shenaniganList from "@/data/shenanigans";

  let shenanigans = shenaniganList;
</script>

<div>
  <h1 class="mb-5">
    This page serves as a sort of central hub for any random things I want to play around with, be it random WebGL
    experiments, playing around with 3D/canvas stuff or trying out random node packages. Basically just a random
    collection of fun stuff done to expand my knowledge in one way or another
  </h1>

  <div class="grid-area grid grid-cols-3 gap-2 gap-y-5 w-full">
    {#each shenanigans as shenanigan}
      <ShenaniganCard title={shenanigan.title} subtitle={shenanigan.subtitle} route={shenanigan.route} />
    {/each}
  </div>
</div>

<style>
  @media screen and (max-width: 800px) {
    .grid-area { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media screen and (max-width: 545px) {
    .grid-area { grid-template-columns: repeat(1, minmax(0, 1fr)); }
  }
</style>

