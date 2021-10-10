<PageTransition refresh="{routeKey}">
  <slot />
</PageTransition>

<script>
  import PageTransition from "@/components/PageTransition.svelte";
  export let routeKey;
</script>

<script context="module">
  export const load = async ({ page }) => ({
    props: {
      routeKey: page.path,
    },
  })
</script>
