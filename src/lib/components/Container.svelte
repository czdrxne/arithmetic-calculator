<script lang="ts">
    import Display from "@components/Display.svelte";
    import Buttons from "@components/Buttons.svelte";
    import History from "@components/History.svelte";
    import { initCalc, initPreview } from "@utilities/logic.ts";
    
    let value: string = "";
    let preview: string = "";
    let showHistory: boolean = false;

    let history: { expr: string; result: string }[] = [];

    function handlePress(btn: string): string {
        if (btn === "=") {
            try {
                const result = initCalc(value, btn);
                history = [
                    { expr: value, result },
                    ...history
                ];

                value = result;
                preview = "";
                return;
            } catch {
                value = "Error";
                return;
            }
        }
        value = initCalc(value, btn);
        preview = initPreview(value);
    };

    const toggleHistory = () => showHistory = !showHistory;

</script>

<div class="relative h-fit sm:w-fit sm:p-4 p-3 bg-secondary-bg rounded-3xl space-y-4 text-white">
    {#if showHistory}
        <History {history} on:select={(e) => {
            value = e.detail.expr;
            preview = e.detail.result;
            showHistory = false;
        }} />
    {/if}
    <Display on:toggle={toggleHistory} {value} {preview} />
    <Buttons on:press={(e) => handlePress(e.detail)} />
</div>

