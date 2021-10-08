
import vue from "vue";
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_URL_API;


export const services = {
  getPizza,
  getDessert,
  getDrinks,
  postCustomerInfoService,
  postOrderService

}

function getPizza() {
  return axios({
    method: "get",
    url: "/pizza",
    changeOrigin: true,
  })
}

function getDessert() {
  return axios({
    method: "get",
    url: "/dessert",
    changeOrigin: true,
  })
}

function getDrinks() {
  return axios({
    method: "get",
    url: "/drink",
    changeOrigin: true
  })
}


function postCustomerInfoService(customerInfo){
  return axios({
    method:"post",
    url:"/customer",
    changeOrigin: true,
    data: customerInfo
  })
}

function postOrderService(order){
  return axios({
    method:"post",
    url:"/purchase",
    changeOrigin: true,
    data: order
  })
}

// function getSejamiJobs() {
//   return axios({
//       method: 'get',
//       headers: authHeader(),
//       url: '/services/app/Public/GetSejamiJobs'
//   });
// }

// function createOrUpdateBankAccount(data) {
//   return axios({
//       method: 'post',
//       headers: authHeader(),
//       url: '/services/app/Public/CreateOrUpdateBankAccount',
//       data: data
//   })
// }

// return axios({
//   method: 'post',
//   headers: authHeader(),
//   url: '/TokenAuth/SendOtp',
//   params: {
//       mobileNumber,
//       nationalCode,
//       captchaResponse
//   }


// })





// getPizza(succes, error) {
//   return axios({
//     method: "get",
//     url: "/pizza",
//     changeOrigin: true,
//   }).then(
//     (response) => {
//       succes(response.data);
//     },
//     (response) => {
//       error(response);
//     }
//   );
// },

