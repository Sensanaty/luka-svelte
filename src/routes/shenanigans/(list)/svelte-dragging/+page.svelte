<script lang="ts">
  import DraggableSimple from "@/components/shenanigans/draggables/DraggableSimple.svelte";
</script>

<div class="flex flex-col">
  <div class="mb-4 pb-1 border-b-2 border-accent w-max">
    <h1 class="text-3xl font-black">Window Dragging In Svelte</h1>
  </div>

  <div class="relative">
    <p>
      Here's the simplest possible example, one that features crude but functional element-dragging anywhere on
      the page. While not very useful on its own, it is cool how simple it is to achieve with only around a dozen
      lines of code (especially if we ignore the parts that make the below look a bit nicer. You can view the implementation
      <a target="_blank" rel="noopener" href="https://github.com/Sensanaty/luka-svelte/blob/master/src/components/shenanigans/draggables/DraggableSimple.svelte">here</a>.
    </p>

    <DraggableSimple />
  </div>
</div>
