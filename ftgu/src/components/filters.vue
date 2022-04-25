<template>
	<div class="search-bar">
		<input
			class="search-box"
			placeholder="Filter pokémon..."
			v-model="filterText"
		/>
	<p v-if="filteredPokemon.length" class="poke-count">
		{{ filteredPokemon.length }} Pokémon
	</p>
</template>

<script>
	
</script>