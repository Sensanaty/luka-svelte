<svelte:head>
  <title>LUKA</title>
  <meta name="description" content="Luka Salevic, or Sensanaty, is a freelance fullstack web developer skilled in Rails, Vue, React, and much more.">
</svelte:head>

<div
  id="home"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => document.body.style.overflow = "visible" }
>
  <div class="box black" id="about">
    <h1>L</h1>
    <a href="/about" class="link white" sveltekit:prefetch>ABOUT</a>
  </div>
  <div class="box white" id="projects">
    <h1>U</h1>
    <a href="/projects" class="link black" sveltekit:prefetch>PROJECTS</a>
  </div>
  <div class="box white" id="contact">
    <h1>K</h1>
    <a href="/contact" class="link black" sveltekit:prefetch>CONTACT</a>
  </div>
  <div class="box black" id="resume">
    <h1>A</h1>
    <a href="/resume" class="white" sveltekit:prefetch>RESUME</a>
  </div>
</div>

<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
</script>

<style lang="scss">
  #home {
    height: 100%;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    user-select: none;
  }

  .black { background: #272727; color: #FDFDFD }
  .white { background: #FDFDFD; color: #272727 }
  .box { display: grid }

  h1 {
    font-size: 11rem;
    grid-area: letter;
    text-align: center;
    line-height: 10.8rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: link;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 110ms ease-in-out;

    &:hover { color: #128A5D }
  }

  #about { grid-template: [letter] 1fr [link] 130px / 3fr [letter] 1fr [link] 130px }
  #projects { grid-template: [letter] 1fr [link] 130px / [link] 130px [letter] 1fr 3fr }
  #contact { grid-template: [link] 130px [letter] 1fr / 3fr [letter] 1fr [link] 130px }
  #resume { grid-template: [link] 130px [letter] 1fr / [link] 130px [letter] 1fr 3fr }

  #about h1 { align-self: flex-end ; justify-self: flex-start}
  #projects h1 { align-self: flex-end; justify-self: flex-end }
  #contact h1 { align-self: flex-start; justify-self: flex-start }
  #resume h1 { align-self: flex-start; justify-self: flex-end }

  @import "../assets/styles/index_media";
</style>
