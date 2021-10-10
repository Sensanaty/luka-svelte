<svelte:head>
  <title>LUKA</title>
  <meta name="description" content="Luka Salevic, or Sensanaty, is a freelance fullstack web developer skilled in Rails, Vue, React, and much more.">
</svelte:head>

<div id="home">
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
  <div class="box black" id="random">
    <h1>A</h1>
    <a href="/resume" class="white" sveltekit:prefetch>RESUME</a>
  </div>
</div>

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

  #about { grid-template: 1fr [letter] 1fr [link] 130px / 3fr [letter] 1fr [link] 130px }
  #projects { grid-template: 1fr [letter] 1fr [link] 130px / [link] 130px [letter] 1fr 3fr }
  #contact { grid-template: [link] 130px [letter] 1fr 1fr / 3fr [letter] 1fr [link] 130px }
  #random { grid-template: [link] 130px [letter] 1fr 1fr / [link] 130px [letter] 1fr 3fr }
  #about h1, #projects h1 { align-self: flex-end }
  #contact h1, #random h1 { align-self: flex-start }

  @import "../assets/styles/index_media";
</style>
