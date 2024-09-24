<script lang="ts">
  import {store} from "@/store.ts";

	export let id: string;
  export let options:Array<string>;
  export let storeItem: string;

  let selection: string = options[0];

  store[storeItem].setKey(id, selection);
  const onChange = () => {
    store[storeItem].setKey(id, selection);
	}
</script>

<select id={storeItem + id} bind:value={selection} on:change={onChange} class="inline-flex cursor-pointer select-none appearance-none w-auto rounded-lg py-2 pl-3 pr-10 text-left shadow-md">
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
  
<style>
  select {
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position:
      calc(100% - 20px) calc(1px + 50%),
      calc(100% - 16.1px) calc(1px + 50%);
    background-size:
      4px 4px,
      4px 4px;
    background-repeat: no-repeat;
  }
</style>