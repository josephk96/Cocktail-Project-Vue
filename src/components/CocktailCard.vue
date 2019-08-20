<template>
	<div class="d-flex flex-row justify-content-center cocktail-card">
		<b-card
			:title="cocktailName"
			img-src="https://picsum.photos/600/300/?image=25"
			img-alt="Image"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-2"
		>
			<b-card-text>
				<p v-for="ingr in ingredients">
					{{ ingr.ingredient }} - {{ ingr.measure }}
				</p>
			</b-card-text>

			<b-button href="#" variant="primary">Go somewhere</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	props: {
		cocktail: Object
	},
	data() {
		return {
			cocktailName: this.cocktail.strDrink,
			ingredients: []
		};
	},
	mounted() {
		this.cocktailIngredients()
	},
	methods: {
		cocktailIngredients: function() {
			const ingrCount = 15;
			for (let i = 1; i <= ingrCount; i++) {
				const ingredient = this.cocktail[`strIngredient${i}`];
				const measure = this.cocktail[`strMeasure${i}`];

				if (ingredient.length > 0 && measure.length > 0 && measure !== '\n') {
					this.ingredients.push({ ingredient, measure });
				}
			}
		}
	}
};
</script>

<style lang="scss">
.cocktail-card {
	margin-top: 5rem;
	margin-bottom: 5rem;
}
</style>
