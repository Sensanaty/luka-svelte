<script lang="ts">
  let showPopup = false;

  async function copyText(): Promise<boolean> {
    const text = "salevic@lu-ka.me";

    try {
      await navigator.clipboard.writeText(text);

      return Promise.resolve(true);
    } catch (err) {
      console.error(err);

      return Promise.reject(false);
    }
  }

  const copy = async () => {
    copyText().then(() => {
      showPopup = true;

      setTimeout(() => {
        showPopup = false;
      }, 400);
    });
  };
</script>

<div class="header flex flex-col items-center justify-center lg:w-full overflow-auto bg-highlight mx-auto mb-6 p-7 h-min">
  <h1 class="text-3xl font-black mb-10">
    <!--  eslint-disable-next-line quotes  -->
    hi there, i'm <span class="luka relative text-accent text-4xl z-10 luka">Luka</span>
  </h1>

  <h2 class="text-2xl font-bold">
    fullstack software engineer, currently working at <a href="https://trengo.com">Trengo</a> in Utrecht
  </h2>
</div>

<div class="body flex flex-col items-center justify-center font-boldtext-lg">
  <p class="flex items-center mb-3">
    i love building cool stuff<span class="especially">, especially</span>&nbsp;with
    <span class="flex">
      <span class="text-ruby flex">
        <img src="/images/ruby.svg" class="mx-2" width="15" aria-hidden="true" alt=""> ruby
      </span>
      &nbsp;and
      <span class="text-accent flex">
        <img src="/images/javascript.svg" class="mx-2" width="15" aria-hidden="true" alt=""> javascript
      </span>
    </span>
  </p>

  <p class="mb-3">if you'd like to see my professional history, you can <a href="/assets/resume.pdf" download="Luka Salevic's Resume">download my resume here</a></p>
  <p class="mb-3">if you'd like to chat with me and find out more, feel free to reach me down below</p>
</div>

<div class="email relative flex items-center mx-auto text-accent font-black h-max">
  <h3 class="self-start bg-highlight px-4 py-3 text-2xl">salevic@lu-ka.me</h3>

  <button
    on:click={copy}
    aria-label="Copy Luka's email to your clipboard"
    class="flex items-center bg-highlight border-l-2 px-2 border-bg hover:bg-zinc-700 active:bg-zinc-600 h-full select-none"
  >
    copy me
  </button>

  {#if showPopup}
    <div class="notification absolute select-none" aria-hidden="true">copied!</div>
  {/if}
</div>

<style src="./+page.css"></style>
