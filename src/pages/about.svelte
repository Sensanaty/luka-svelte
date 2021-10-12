<div
  id="about"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => setTimeout(() => { document.body.style.overflow = "visible" }, 100 )}
>
  <div class="hello">
    <h1>Hi, I'm <a href="/" class="big">LUKA</a></h1>
    <h2>I'm a Fullstack Software Developer</h2>
  </div>

  <div class="links">
    <h3><span class="wide">Want to see what I've worked on? </span>See my <a href="/projects" class="small" sveltekit:prefetch>PROJECTS</a></h3>
    <h3><span class="wide">Want to talk about doing a project? </span>Get in <a href="/contact" class="small" sveltekit:prefetch>CONTACT</a></h3>
    <h3><span class="wide">Wanted to check out my resume? </span>See my <a href="/resume" class="small" sveltekit:prefetch>RESUME</a></h3>
  </div>
</div>


<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
</script>

<style lang="scss">
  #about {
    display: grid;
    grid-template: 1fr 1fr / 1fr;
    height: 100%;
    font-family: "Aeonik", serif;
  }

  .hello, .links { margin: 2% 3%}

  h1 { font-size: 7rem; margin-bottom: 10px }
  h2 { font-size: 5.5rem }
  h3 { font-size: 2.5rem; font-weight: 500; margin: 20px 0 }

  a {
    color: #FFCA3A;
    transition: all 110ms ease-in-out;
    font-family: Roboto, serif;
    background: lighten(#272727, 4);
    display: inline-block;
  }

  .links {
    text-align: right;
    align-self: flex-end;
  }

  .big {
    padding: 0 25px;

    &:hover { transform: translateX(5px) }
  }

  .small {
    margin-left: 10px;
    text-align: center;
    min-width: 212px;
    padding: 5px 15px;

    &:hover { transform: translateY(3px) }
  }

  @import "../assets/styles/about_media";
</style>
