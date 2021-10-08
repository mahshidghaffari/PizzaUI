<template>
  <div>
    <b-row class="h-10 w-100 mb-2">
      <b-col cols="12" class="pt-2">
        <b-button
          pill
          variant="outline-success"
          style="float: right"
          to="/menu/basket"
        >{{order.pizzas.length+order.drinks.length+order.desserts.length}}
          <span class="text-danger mx-3"></span>
          <b-icon icon="basket3"  />
        </b-button>
        <b-button
          pill
          variant="outline-danger"
          style="float: right"
          v-show="order.pizzas.length+order.drinks.length+order.desserts.length != 0"
        @click="clearBasket()"
        >
          <b-icon icon="x" font-scale="1.5" />
        </b-button>
        <b-button pill variant="danger" >
          <span class="text-light mx-3">Tracking Order</span>
          <b-icon class="text-dark mx-3" icon="bicycle" />
        </b-button>
      </b-col>
    </b-row>
    <PizzaMenu></PizzaMenu>

  </div>
</template>

<script>
import axios from "axios";
import PizzaMenu from "../components/PizzaMenu.vue";
axios.defaults.baseURL = "http://localhost:5000/";
import { mapState ,mapMutations} from "vuex";

export default {
  name: "Menu",
  components: {
    PizzaMenu,
  },
    computed: {
    ...mapState("orderStore", ["order"]),
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
     ...mapMutations("orderStore", ["clearOrderStore"]),
    clearBasket(){
      this.clearOrderStore();
    }
  },
};
</script>

<style >
.carousel-inner {
  height: 100% !important;
}

.h-90 {
  height: 90%;
}
</style>
