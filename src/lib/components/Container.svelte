<script lang="ts">
    import Display from "@components/Display.svelte";
    import Buttons from "@components/Buttons.svelte";
    import { initCalc, initPreview } from "@utilities/logic.ts";

    let value: string = "";
    let preview: string = "";

    function handlePress(btn: string): string {
        value = initCalc(value, btn);
        preview = initPreview(value);
    };

</script>

<div class="h-fit sm:w-fit sm:p-4 p-3 bg-secondary-bg rounded-3xl space-y-4 text-white">
    <Display {value} {preview} />
    <Buttons on:press={(e) => handlePress(e.detail)} />
</div>