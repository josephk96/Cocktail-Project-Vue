<template>
  <div>
    <div class="d-flex flex-row justify-content-center cocktail-card">
      <b-card
        :title="cocktailName"
        :img-src="cocktailPic"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem"
        class="mb-2 b-card-cocktail"
      >
        <b-card-text>
          <p
            v-for="ingr in ingredients"
            :key="ingr.ingredient"
          >{{ ingr.ingredient }} - {{ ingr.measure }}</p>
        </b-card-text>
      </b-card>
    </div>
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
      cocktailPic: this.cocktail.strDrinkThumb,
      ingredients: []
    };
  },
  mounted() {
    this.cocktailIngredients();
  },
  methods: {
    cocktailIngredients: function() {
      const ingrCount = 15;
      for (let i = 1; i <= ingrCount; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];

        if (
          ingredient &&
          measure &&
          ingredient.length > 0 &&
          measure.length > 0 &&
          measure !== "\n"
        ) {
          this.ingredients.push({ ingredient, measure });
        }
      }
    }
  }
};
</script>

<style lang="scss">
.cocktail-card {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
}
</style>
