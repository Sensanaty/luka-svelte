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

<style lang="scss">
  @mixin fontFamily($font-name, $font-path, $weight: normal, $style: normal) {
    @font-face {
      font-family: $font-name;
      src: url($font-path + '.eot');
      src: url($font-path + '.woff2') format('woff2'),
      url($font-path + '.woff') format('woff'),
      url($font-path + '.ttf') format('truetype');
      font-weight: $weight;
      font-style: $style;
      font-display: swap;
    }
  }

  // Roboto
  @include fontFamily("Roboto", "/fonts/Roboto/Roboto-Bold", bold);

  // Aeonik
  @include fontFamily("Aeonik", "/fonts/Aeonik/Aeonik-Bold", bold);
  @include fontFamily("Aeonik", "/fonts/Aeonik/Aeonik-Medium", 500);
</style>
