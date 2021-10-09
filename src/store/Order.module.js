import { services } from "../Services/Services";
import { router } from "../router/index";
import { axios } from "axios"


const state = {
    order: {
        customer_id: '',
        pizzas: [],
        drinks: [],
        desserts: [],
        discount_code: NaN
    },
    customerInfo: {
        customer_name: '',
        house_number: '',
        street: '',
        town: '',
        postcode: '',
        phone_number: 0
    },
    returnOrder: {
        customer_id: '',
        discount_code: '',
        purchase_id: '',
        time_estimated_delivery: '',
        time_ordered:'',
        total_cost: '',
        pizzas: [],
        drinks: [],
        desserts: []
    },
    showReturnOrder: false


}

const mutations = {

    addPizzaStore(state, pizza) {

        console.log("here")

        let isPizzaFound = false;

        for (let index in state.order.pizzas) {
            if (state.order.pizzas[index].pizza_id == pizza.pizza_id) {
                isPizzaFound = true
                state.order.pizzas[index].quantity = state.order.pizzas[index].quantity + 1
                return
            } else {
                isPizzaFound = false
            }
        }

        if (!isPizzaFound) {
            let tempPizza = {
                name: pizza.name,
                pizza_id: pizza.pizza_id,
                quantity: 1,
            }
            state.order.pizzas.push(tempPizza)

        }
    },

    addDessertStore(state, dessert) {
        let isDessertFound = false;
        for (let index in state.order.desserts) {
            if (state.order.desserts[index].dessert_id == dessert.dessert_id) {
                isDessertFound = true
                state.order.desserts[index].quantity = state.order.desserts[index].quantity + 1
                return
            } else {
                isDessertFound = false
            }
        }

        if (!isDessertFound) {
            let tempDessert = {
                name: dessert.name,
                dessert_id: dessert.dessert_id,
                quantity: 1
            }
            state.order.desserts.push(tempDessert)
        }

    },
    addDrinkStore(state, drink) {
        let isDrinkFound = false;
        for (let index in state.order.drinks) {
            if (state.order.drinks[index].drink_id == drink.drink_id) {
                isDrinkFound = true
                state.order.drinks[index].quantity = state.order.drinks[index].quantity + 1
                return
            } else {
                isDrinkFound = false
            }
        }

        if (!isDrinkFound) {
            let tempDrink = {
                name: drink.name,
                drink_id: drink.drink_id,
                quantity: 1
            }
            state.order.drinks.push(tempDrink)
        }
        console.log(state.order.drinks)
    },
    clearOrderStore(state) {
        state.order = {
            customer_id: '',
            pizzas: [],
            drinks: [],
            desserts: [],
            discount_code: ''
        }
    },
    postCustomerSuccess(state, data) {
        state.order.customer_id = data.data.customer_id
        state.customerInfo= {
            customer_name: '',
            house_number: '',
            street: '',
            town: '',
            postcode: '',
            phone_number: 0
        }
    },
    postOrderSuccess(state,data) {
        state.returnOrder = data.data
        state.showReturnOrder = true
        state.order = {
            customer_id: '',
            pizzas: [],
            drinks: [],
            desserts: [],
            discount_code: ''
        }
    },
    getOrderInfoSuccess(state,data){
        state.returnOrder = data.data
        state.showReturnOrder = true
    },
    cancelOrderSuccess(state,data){
        state.returnOrder= {
            customer_id: '',
            discount_code: '',
            purchase_id: '',
            time_estimated_delivery: '',
            time_ordered:'',
            total_cost: '',
            pizzas: [],
            drinks: [],
            desserts: []
        }
        state.showReturnOrder = false
        alert(data.message)
    }
}

// dispatch action
const actions = {
    postCustomerInfo({ state, commit }) {
        services.postCustomerInfoService(state.customerInfo).then(response => {
            commit('postCustomerSuccess', response.data)
        }, error => {
            alert(error)
        })
    },

    postOrder({ state, commit }) {
        services.postOrderService(state.order).then(response => {
            console.log("check in here ++>" +response.data)
            commit('postOrderSuccess', response.data)
        }, error => {
            alert(error)
        })
    },
    getOrderInfo({state, commit}){
        services.getOrderInfoService(state.returnOrder.purchase_id).then(response =>{
            commit('getOrderInfoSuccess',response.data)
        },error =>{
            console.log(error)
        })
    },
    CancelOrder({state,commit}){
        services.cancelOrderService(state.returnOrder.purchase_id).then(response =>{
            commit('cancelOrderSuccess',response.data)
        },error =>{
            console.log("error")
        })
    }
    
    
}


export const orderStore = {
    namespaced: true,
    state,
    mutations,
    actions
}