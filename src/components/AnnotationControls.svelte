<script lang="ts">
  import Icon from "@iconify/svelte";

  import {
    previousActiveAnnotationItem,
    nextActiveAnnotationItem,
  } from "@stores/annotation";
</script>

<div class="flex justify-center gap-2">
  <button class="button" onclick={previousActiveAnnotationItem}>
    <span class="inner">
      <Icon icon="mdi:arrow-left" class="mr-2 -ml-1.5 inline-block h-6 w-6" />
      Previous Sample
    </span>
  </button>

  <button class="button" onclick={nextActiveAnnotationItem}>
    <span class="inner">
      Next Sample
      <Icon icon="mdi:arrow-right" class="-mr-1.5 ml-2 inline-block h-6 w-6" />
    </span>
  </button>
</div>
