<script lang="ts">
  import { sectionsStore, surveyStore } from "@stores/data";

  import SurveyItem from "@components/SurveyItem.svelte";
</script>

<h2 class="sectionheading">
  {$sectionsStore.survey.headline}
</h2>

<p class="sectionparagraph">
  {$sectionsStore.survey.description}
  <br />
  <span class="text-sky-800 italic">
    E-Mail:
    <a href={"mailto:" + $sectionsStore.survey.contactMail}>
      {$sectionsStore.survey.contactMail}
    </a>
  </span>
</p>

<div
  class="my-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:my-12 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-24"
>
  {#each surveyStore.get() as item}
    <SurveyItem {...item} />
  {/each}
</div>
