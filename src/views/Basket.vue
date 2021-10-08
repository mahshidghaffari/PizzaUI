<template>
  <b-container class="bv-example-row pb-3">
    <b-row
      class="pt-2 bg-main px-3 justify-content-center mt-3"
      style="border-radius: 15px"
    >
      <b-col cols="4">
        <p clas>Don't you have customer ID ?</p>
      </b-col>
      <b-col cols="3">
        <b-button
          class="btn btn-outline-danger btn-sm bg_transparent"
          @click="showCustomerGenerator = !showCustomerGenerator"
          >Press me</b-button
        >
      </b-col>
      <b-col cols="4" v-show="order.customer_id">
        <p clas>your customer id is : {{ order.customer_id }}</p>
      </b-col>

      <!-- getting customer information -->
      <b-col cols="12" v-show="showCustomerGenerator">
        <b-form>
          <b-row>
            <b-col cols="8" class="pr-5">
              <!---------------customer name------------------->
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.customer_name"
                  placeholder="name"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------Town------------------->
              <b-form-group
                id="input-group-1"
                label="Town:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.town"
                  placeholder="Town"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>

              <!---------------street------------------->
              <b-form-group
                id="input-group-1"
                label="Street:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.street"
                  placeholder="Street"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------House Number------------------->
              <b-form-group
                id="input-group-1"
                label="House Number:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.house_number"
                  placeholder="House number"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------zipcode------------------->
              <b-form-group
                id="input-group-1"
                label="Postcode:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.postcode"
                  placeholder="postcode"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------phone_number------------------->
              <b-form-group
                id="input-group-1"
                label="Phone Number:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="customerInfo.phone_number"
                  placeholder="Phone Number"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <!---------------------/////////------------------->
          <b-row>
            <b-col class="mt-5 text-center mb-3">
              <b-button
                @click="showCustomerGenerator = !showCustomerGenerator"
                variant="danger"
                class="w-25"
                >Cancel</b-button
              >
              <b-button
                @click="onSubmitCustomer()"
                variant="success"
                class="w-25 mx-3"
                >Submit</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <!-- when ther is no order  -->
    <b-row
      class="pt-2 bg-main px-3 justify-content-center mt-3"
      style="border-radius: 15px"
      v-show="order.pizzas.length == 0"
    >
      <b-col>
        <p>there is nothing here , go back and place your orde :)</p>
      </b-col>
    </b-row>
    <!-- order info  -->
    <b-row
      class="pt-2 bg-main px-3 justify-content-center mt-3"
      style="border-radius: 15px"
      v-show="order.pizzas.length != 0"
    >
      <b-col cols="12">
        <div v-show="order.pizzas.length != 0">
          <h6>Pizzas :</h6>
          <ul v-for="(pizza, index) in order.pizzas" :key="index">
            <li>{{ pizza.name }} - {{ pizza.quantity }} times</li>
          </ul>
        </div>
        <div v-show="order.desserts.length != 0">
          <h6>Desserts :</h6>
          <ul v-for="(dessert, index) in order.desserts" :key="index">
            <li>
              Dessert Name : {{ dessert.name }} - {{ dessert.quantity }} times
            </li>
          </ul>
        </div>
        <div v-show="order.drinks.length != 0">
          <h6>Drinks :</h6>
          <ul v-for="(drink, index) in order.drinks" :key="index">
            <li>Drink Name : {{ drink.name }} - {{ drink.quantity }} times</li>
          </ul>
        </div>
      </b-col>
    </b-row>

    <!-- taking the discount and customer id  -->

    <b-row
      class="py-2 bg-main px-3 justify-content-center mt-3"
      style="border-radius: 15px"
      v-show="order.pizzas.length != 0"
    >
      <b-col cols="6">
        <b-form-input
          v-model="order.discount_code"
          placeholder="Enter your discount Code"
        ></b-form-input>
      </b-col>
      <b-col cols="6">
        <b-form-input
          v-model="order.customer_id"
          placeholder="Enter your customer id"
        ></b-form-input>
      </b-col>
    </b-row>
    <!-- submit button  -->
    <b-row
      class="py-2 px-3 mt-3"
      style="border-radius: 15px"
      v-show="order.pizzas.length != 0"
    >
      <b-col cols="12" class="text-center">
        <b-button @click="submitOrder()" variant="outline-success"
          >Place your order</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>



<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";


// this for bacck API
axios.defaults.baseURL = "http://localhost:5000";

export default {
  name: "App",
  components: {},
  props: ["myOrder"],
  data() {
    return {
      showCustomerGenerator: false,
    };
  },
  computed: {
    ...mapState("orderStore", ["customerInfo", "order"]),
  },
  methods: {
    // ...mapMutations("orderStore", ["submitCustomerStore"]),
    ...mapActions("orderStore", ["postCustomerInfo", "postOrder"]),

    onSubmitCustomer() {
      this.postCustomerInfo();
    },
    submitOrder() {
      this.postOrder();
      this.$router.push({ path: "/myOrder" });
      // console.log("khar")
     
    },
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
.bg_transparent {
  background-color: transparent !important;
}
</style>