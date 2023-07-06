<script lang="ts">
  export let text: string;
  export let type: "info" | "warning" = "info";
</script>

<div class="bg-highlight px-3 py-2 mb-5 flex items-center w-fit">
  <!--  eslint-disable quotes  -->
  <span
    class="rounded-full border-2 px-2 mr-4 select-none {type === 'info' ? 'border-accent' : 'border-rose-600'}"
    aria-hidden="true"
  >
  <!--  eslint-enable quotes  -->
    {#if type === "info"}
      i
    {:else}
      !
    {/if}
  </span>

  <p>{text}</p>
</div>
