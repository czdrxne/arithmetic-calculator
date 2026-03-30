<script lang="ts">
    export let value: string = "0";
    export let preview: string = "";
</script>

<section class="text-right relative bg-primary-bg w-full pb-3 pt-12 rounded-xl px-4 text-2xl sm:text-3xl text-white">
    <span class="absolute right-4 top-3 text-[1.4rem] text-neutral-700">{preview || ""}</span>
    <span>{value || "0"}</span>
</section>