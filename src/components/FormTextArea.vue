<template>
  <div class="result-container">
    <div class="search-bar">
      <b-input-group>
        <b-dropdown slot="prepend" variant="info">
          <template slot="button-content">{{ searchBy }}</template>
          <!-- <b-dropdown-item @click="searchBy = search[0].name">
            {{
            search[0].name
            }}
          </b-dropdown-item>
          <b-dropdown-item @click="searchBy = search[1].name">
            {{
            search[1].name
            }}
          </b-dropdown-item>
          <b-dropdown-item @click="searchBy = search[2].name">
            {{
            search[2].name
            }}
          </b-dropdown-item>-->
        </b-dropdown>

        <b-form-input v-model="msg" placeholder="Enter your search term"></b-form-input>
      </b-input-group>
    </div>
    <p
      v-if="initSearch && cocktails.length === 0 || initSearch && msg.length < 1"
    >There are no cocktails matching your search term. Please try again with a different name.</p>
    <div v-show="initSearch">
      <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import CocktailCard from "@/components/CocktailCard.vue";

export default {
  components: {
    CocktailCard
  },
  data() {
    return {
      msg: "",
      searchBy: "Search By Name: ",
      initSearch: false,
      cocktails: []
      //   search: [
      //     {
      //       name: "Name",
      //       id: 1
      //     },
      //     {
      //       name: "Ingredient",
      //       id: 2
      //     },
      //     {
      //       name: "Random",
      //       id: 3
      //     }
      //   ]
    };
  },
  watch: {
    msg: function(newMsg) {
      this.initSearch = true;
      if (this.msg.length === 0) {
        this.initSearch = false;
        this.cocktails = [];
        return;
      }
      EventService.searchCocktail(newMsg).then(response => {
        if (response.data.drinks != null) {
          this.cocktails = response.data.drinks;
        } else {
          this.cocktails = [];
        }
      });
    }
  }
};
</script>

<style>
.search-bar {
  margin-top: 1rem;
  justify-content: center;
  align-self: center;
  margin-bottom: 0.5rem;
}

.btn-info {
  background-color: #f8e9a1 !important;
  color: #f76c6c !important;
  border-color: #f8e9a1 !important;
}

.result-container {
  display: flex;
  flex-direction: column;
}
</style>
