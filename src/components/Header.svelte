<script>
import ThemeToggler from "@/components/ThemeToggler.svelte";
</script>

<template>
  <header class="grid flex-wrap items-center bg-bg-highlight py-2 px-5 text-lg font-bold w-full">
    <h1>
      luka salević<span aria-hidden="true" class="select-none">...</span><span aria-hidden="true" class="ibeam select-none">|</span>
    </h1>

    <nav class="flex items-center">
      <a class="text-base h-min mx-1" href="/">home</a>
      <a class="text-base h-min mx-1" href="/resume">resume</a>
      <a class="text-base h-min mx-1" href="/shenanigans">shenanigans</a>
    </nav>

    <ThemeToggler />
  </header>
</template>

<style>
  header {
    grid-template: 1fr / 1fr min-content 1fr;
  }

  .ibeam { animation: blinker 1250ms step-start infinite }
  @keyframes blinker { 50% { opacity: 0 } }
</style>
