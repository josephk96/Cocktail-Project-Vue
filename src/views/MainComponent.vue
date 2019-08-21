<template>
  <div>
    <span>
      <font-awesome-icon icon="cocktail" class="cocktail-icon" />
    </span>
    <h1>Cocktail Recipe Finder</h1>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCocktail } from "@fortawesome/free-solid-svg-icons/faCocktail";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCocktail);
export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.cocktail-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #f76c6c;
}
h1 {
  color: #fff;
}
</style>
