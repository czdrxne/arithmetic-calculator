<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const click = (btn: string) => dispatch("press", btn);

</script>

<section class="grid grid-cols-[repeat(4,1fr)] gap-[10px]">
    {#each [
        "x^", "√", "C", "AC",
        "(", ")", "%", "÷",
        "7","8","9","x",
        "4","5","6","-",
        "1","2","3","+",
        "0",".","="
    ] as btn, i (i)}
        <button
            on:click={() => handleClick(btn)}
            type="button"
            class={`
                w-full sm:py-2 sm:px-6 sm:py-4 px-5 py-4 rounded-xl flex items-center justify-center cursor-pointer
                ${btn === "AC" || btn === "=" ? "bg-orange-400" : "bg-primary-bg"} 
                ${btn === "=" ? "col-span-2" : ""}
            `}
        >
            {@html btn}
        </button>
    {/each}
</section>