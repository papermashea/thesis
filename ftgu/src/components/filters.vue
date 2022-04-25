<template>
	<div class="search-bar">
		<input
			class="search-box"
			placeholder="Filter pokémon..."
			v-model="filterText"
		/>
	<p v-if="filteredPlants.length" class="plant-count">
		{{ filteredPlants.length }} Pokémon
	</p>
</div>
</template>

<script>
	
</script>