<script lang="ts">
  import {
    annotationsStore,
    annotationsStoreActiveItem,
  } from "@stores/annotation";

  import AnnotationItem from "@components/AnnotationItem.svelte";
  import AnnotationControls from "@components/AnnotationControls.svelte";
  import AnnotationProgress from "@components/AnnotationProgress.svelte";
</script>

<div class="mx-auto my-8 flex w-full flex-col sm:w-2/3 lg:my-12 lg:w-1/2">
  <div class="mb-4 lg:mb-8">
    <div class="rounded-lg border border-slate-300 bg-slate-100 p-4 lg:p-8">
      <table class="text-md mb-4 table-auto sm:text-lg">
        <thead class="text-xs font-bold">
          <tr>
            <td>identifier</td>
            <td>{$annotationsStoreActiveItem.id}</td>
          </tr>
          <tr class="text-slate-700">
            <td class="pt-2 pr-4 align-top font-bold">features</td>
          </tr>
        </thead>
        <tbody>
          {#each $annotationsStoreActiveItem.features as feature}
            <tr class="border-slate-300 text-slate-700">
              <td class="pt-2 pr-4 align-top font-bold">{feature.label}</td>
              <td class="pt-2">{feature.content}</td>
            </tr>
          {/each}
        </tbody>
      </table>
      <span class="mb-4 block text-lg font-bold">Annotation</span>
      <div class="flex items-center gap-8">
        {#each $annotationsStore as item}
          <AnnotationItem
            sampleID={$annotationsStoreActiveItem.id}
            annotation={item}
          />
        {/each}
      </div>
    </div>
  </div>

  <AnnotationControls />
  <AnnotationProgress />
</div>
