<template>
  <b-container class="bv-example-row pb-3">
    <b-row
      class="pt-1 bg-main m-2 pt-4 px-3 justify-content-center mt-5"
      style="border-radius: 15px;"
    >
      <!---------------------------------------------trackingOrderSection----------------------------------------------------->
      <b-col cols="8" class="mt-5 pb-5">
        <strong class="mb-3">Enter your Order ID</strong>
        <b-form-input v-model="orderIDTrack" required placeholder="Order ID ..." class="mb-4"></b-form-input>

        <div v-if="showDeliveryTime" class="my-4">
          <strong class="text-danger">Delivery Time :{{finalDeliveryTime}}</strong>
        </div>

        <div v-if="showOrderDetail" class="my-4">
          <p>
            <strong>Customer Id :{{retunOrderDetails.customer_id}}</strong>
          </p>
          <p>
            <strong>Otrder Id :{{retunOrderDetails.order_id}}</strong>
          </p>
          <p>
            <strong class="text-primary">Status :{{retunOrderDetails.status}}</strong>
          </p>
          <p>
            <strong>Delivery Time :{{retunOrderDetails.delivery_time}}</strong>
          </p>
          <p>
            <strong>Delivery Address :{{retunOrderDetails.delivery_address.street}},{{retunOrderDetails.delivery_address.city}},{{retunOrderDetails.delivery_address.country}},{{retunOrderDetails.delivery_address.zipcode}}</strong>
          </p>
          <p>
            <strong>Note :{{retunOrderDetails.note}}</strong>
          </p>
          <p>
            <strong>Order Time :{{retunOrderDetails.ordered_at}}</strong>
          </p>
          <p>
            <strong>Payment Type :{{retunOrderDetails.payment_type}}</strong>
          </p>
          <p>
            <strong>
              Pizzas :
              <span
                v-for="(pizza,index) in retunOrderDetails.pizzas"
                :key="index"
              >{{pizza.name}} ,</span>
            </strong>
          </p>
          <p>
            <strong>
              Takeaway :
              <span v-if="retunOrderDetails.takeaway">Yes</span>
              <span v-else>No</span>
            </strong>
          </p>
        </div>

        <b-button pill variant="success" class="mx-2" @click="getDelivearyTime(orderIDTrack)">
          <span class="text-light mx-3">Tracking Order</span>
          <b-icon class="text-dark mx-3" icon="bicycle" />
        </b-button>
        <b-button pill variant="primary" class="mx-2" @click="getOrderDeatails(orderIDTrack)">
          <span class="text-light mx-3">Order Details</span>
          <b-icon class="text-dark mx-3" icon="book" />
        </b-button>
        <b-button pill variant="danger" class="mx-2" @click="CancelOrder(orderIDTrack)">
          <span class="text-light mx-3">Cancel Order</span>
          <b-icon class="text-dark mx-3" icon="x" />
        </b-button>
      </b-col>
    </b-row>

    <!---------------------------------------------modal----------------------------------------------------->
  </b-container>
</template>



<script>
import axios from "axios";
// this for bacck API
axios.defaults.baseURL = "http://localhost:8080/api/";

export default {
  name: "App",
  components: {},
  data() {
    return {
      showCancelOrder: false,
      showOrderDetail: false,
      showDeliveryTime: false,
      orderIDTrack: null,
      finalDeliveryTime: null,
      retunOrderDetails: {
        note: null,
        status: null,
        delivery_time: null,
        pizzas: [],
        customer_id: null,
        order_id: null,
        ordered_at: null,
        takeaway: null,
        payment_type: null,
        delivery_address: {
          street: null,
          city: null,
          country: null,
          zipcode: null
        }
      }
    };
  },
  methods: {
    CancelOrder(orderid) {
      return axios({
        method: "put",
        url: "/order/cancel/" + orderid,
        changeOrigin: true
      })
        .then(response => {
          alert("order " + response.data.order_id + "  has been canceled");
          window.location.href = "/";
        })
        .catch(error => {
          alert("the error has occured: " + error);
        });
    },

    getDelivearyTime(orderid) {
      return axios({
        method: "get",
        url: "/order/deliverytime/" + orderid,
        changeOrigin: true
      })
        .then(response => {
          this.showDeliveryTime = true;
          this.finalDeliveryTime = response.data;
          this.showOrderDetail = false;
          this.showCancelOrder= false;
        })
        .catch(error => {
          alert("unvalid input");
        });
    },

    getOrderDeatails(orderid) {
      return axios({
        method: "get",
        url: "/order/" + orderid,
        changeOrigin: true
      })
        .then(response => {
          this.showOrderDetail = true;
           this.showDeliveryTime = false;
           this.showCancelOrder= false;
          this.retunOrderDetails = response.data[0];
})
        .catch(error => {
          alert("unvalid input");
        });
    }
  }
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