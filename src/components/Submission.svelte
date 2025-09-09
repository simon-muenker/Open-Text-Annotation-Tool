<script lang="ts">
  import { downloadAsJSON } from "@common/json";

  import { surveyReplyStore } from "@stores/survey";
  import { annotationReplyStore } from "@stores/annotation";
</script>

<button
  id="downloadData"
  class="button"
  onclick={() =>
    downloadAsJSON({
      survey: surveyReplyStore.get(),
      annotations: annotationReplyStore.get(),
    })}
>
  <span class="cutout"> 1. Download data </span>
</button>

<a
  class="ml-4 text-gray-600 underline underline-offset-8"
  href="https://seafile.rlp.net/u/d/e2a60cab32854c2d8e7a/"
  target="_blank">2. Upload to Cloud</a
>
