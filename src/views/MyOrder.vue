<template>
  <b-container class="bv-example-row pb-3">
    <b-row
      class="pt-1 bg-main m-2 pt-4 px-3 justify-content-center mt-5"
      style="border-radius: 15px"
    >
      <!---------------------------------------------trackingOrderSection----------------------------------------------------->
      <b-col cols="8" class="mt-5 pb-5">
        <strong class="mb-3">Enter your Order ID</strong>
        <b-form-input
          v-model="returnOrder.purchase_id"
          required
          placeholder="Order ID ..."
          class="mb-4"
        ></b-form-input>

        <div v-if="showReturnOrder" class="my-4">
          <p>
            <strong>Customer Id :{{ returnOrder.customer_id }}</strong>
          </p>
          <p>
            <strong>Otrder Id :{{ returnOrder.order_id }}</strong>
          </p>
          <p>
            <strong class="text-primary"
              >Status :{{ returnOrder.order_status }}</strong
            >
          </p>
          <p>
            <strong
              >Delivery Time :{{ returnOrder.time_estimated_delivery }}</strong
            >
          </p>
          <p>
            <strong>Order Time :{{ returnOrder.time_ordered }}</strong>
          </p>
          <p>
            <strong>
              Pizzas :
              <span v-for="(pizza, index) in returnOrder.pizzas" :key="index"
                >{{ pizza.name }} ,</span
              >
            </strong>
          </p>
          <p>
            <strong>
              Desserts :
              <span v-for="(dessert, index) in returnOrder.desserts" :key="index"
                >{{ dessert.name }} ,</span
              >
            </strong>
          </p>
                    <p>
            <strong>
              Drinks :
              <span v-for="(drink, index) in returnOrder.drinks" :key="index"
                >{{ drink.name }} ,</span
              >
            </strong>
          </p>
        </div>

        <b-button
          pill
          variant="success"
          class="mx-2"
          @click="getOrderInfo()"
        >
          <span class="text-light mx-3">Tracking Order</span>
          <b-icon class="text-dark mx-3" icon="bicycle" />
        </b-button>

        <b-button
          pill
          variant="danger"
          class="mx-2"
          @click="CancelOrder()"
        >
          <span class="text-light mx-3">Cancel Order</span>
          <b-icon class="text-dark mx-3" icon="x" />
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>



<script>
import axios from "axios";
// this for bacck API
axios.defaults.baseURL = "http://localhost:5000/";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState("orderStore", ["returnOrder", "order","showReturnOrder"]),
  },
  methods: {
    ...mapActions("orderStore",["getOrderInfo","CancelOrder"])
  },
};
</script>
<style>
.modal-active {
  display: block;
}
.w-40 {
  width: 40%;
}

.bg-main {
  background-color: #f0bb1c;
}
.card-img,
.card-img-top,
.card-img-bottom {
  width: 40%;
  margin-right: auto !important;
  margin-left: auto !important;
}
</style>