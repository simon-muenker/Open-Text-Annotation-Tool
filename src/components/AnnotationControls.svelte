<script lang="ts">
  import Icon from "@iconify/svelte";

  import {
    previousActiveAnnotationItem,
    nextActiveAnnotationItem,
  } from "@stores/annotation";
</script>

<div class="mt-4 flex justify-center gap-2">
  <button class="button" onclick={previousActiveAnnotationItem}>
    <span class="cutout">
      <Icon icon="mdi:arrow-left" class="mr-2 -ml-1.5 inline-block h-6 w-6" />
      Previous Post
    </span>
  </button>

  <button class="button" onclick={nextActiveAnnotationItem}>
    <span class="cutout">
      Next Post
      <Icon icon="mdi:arrow-right" class="-mr-1.5 ml-2 inline-block h-6 w-6" />
    </span>
  </button>
</div>
