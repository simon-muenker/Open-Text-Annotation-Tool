<script lang="ts">
  import { annotationsStoreActiveItem } from "@stores/annotation";
</script>

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
