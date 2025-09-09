<script lang="ts">
  import {
    type SurveyItem,
    getSurveyReply,
    setSurveyReply,
  } from "@stores/survey";

  let { id, label, options, description = undefined }: SurveyItem = $props();
  let response: string = $state(getSurveyReply(id).response);
</script>

<div>
  <label for={id} class="mb-2 block font-medium text-slate-700">{label}</label>
  <select
    {id}
    bind:value={response}
    onchange={() => setSurveyReply(id, response)}
    class="
      inline-flex w-auto rounded-lg border-2 text-left shadow-md
      {response != options[0] ? 'border-emerald-500' : 'border-transparent'}
    "
  >
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {#if description != undefined}
    <span class="mt-4 block text-sm">
      {description}
    </span>
  {/if}
</div>
