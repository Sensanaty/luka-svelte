{#if $page.path === "/projects" || $page.path === "/contact" || $page.path === "/resume" }
  <nav in:slide={ { duration: 120, easing: quadInOut } }
       out:slide={ { duration: 80, easing: quadInOut } }
       on:introstart={ () => document.body.style.overflow = "hidden" }
       on:outroend={ () => document.body.style.overflow = "visible" }
  >
    <a href="/" sveltekit:prefetch>LUKA</a>
    <a class:active="{$page.path === '/projects'}" href="/projects" sveltekit:prefetch>PROJECTS</a>
    <a class:active="{$page.path === '/contact'}" href="/contact" sveltekit:prefetch>CONTACT</a>
    <a class:active="{$page.path === '/resume'}" href="/resume" sveltekit:prefetch>RESUME</a>
    <a href="/about" sveltekit:prefetch>ABOUT</a>
  </nav>
{/if}

<script>
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import {quadInOut} from "svelte/easing";
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFCA3A;
    background: #313131;
    font-size: 2.2rem;
    height: 60px;
    min-width: 17%;
    text-align: center;
    border-top: 2px solid #272727;
    transition: all 110ms ease-in-out;

    &:hover { transform: translateY(2px) }
  }

  .active {
    background: #383838;
    border-top: 2px solid #FFCA3A;
  }
</style>
