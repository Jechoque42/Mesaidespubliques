<script>
	const pageName="Mes aides publiques";
    import { onMount } from 'svelte';
    import { getAllAidesList50} from "./api/aides";
    import AideCard from './components/AideCard.svelte';

    let AidesList = [];
  
    // Get the data from the api, after the page is mounted.
    onMount(async () => {
      const res = await getAllAidesList50();
      // console.log(res)
      AidesList = res.aides;
    });
</script>

<main>
	<h1> {pageName}!</h1>
	<div class="row">
		{#each AidesList as aide }
		<AideCard aide={aide}></AideCard>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>