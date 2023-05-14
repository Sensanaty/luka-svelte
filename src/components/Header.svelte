<script>
  import ThemeToggler from "@/components/ThemeToggler.svelte";
  import { page } from "$app/stores";

  let path;

  $: path = $page.url.pathname;
</script>

<template>
  <header class="grid flex-wrap items-center bg-highlight py-2 px-5 text-lg font-bold w-full">
    <h1>
      luka salević<span aria-hidden="true" class="select-none">...</span><span aria-hidden="true" class="ibeam select-none">|</span>
    </h1>

    <nav class="flex items-center">
      <!--  eslint-disable quotes -->
      <a class="{path === '/' ? 'active' : ''} text-base h-min mx-1" href="/">home</a>
      <a class="{new RegExp(/\/shenanigans\/?.*/).test(path) ? 'active' : ''} text-base h-min mx-1" href="/shenanigans">shenanigans</a>
      <!--  eslint-enable quotes -->
    </nav>

    <ThemeToggler />
  </header>
</template>

<style>
  header {
    grid-template: 1fr / 1fr min-content 1fr;
  }

  .active {
    @apply text-accent no-underline;
  }

  .ibeam { animation: blinker 1250ms step-start infinite }
  @keyframes blinker { 50% { opacity: 0 } }

  @media screen and (max-width: 630px) {
    header { grid-template: 1fr / auto min-content; }
  }

  @media screen and (max-width: 445px) {
    header {
      @apply text-base;
      grid-template: 1fr 1fr / 1fr;
    }

    a { @apply decoration-2 mt-1; }
  }
</style>
