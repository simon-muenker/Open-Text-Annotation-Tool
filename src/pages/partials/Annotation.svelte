<script lang="ts">
  import { sectionsStore } from "@/stores/data";

  import AnnotationBox from "@components/AnnotationBox.svelte";
  import AnnotationControls from "@components/AnnotationControls.svelte";
  import AnnotationProgress from "@components/AnnotationProgress.svelte";
</script>

<h2 class="sectionheading">
  {$sectionsStore.annotation.headline}
</h2>

<p class="sectionparagraph">
  {$sectionsStore.annotation.description}
</p>

<div class="mx-auto my-8 flex w-full flex-col sm:w-2/3 lg:my-12 lg:w-1/2">
  <AnnotationBox />

  <div class="block h-8"></div>

  <AnnotationControls />

  <div class="block h-8"></div>

  <AnnotationProgress />
</div>
