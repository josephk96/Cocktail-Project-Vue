<template>
	<div class="result-container">
		<div class="w-25 search-bar">
			<b-input-group>
				<b-dropdown slot="prepend" variant="info">
					<template slot="button-content">
						{{ searchBy }}
					</template>
					<b-dropdown-item @click="searchBy = search[0].name">{{
						search[0].name
					}}</b-dropdown-item>
					<b-dropdown-item @click="searchBy = search[1].name">{{
						search[1].name
					}}</b-dropdown-item>
					<b-dropdown-item @click="searchBy = search[2].name">{{
						search[2].name
					}}</b-dropdown-item>
				</b-dropdown>

				<b-form-input
					v-model="msg"
					placeholder="Enter your search term here"
				></b-form-input>
			</b-input-group>
		</div>
		<CocktailCard
			v-for="cocktail in cocktails"
			:key="cocktail.idDrink"
			:cocktail="cocktail"
		/>
	</div>
</template>

<script>
import EventService from '@/services/EventService.js';
import CocktailCard from '@/components/CocktailCard.vue';

export default {
	components: {
		CocktailCard
	},
	data() {
		return {
			msg: '',
			searchBy: 'Search By: ',
			cocktails: [],
			search: [
				{
					name: 'Name',
					id: 1
				},
				{
					name: 'Ingredient',
					id: 2
				},
				{
					name: 'Random',
					id: 3
				}
			]
		};
	},
	watch: {
		msg: function(newMsg) {
			EventService.searchCocktail(newMsg).then(response => {
				this.cocktails = response.data.drinks;
				console.log(this.cocktails);
				let checkIndex = this.cocktails.filter(function(x) {
					return x.length;
				});
				console.log(checkIndex);
			});
		}
	}
};
</script>

<style scoped>
.search-bar {
	margin-top: 3rem;
	justify-content: center;
	align-self: center;
}

.result-container {
	display: flex;
	flex-direction: column;
}
</style>
