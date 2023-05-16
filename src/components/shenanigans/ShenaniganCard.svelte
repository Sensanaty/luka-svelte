<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let route: string;
</script>

<a class="{$$restProps.class} flex flex-col items-start p-3 cursor-pointer bg-highlight hover:bg-zinc-800 no-underline text-cl" href="/shenanigans/{route}">
  <div class="mb-2 border-b-2 border-accent border-dotted w-full">
    <h1 class="text-2xl pb-1 font-black">{title}</h1>
  </div>
  <h2 class="font-bold">{subtitle}</h2>
</a>
