<script lang="ts">
  import { samplesStore } from "@/stores/data";
  import { activeAnnotationItemStore } from "@stores/annotation";
</script>

<div class="flex items-center gap-2">
  <span class="text-xs font-bold text-slate-700">
    Progress&nbsp;{$activeAnnotationItemStore + 1}/{$samplesStore.length}
  </span>
  <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
    <div
      style={`width: ${(($activeAnnotationItemStore + 1) / $samplesStore.length) * 100}%`}
      class="h-2.5 rounded-full bg-blue-500"
    ></div>
  </div>
</div>
