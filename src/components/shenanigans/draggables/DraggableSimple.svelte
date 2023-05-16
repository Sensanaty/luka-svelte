<script lang="ts">
  function draggable(node: HTMLElement) {
    let moving = false;
    let top = 0;
    let left = 0;

    if (window.matchMedia("(max-width: 755px)").matches) {
      top = 180;
    } else if (window.matchMedia("(max-width: 910px)").matches) {
      top = 120;
    } else if (window.matchMedia("(max-width: 1185px)").matches) {
      top = 100;
    } else {
      top = 80;
    }

    node.style.top = `${top}px`;

    node.addEventListener("mousedown", () => {
      moving = true;
    });

    window.addEventListener("mousemove", (event) => {
      if (!moving) { return; }

      left += event.movementX;
      top += event.movementY;
      node.style.top = `${top}px`;
      node.style.left = `${left}px`;
      node.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--accent");
    });

    window.addEventListener("mouseup", () => {
      moving = false;
      node.style.borderColor = "transparent";
    });
  }
</script>


<div use:draggable class="absolute select-none border-2 border-transparent bg-highlight w-max cursor-grab mx-auto p-3">
  <h2 class="font-black">drag me!</h2>
</div>
