<script lang="ts">
  import { downloadAsJSON } from "@common/json";

  import { sectionsStore } from "@stores/data";
  import { surveyReplyStore } from "@stores/survey";
  import { annotationReplyStore } from "@stores/annotation";
</script>

<h2 class="sectionheading">
  {$sectionsStore.submission.headline}
</h2>

<p class="sectionparagraph">
  {$sectionsStore.submission.description}
</p>

<button
  id="downloadData"
  class="button"
  onclick={() =>
    downloadAsJSON({
      survey: surveyReplyStore.get(),
      annotations: annotationReplyStore.get(),
    })}
>
  <span class="inner"> 1. Download data </span>
</button>

<a
  class="ml-4 text-gray-600 underline underline-offset-8"
  href={$sectionsStore.submission.uploadUrl}
  target="_blank">2. Upload to Cloud</a
>
