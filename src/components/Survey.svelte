<script lang="ts">
  import { surveyStore } from "@stores/data";

  import SurveyItem from "@components/SurveyItem.svelte";
</script>

<div
  class="my-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:my-12 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-24"
>
  {#each surveyStore.get() as item}
    <SurveyItem {...item} />
  {/each}
</div>
