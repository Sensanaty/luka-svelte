<script>
  import "@/app.postcss";
  import "@/assets/variables.css";
  import "@/assets/global.css";

  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
</script>

<template>
  <div class="wrapper h-full grid">
    <Header />
    <div class="overflow-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
  .wrapper {
    grid-template: auto 1fr auto / 1fr;
  }
</style>
