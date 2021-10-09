<div id="error">
  <h2 aria-label="Frowny Face">:(</h2>
  <h3>It seems that we got lost somewhere...</h3>
  <h3>Let's head back to <a href="/">safety!</a></h3>
</div>

<style lang="scss">
  #error {
    height: 100%;
    font-family: "Roboto", serif;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  a {
    color: #128A5D;
    text-decoration: underline transparent;
    transition: all 110ms ease-in-out;

    &:hover { text-decoration: underline #128A5D }
  }

  h2 { font-size: 12rem; user-select: none; transform: rotate(90deg) }
  h3 { font-size: 4rem }

  @media screen and (max-width: 1200px) { h3 { font-size: 3rem } }
  @media screen and (max-width: 890px) { h3 { font-size: 2rem } }
  @media screen and (max-width: 600px) { h3 { font-size: 1.5rem } }
  @media screen and (max-width: 445px) { h3 { font-size: 5.5vw } }
</style>
