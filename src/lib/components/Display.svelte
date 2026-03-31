<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string = "0";
    export let preview: string = "";

    const dispatch = createEventDispatcher();
    const handleHistory = () => dispatch("toggle");

</script>

<section class="text-right relative bg-primary-bg w-full pb-3 pt-12 rounded-xl px-4 text-2xl sm:text-3xl text-white flex justify-end">
    <button
        on:click={handleHistory}
        type="button"
        aria-label="history"
        class="absolute left-3.5 top-1 font-black text-neutral-700 cursor-pointer"
    >&#10226;</button>
    <span class="absolute max-w-[200px] w-[85%] overflow-x-auto whitespace-nowrap right-4 top-3 text-[1.4rem] text-neutral-700">{preview || ""}</span>
    <span
    class="block max-w-[250px] w-[85%] overflow-x-auto whitespace-nowrap text-right"
>
    {value || "0"}
</span>
</section>