<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let history = [];

    const dispatch = createEventDispatcher();
    const close = () => dispatch("close");

    const selectItem = (item) => {
        dispatch("select", item);
    }

</script>

<section class="absolute top-0 -right-55 z-[1] w-50 h-35 bg-secondary-bg rounded-3xl p-2 overflow-y-auto">
    {#each history as item, i (i)}
        <p
            class="cursor-pointer hover:bg-neutral-700 p-2 border-b-1 border-solid border-neutral-700"
            on:click={() => selectItem(item)}
        >
            {item.expr} = {item.result}
        </p>
    {/each}
</section>