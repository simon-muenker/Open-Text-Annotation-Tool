<script lang="ts">
  import { annotationStore } from "@stores/data";
  import { annotationsStoreActiveItem } from "@stores/annotation";

  import SampleItem from "@components/SampleItem.svelte";
  import AnnotationItem from "@components/AnnotationItem.svelte";
</script>

<div class="rounded-lg border border-slate-300 bg-slate-100 p-4 lg:p-8">
  <SampleItem />
  <span class="mb-4 block text-lg font-bold">Annotations</span>
  <div class="flex flex-col gap-8 md:flex-row md:items-center">
    {#each $annotationStore as item}
      <AnnotationItem
        sampleID={$annotationsStoreActiveItem.id}
        annotation={item}
      />
    {/each}
  </div>
</div>
