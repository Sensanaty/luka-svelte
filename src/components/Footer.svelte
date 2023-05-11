<script lang="ts">
  import { onMount } from "svelte";

  let monkey;
  let shouldAnimate;
  let showTooltip = false;
  let disableText = "";
  $: disableText = shouldAnimate ? "click me to disable the animation!" : "click me to enable the animation!";

  onMount(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (localStorage.getItem("noAnimate") || prefersReduce.matches) {
      monkey.classList.remove("animate");
      shouldAnimate = false;
    } else {
      monkey.classList.add("animate");
      shouldAnimate = true;
    }
  });

  const toggleAnimation = () => {
    monkey.classList.toggle("animate");
    shouldAnimate = !shouldAnimate;

    shouldAnimate ? localStorage.removeItem("noAnimate") : localStorage.setItem("noAnimate", "true");
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      toggleAnimation();
    }
  };
</script>

<template>
  <footer class="grid flex-wrap items-center bg-bg-highlight w-full py-2 px-5 text-lg font-bold">
    <div
      class="flex flex-row items-center text-sm select-none"
    >
      <button
          on:keydown={handleEnter}
          on:focus={() => showTooltip = true}
          on:blur={() => showTooltip = false}
          on:click={toggleAnimation}
      >
        <img
          on:mouseenter={() => showTooltip = true}
          on:mouseleave={() => showTooltip = false}
          bind:this={monkey}
          class="h-6 cursor-pointer mr-1 animate"
          src="/favicon/android-chrome-192x192.png"
          alt="A pixelated cartoon monkey face rotating periodically. Luka uses this as his profile picture anywhere he has one."
      ></button>
      {#if showTooltip}
        <span class="text-accent dark:text-black">{ disableText }</span>
      {/if}
    </div>

  <nav class="justify-self-end">
    <a href="https://github.com/Sensanaty" rel="noopener" target="_blank">github</a>
    <a href="https://linkedin.com/in/lukasalevic" rel="noopener" target="_blank">linkedin</a>
  </nav>
  </footer>
</template>

<style>
  footer {
    grid-template: 1fr / 1fr 1fr;
  }

  .animate {
    animation: sway 1000ms linear infinite;
  }

  @keyframes sway {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(49deg) }
    50% { transform: rotate(0deg) }
    75% { transform: rotate(-41deg) }
    100% { transform: rotate(0deg) }
  }
</style>
