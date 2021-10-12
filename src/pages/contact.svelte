<div
  id="contact"
  out:fade={{ duration: 100, easing: quadInOut }}
  in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
  on:introstart={ () => document.body.style.overflow = "hidden" }
  on:outroend={ () => setTimeout(() => { document.body.style.overflow = "visible" }, 100 )}
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
    <h1 class="looking">Looking for a developer for your app?</h1>
    <h2>Feel free to send me a message through one of my socials above, or via the form below</h2>

    {#if !sendStatus || sendStatus === "error"}
      {#if sendStatus === "error" }
        <h3 in:fade={{ duration: 100, easing: quadInOut, delay: 100 }} out:fade={{ duration:80, easing: quadInOut }}>
          Something went wrong, please try again
        </h3>
      {/if}

      <form
        in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
        out:fade={{ duration: 80, easing: quadInOut }}
        name="contact"
        method="POST"
      >
        <label for="email">Email</label>
        {#if emailError}
          <p transition:slide={{ duration: 80, easing: quadInOut }} class="error-text">{emailError}</p>
        {/if}
        <input
          name="email"
          type="email"
          on:focus={() => emailError = ""}
          on:blur={validateEmail}
          id="email"
          placeholder="Email Address"
          class:error={emailError}
          bind:value={form.email}
          autocomplete="off"
        >

        <label for="message">Message</label>
        {#if messageError}
          <p transition:slide={{ duration: 80, easing: quadInOut }} class="error-text">{messageError}</p>
        {/if}
        <textarea
          name="message"
          on:focus={() => messageError = ""}
          on:blur={validateMessage}
          id="message"
          placeholder="What did you want to discuss with me?"
          class:error={messageError}
          bind:value={form.message}
        ></textarea>

        <button type="submit" on:click|preventDefault={sendForm}>Send</button>
      </form>
        {:else if sendStatus === "sending"}
          <h1
            in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
            out:fade={{ duration: 80, easing: quadInOut }}
            class="status sending"
          >
            Sending the message
          </h1>

        {:else if sendStatus === "sent"}
          <h1
            in:fade={{ duration: 100, easing: quadInOut, delay: 100 }}
            out:fade={{ duration: 80, easing: quadInOut }}
            class="status sent"
          >
            Sent!
          </h1>
        {/if}
  </div>
</div>

<script>
  import { fade, slide } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import GithubIcon from "@/components/GithubIcon.svelte";
  import LinkedinIcon from "@/components/LinkedinIcon.svelte";
  import EmailIcon from "@/components/EmailIcon.svelte";

  export let form = { email: "", message: "" };
  export let emailError = "";
  export let messageError = "";
  export let sendStatus = null;

  export function validateEmail() {
    const emailRegex = /.+@.+\..+/;

    if (form.email && emailRegex.test(form.email)) {
      emailError = "";
      return true;
    } else if (!form.email) {
      emailError = "Please provide your email address";
      return false;
    } else if (!emailRegex.test(form.email)) {
      emailError = "The email you entered wasn't valid";
      return false;
    }
  }

  export function validateMessage() {
    messageError = "";

    if (!form.message) {
      messageError = "Please provide a message"
      return false;
    } else return true;
  }

  function validateForm() {
    const validEmail = validateEmail();
    const validMessage = validateMessage();

    return !!validEmail && !!validMessage;
  }

  export async function sendForm() {
    if (validateForm()) {
      sendStatus = "sending";

      await fetch("https://formspree.io/myylvapw", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          message: form.message
        }),
        headers: { "Accept": "application/json" }
      }).then(() => {
        sendStatus = "sent";
      })
        .catch((err) => {
          sendStatus = "error";
          console.log("err:", err.response);
        });
    }

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

  .icon { height: 100% }

  :global(svg) {
    fill: #FFCA3A;
    height: 100%;
    width: auto;
    transition: all 110ms ease-in-out;

    &:hover { transform: translateY(2px) }
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

  form { width: 50% }

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

    &.error { outline: 2px solid red }
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

  .status { text-align: center }
  h3 { font-size: 1.5rem; margin-bottom: 20px }
  .error-text { color: red; font-weight: bold; font-size: 1.2rem; margin: 0 0 25px 0 }
</style>

