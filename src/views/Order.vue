<template>
  <b-container class="bv-example-row pb-3 h-90">
    <b-row class="h-10">
      <b-col cols="12" class="pt-2">
        <b-button
          pill
          variant="outline-success"
          style="float: right"
          @click="showModalBasket()"
          v-show="showMenu"
        >
          <span class="text-danger mx-3">{{ order.pizzas.length }}</span>
          <b-icon icon="basket3" />
        </b-button>
        <b-button
          pill
          variant="outline-danger"
          style="float: right"
          @click="showModalMenu()"
          v-show="showBascket"
        >
          <b-icon icon="x" font-scale="1.5" />
        </b-button>
        <b-button pill variant="danger" @click="showTrackingOrder()">
          <span class="text-light mx-3">Tracking Order</span>
          <b-icon class="text-dark mx-3" icon="bicycle" />
        </b-button>
      </b-col>
    </b-row>
    <b-row
      class="bg-main pt-4 px-3 justify-content-center h-90"
      style="border-radius: 15px"
    >
      <!---------------------------------------------menu----------------------------------------------------->
      <!-- <PizzaMenu></PizzaMenu> -->
      <!---------------------------------------------Basket----------------------------------------------------->
      <b-col cols="8" v-show="showBascket && !showDelInfo">
        <b-form @submit="onSubmitOrder(order)" @reset="onResetOrder()">
          <b-row>
            <b-col cols="8" class="pr-5">
              <!---------------costumerID------------------->
              <b-form-group
                id="input-group-1"
                label="Customer ID:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="order.customer_id"
                  type="number"
                  placeholder="Enter your Costumer ID"
                  required
                ></b-form-input>
              </b-form-group>
              <!---------------country------------------->
              <b-form-group
                id="input-group-1"
                label="Country:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="order.delivery_address.country"
                  placeholder="Country"
                  required
                ></b-form-input>
              </b-form-group>
              <!---------------city------------------->
              <b-form-group
                id="input-group-1"
                label="City:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="order.delivery_address.city"
                  placeholder="City"
                  required
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
                  v-model="order.delivery_address.street"
                  placeholder="Street"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------zipcode------------------->
              <b-form-group
                id="input-group-1"
                label="ZipCode:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="order.delivery_address.zipcode"
                  placeholder="ZipCode"
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
              <!---------------note------------------->
              <b-form-group
                id="input-group-1"
                label="Any Notes:"
                label-for="input-1"
                class="mb-3"
              >
                <b-form-input
                  id="input-1"
                  v-model="order.note"
                  placeholder="Write your note ..."
                  required
                  class="inline-block"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <!---------------Payment Method------------------->
            <b-col>
              <b-form-group
                label="Payment Method:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="order.payment_type"
                  :aria-describedby="ariaDescribedby"
                  name="paymentType"
                  value="cash"
                  class="pl-5"
                  >Cash</b-form-radio
                >
                <b-form-radio
                  v-model="order.payment_type"
                  :aria-describedby="ariaDescribedby"
                  name="paymentType"
                  value="creditcard"
                  >Credit Card</b-form-radio
                >
              </b-form-group>
              <div class="mt-1 text-secondary">
                Selected:
                <strong>{{ order.payment_type }}</strong>
              </div>
              <!---------------Take a way------------------->
              <b-form-group
                label="Delivery status:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="order.takeaway"
                  :aria-describedby="ariaDescribedby"
                  name="takeAway"
                  value="false"
                  >Pick UP</b-form-radio
                >
                <b-form-radio
                  v-model="order.takeaway"
                  :aria-describedby="ariaDescribedby"
                  name="takeAway"
                  value="true"
                  >TakeAway</b-form-radio
                >
              </b-form-group>
            </b-col>
          </b-row>

          <!---------------------/////////------------------->
          <b-row>
            <b-col class="mt-5 text-center mb-3">
              <b-button type="reset" variant="danger" class="w-25"
                >Cancel</b-button
              >
              <b-button type="submit" variant="success" class="w-25 mx-3"
                >Submit</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-col>
      <!---------------------------------------------Del Info----------------------------------------------------->
      <b-col cols="8" v-show="showDelInfo" class="pb-5">
        <p class="my-2">Delivery Time :{{ returnOrder.delivery_time }}</p>
        <p class="my-2">Status :{{ returnOrder.order.status }}</p>
        <p class="my-2">customer_id :{{ returnOrder.order.customer_id }}</p>
        <p class="my-2">
          Addrees :{{ returnOrder.order.delivery_address.zipcode }},
          {{ returnOrder.order.delivery_address.street }},
          {{ returnOrder.order.delivery_address.city }},{{
            returnOrder.order.delivery_address.country
          }}
        </p>
        <p class="my-2">order id:{{ returnOrder.order.order_id }}</p>
        <p class="my-2">ordered AT :{{ returnOrder.order.ordered_at }}</p>
        <p class="my-2">Payment Type :{{ returnOrder.order.payment_type }}</p>
        <p class="my-2">Note :{{ returnOrder.order.note }}</p>
        <p
          class="my-2"
          v-for="(pizza, index) in returnOrder.order.pizzas"
          :key="index"
        >
          pizza :{{ pizza.name }}
        </p>
        <p class="my-2" v-if="!returnOrder.order.takeaway">Takeaway : No</p>
        <p class="my-2" v-else>Takeaway : Yes</p>

        <b-button
          variant="danger"
          class="w-40"
          @click="CancelOrder(returnOrder.order.order_id)"
          >Cancel Order</b-button
        >
        <b-button variant="outline-success" class="w-40 mx-3" href="/"
          >Back</b-button
        >
      </b-col>

      <!---------------------------------------------trackingOrderSection----------------------------------------------------->
      <b-col cols="8" v-show="trackingOrderSection" class="mt-5 pb-5">
        <strong class="mb-3">Enter your Order ID</strong>
        <b-form-input
          v-model="orderIDTrack"
          required
          placeholder="Order ID ..."
          class="mb-4"
        ></b-form-input>

        <div v-if="showOrderDetail" class="my-4">
          <strong class="text-danger"
            >Delivery Time :{{ finalDeliveryTime }}</strong
          >
        </div>
        <b-button
          variant="danger"
          class="w-40"
          @click="getDelivearyTime(orderIDTrack)"
          >Track</b-button
        >
        <b-button variant="success" class="mx-3 w-40" href="/"
          >Back to Menu</b-button
        >
      </b-col>
    </b-row>

    <!---------------------------------------------modal----------------------------------------------------->
    <b-modal
      id="modal-1"
      hide-footer
      :title="pizzaTopping.name"
      style="display: block"
    >
      <div v-for="(item, index) in pizzaTopping.toppings" :key="index">
        <p class="my-2">{{ item }}</p>
      </div>
    </b-modal>

    <b-modal
      ref="add-pizza-modal"
      hide-footer
      hide-header
      :title="pizzaTopping.name"
    >
      <div class="mt-3">
        <b-form-input
          v-model="pizzaNote"
          required
          placeholder="Add note ..."
        ></b-form-input>
        <b-button variant="outline-danger" @click="hideModal" class="w-40 mx-4"
          >Close</b-button
        >
        <b-button
          @click="addPizza(pizzaNote)"
          variant="success"
          class="w-40 m-3"
          >Add to Basket</b-button
        >
      </div>
    </b-modal>
  </b-container>
</template>



<script>
import axios from "axios";
// import PizzaMenu from "../components/PizzaMenu.vue";
// this for bacck API
axios.defaults.baseURL = "http://localhost:5000/";

export default {
  name: "App",
  components: {
    PizzaMenu,
  },
  data() {
    return {
      urlImg: require("../assets/logo.png"),
      finalDeliveryTime: null,
      orderIDTrack: null,
      showOrderDetail: false,
      orderIDTemp: 0,
      showBascket: false,
      pizzas: [],
      pizzaTopping: [],
      showDelInfo: false,
      showMenu: true,
      trackingOrderSection: false,
      id: 0,
      pizzaNote: "",
      tempId: 0,
      order: {
        customer_id: null,
        takeaway: null,
        payment_type: null,
        delivery_address: {
          street: null,
          city: null,
          country: null,
          zipcode: null,
        },
        pizzas: [],
        note: null,
      },

      returnOrder: {
        ordered_at: "2021-05-23T01:59:13.914457",
        delivery_time: "02:19:13.914457",
        order: {
          note: null,
          status: "",
          delivery_time: "02:19:13.914457",
          pizzas: [],
          customer_id: 1111,
          order_id: 19,
          ordered_at: "2021-05-23T01:59:13.914457",
          takeaway: false,
          payment_type: null,
          delivery_address: {
            street: "null",
            city: "null",
            country: "yo",
            zipcode: 1111,
          },
        },
      },
    };
  },
  methods: {
    getPizza() {
      return axios({
        method: "get",
        url: "/pizza",
        changeOrigin: true,
      });
    },

    CancelOrder(orderid) {
      return axios({
        method: "put",
        url: "/order/cancel/" + orderid,
        changeOrigin: true,
      })
        .then((response) => {
          alert("order " + response.data.order_id + "  has been canceled");
          console.log("man injam");
          window.location.href = "/";
        })
        .catch((error) => {
          console.log("the error has occured: " + error);
        });
    },

    getTopping(id) {
      return axios({
        method: "get",
        url: "/pizza/" + id,
        changeOrigin: true,
      })
        .then((response) => {
          this.pizzaTopping = response.data;
          console.log(this.pizzaTopping);
        })
        .catch((error) => {
          console.log("the error has occured: " + error);
        });
    },
    addPizza(pizza_id) {
      this.order.pizzas.push(pizza_id);
      console.log(pizza_id);
    },

    hideModal() {
      this.$refs["add-pizza-modal"].hide();
    },
    onSubmitOrder(order) {
      event.preventDefault();
      alert("Do you confirm this order ?");
      return axios({
        method: "post",
        url: "/order",
        data: order,
      })
        .then((response) => {
          console.log("man injam  hminja");
          this.returnOrder = response.data;
          this.showDelInfo = true;
          this.showBascket = false;
        })
        .catch((error) => {
          alert("unvalid input");
        });
    },
    onResetOrder() {
      console.log("this is on reset");
      if (
        this.order == null ||
        this.order.customer_id == null ||
        this.order.takeaway == null ||
        this.order.payment_type == null ||
        this.order.customer_id == null ||
        this.order.customer_id == null ||
        this.order.pizzas == []
      ) {
        alert("your information is not compelet");
      } else {
        this.order = {
          customer_id: null,
          takeaway: null,
          payment_type: null,
          delivery_address: {
            street: null,
            city: null,
            country: null,
            zipcode: null,
          },
          pizzas: [],
        };

        showBascket = false;
      }
    },
    showTrackingOrder() {
      (this.trackingOrderSection = true),
        (this.showBascket = false),
        (this.showDelInfo = false),
        (this.showMenu = false);
    },
    getDelivearyTime(orderid) {
      return axios({
        method: "get",
        url: "/order/deliverytime/" + orderid,
        changeOrigin: true,
      })
        .then((response) => {
          this.showOrderDetail = true;
          this.finalDeliveryTime = response.data;
          console.log(this.finalDeliveryTime);
        })
        .catch((error) => {
          alert("unvalid input");
        });
    },
    showModalBasket() {
      this.showMenu = false;
      this.showBascket = true;
    },
    showModalMenu() {
      this.showMenu = true;
      this.showBascket = false;
    },
  },
  // mounted() {
  //   this.getPizza().then(response => {
  //     this.pizzas = response.data;
  //   });
  // }
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