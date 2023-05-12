<script lang="ts">
  import "@/app.postcss";
  import "@/assets/variables.css";
  import "@/assets/global.css";

  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";

  import { fade } from "svelte/transition";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<template>
  <div class="wrapper h-full grid">
    <Header />

    {#key data.url}
      <div in:fade={{ duration: 100, delay: 101 }} out:fade={{ duration: 100 }} class="slot-wrapper flex flex-col mx-7 my-6">
        <slot />
      </div>
    {/key}

    <Footer />
  </div>
</template>

<style>
  .wrapper {
    grid-template: auto 1fr auto / 1fr;
  }

  @media screen and (max-width: 430px) {
    .slot-wrapper { @apply mx-1; }
  }
</style>
