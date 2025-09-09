<script lang="ts">
  import { surveyStore } from "@stores/survey";

  import SurveyItem from "@components/SurveyItem.svelte";
</script>

<div
  class="my-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-12 md:gap-y-24 lg:my-12"
>
  {#each surveyStore.get() as item}
    <SurveyItem {...item} />
  {/each}
</div>
