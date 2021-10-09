<slot />

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
  @include fontFamily("Roboto", "../assets/fonts/Roboto/Roboto-Bold", bold)
</style>
