<template>
  <div class="p-5">
    <b-row class="w-100 mb-3">
      <b-col cols="2">
        <b-button
          variant="success"
          @click="showPizzaMethod()"
          class="w-100 mx-1"
          >Pizza</b-button
        >
      </b-col>
      <b-col cols="2">
        <b-button
          variant="success"
          @click="showDessertMethod()"
          class="w-100 mx-1"
          >Dessert</b-button
        >
      </b-col>
      <b-col cols="2">
        <b-button
          variant="success"
          @click="showDrinksMethod()"
          class="w-100 mx-1"
          >Drink</b-button
        >
      </b-col>
    </b-row>
    <!-- pizza menu -->
    <b-row class="w-100 p-5 bg-warning" v-show="showPizza">
      <b-col
        cols="2"
        v-for="(pizza, index) in pizzaList"
        :key="index"
        class="pizza_hight_card"
      >
        <b-card
          :title="pizza.name"
          img-alt="pizza Image"
          :img-src="urlImgPizza"
          img-top
          class="pic-pizza mb-1"
          style="font-size: 1rem !important"
        >
          <b-card-text class="mb-0">
            <p class="mb-0">
              Vegetarian :
              <span v-if="pizza.vegetarian" class="text-success">YES</span>
              <span v-else class="text-danger">NO</span>
            </p>

            <p class="mb-0">
              Price :
              <span class="text-success">{{ pizza.cost }} $</span>
            </p>
          </b-card-text>
          <b-row class="h-10">
            <b-col>
              <b-button
                @click="addPizza(pizza)"
                variant="success"
                class="btn-sm mx-1"
                >Add</b-button
              >
              <b-button
                v-b-modal.modal-1
                @click="getTest()"
                variant="warning"
                class="btn-sm"
                v-model="pizza.id"
                >Topping</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- dessert menu -->
    </b-row>
    <b-row class="w-100 p-5 bg-danger" v-show="showDessert">
      <b-col
        cols="2"
        v-for="(dessert, dessert_id) in desertList"
        :key="dessert_id"
        class="pizza_hight_card"
      >
        <b-card
          :title="dessert.name"
          img-alt="pizza Image"
          :img-src="urlImgDessert"
          img-top
          class="pic-pizza mb-1 class"
          style="font-size: 1rem !important"
        >
          <b-card-text class="mb-0">
            <p class="mb-0">
              Price :
              <span class="text-success">{{ dessert.cost }} $</span>
            </p>
          </b-card-text>
          <b-row class="h-10">
            <b-col>
              <b-button variant="success" class="btn-sm mx-1"  @click="addDessert(dessert)">Add</b-button>
              <b-button v-b-modal.modal-1 variant="warning" class="btn-sm"
                >Topping</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!-- drink menu -->
    </b-row>
    <b-row class="w-100 p-5 bg-info" v-show="showDrinks">
      <b-col
        cols="2"
        v-for="(drink, index) in drinkList"
        :key="index"
        class="pizza_hight_card"
      >
        <b-card
          :title="drink.name"
          img-alt="pizza Image"
          :img-src="urlImagDrink"
          img-top
          class="pic-pizza mb-1 class"
          style="font-size: 1rem !important"
        >
          <b-card-text class="mb-0">
            <p class="mb-0">
              Price :
              <span class="text-success">{{ drink.cost }} $</span>
            </p>
          </b-card-text>
          <b-row class="h-10">
            <b-col>
              <b-button variant="success" class="btn-sm mx-1"  @click="addDrink(drink)">Add</b-button>
              <b-button v-b-modal.modal-1 variant="warning" class="btn-sm"
                >Topping</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import services from "../Services/Services";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("menuStore", ["pizzaList", "desertList", "drinkList"]),
  },

  data() {
    return {
      urlImgPizza: require("../assets/logo.png"),
      urlImgDessert: require("../assets/DessertPic.jpg"),
      urlImagDrink: require("../assets/drinkPic.jpg"),
      showPizza: true,
      showDessert: false,
      showDrinks: false,
      tempPizza: {
        pizza_id: "",
        quantity: 0,
      },
    };
  },

  methods: {
    ...mapMutations("orderStore", ["addPizzaStore","addDessertStore", "addDrinkStore"]),
    ...mapActions("menuStore", ["getPizza", "getDessert", "getDrinks"]),
    showPizzaMethod() {
      (this.showPizza = true),
        (this.showDessert = false),
        (this.showDrinks = false);
    },
    showDessertMethod() {
      (this.showPizza = false),
        (this.showDessert = true),
        (this.showDrinks = false),
        this.getDessert();
    },
    showDrinksMethod() {
      (this.showPizza = false),
        (this.showDessert = false),
        (this.showDrinks = true),
        this.getDrinks();
    },
    addPizza(pizza) {
      this.addPizzaStore(pizza);
    },
    addDrink(drink){
      this.addDrinkStore(drink)
    },
    addDessert(dessert){
      // console.log(dessert_id)
      this.addDessertStore(dessert)
    }
  },

  mounted() {
    // this is because we didn't handle paralel requests
    //Concurrent service call python problem
    this.getPizza();
  },
};
</script>

<style>
.pizza_hight_card {
  /* height: ; */
  font-size: 1vw;
}

.card-title {
  font-size: 1.2rem;
}
</style>

