<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";
export default {
  name: "App",
  components: {
    // TopNav,
    // PizzaSlider,
  },
  data() {
    return {
      pizza: [],
      id: 1
    };
  },
  methods: {
    getPizza() {
      return axios({
        method: "get",
        url: "api/v1/pizza",
        changeOrigin: true
      });
    },
    getPizzaByID(id) {
      return axios({
        method: "get",
        url: "api/v1/pizza/" + id,
        changeOrigin: true
      });
    }
  },
  mounted() {
    this.getPizza().then(response => {
      // console.log(response);
      this.pizza = response.data;
      console.log(this.pizza);
    });
    //  this.getPizzaByID(1).then(response => {
    //   console.log(response);
    //   this.pizza = response.data;
    //   console.log(this.pizza);
    //
    // });
  }
};
</script>
