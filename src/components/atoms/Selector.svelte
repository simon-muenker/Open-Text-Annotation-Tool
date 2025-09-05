<script lang="ts">
  import { store } from "@/store.ts";

  export let id: string;
  export let options: Array<string>;
  export let storeItem: string;

  let selection: string = options[0];

  store[storeItem].setKey(id, selection);
  const onChange = () => {
    store[storeItem].setKey(id, selection);
  };
</script>

<select
  id={storeItem + id}
  bind:value={selection}
  on:change={onChange}
  class="
    inline-flex w-auto rounded-lg border-2 text-left shadow-md
    {selection != options[0] ? 'border-emerald-500' : 'border-transparent'}
  "
>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
