<script>
  import { onMount } from "svelte";

  let theme = "dark";

  onMount(() => {
    theme = document.documentElement.classList.contains("light") ? "light" : "dark";
  });

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    if (document.documentElement.classList.contains("light")) {
      window.localStorage.setItem("theme", "light");
      theme = "light";
    } else {
      window.localStorage.setItem("theme", "dark");
      theme = "dark";
    }
  };
</script>

<template>
  <button
      class="ml-auto h-min underline decoration-accent text-base decoration-[3px] hover:text-accent hover:decoration-cl"
      on:click={toggleTheme}
  >
    { theme }
  </button>
</template>

<style>
  @media screen and (max-width: 630px) {
    button { @apply hidden; }
  }
</style>
