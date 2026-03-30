<script lang="ts">
    import Display from "@components/Display.svelte";
    import Buttons from "@components/Buttons.svelte";
    import { init } from "@utilities/logic.ts";

    let value: string = "";

    const handlePress = (btn: string): string => value = init(value, btn);

</script>

<div class="h-fit sm:w-fit sm:p-4 p-3 bg-secondary-bg rounded-3xl space-y-4 text-white">
    <Display value={value} />
    <Buttons on:press={(e) => handlePress(e.detail)} />
</div>