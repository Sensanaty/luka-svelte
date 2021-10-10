<svelte:head>
  <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
</svelte:head>

<div
  id="contact"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => document.body.style.overflow = "visible" }
>
  <div id="icons">
    <a class="icon" href="https://github.com/Sensanaty" target="_blank" rel="noopener">
      <GithubIcon />
    </a>

    <a class="icon" href="https://linkedin.com/in/lukasalevic" target="_blank" rel="noopener">
      <LinkedinIcon />
    </a>

    <a class="icon" href="mailto:salevic@lu-ka.me?subject=%5Blu-ka.me%20email%5D" target="_blank" rel="noopener">
      <EmailIcon />
    </a>
  </div>

  <div id="form-area">
    <h1>Looking for a developer for your app?</h1>
    <h2>Feel free to send me a message through one of my socials above, or the form below</h2>

    <form name="contact" method="post">
      <label for="email">Email</label>
      <input name="email" type="email" id="email" placeholder="Email Address" bind:value={form.email}>

      <label for="message">Message</label>
      <textarea name="message" id="message" placeholder="What Did You Want To Discuss With Me?" bind:value={form.message}></textarea>

      <button on:click|preventDefault={sendForm}>Send</button>
    </form>
  </div>
</div>

<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import GithubIcon from "@/components/GithubIcon.svelte";
  import LinkedinIcon from "@/components/LinkedinIcon.svelte";
  import EmailIcon from "@/components/EmailIcon.svelte";

  export let form = {
    email: "",
    message: ""
  };

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }

  export async function sendForm() {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...form
      })
    }).then((response) => { console.log("response:", response ) })
    .catch((error) => { console.log("error:", error) })
  }
</script>

<style lang="scss">
  #contact {
    font-family: "Aeonik", sans-serif;
    font-weight: 500;
  }

  #icons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    padding: 15px 0;
    background: #313131;
    margin-top: 30px;
    margin-bottom: 60px
  }

  .icon {
    height: 100%;
  }

  :global(svg) {
    fill: #FFCA3A;
    height: 100%;
    width: auto;
    transition: all 110ms ease-in-out;

    &:hover {
      transform: translateY(2px);
    }
  }

  #form-area, form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  form {
    width: 50%;
  }

  label {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  input, textarea {
    background: #313131;
    align-self: center;
    font-size: 1.3rem;
    padding: 10px 15px;
    color: #FDFDFD;
    border: none;
    outline: 2px solid transparent;
    transition: all 110ms ease-in-out;
    font-family: "Aeonik", sans-serif;

    &:focus { outline: 1px solid #FFCA3A }
  }

  input {
    margin-bottom: 25px;
    width: 35%;

    &:-webkit-autofill {
      -webkit-text-fill-color: #FDFDFD;
      -webkit-box-shadow: 0 0 0 1000px #313131 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  textarea {
    resize: none;
    width: 75%;
    height: 300px;
  }

  button {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    background: #313131;
    color: #FFCA3A;
    border: none;
    cursor: pointer;
    font-size: 2.3rem;
    margin-top: 30px;
    padding: 10px 25px;
    transition: all 110ms ease-in-out;
    line-height: 1;

    &:hover { background: #373737 }
    &:active { transform: translateY(2px) }
  }
</style>

