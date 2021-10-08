import { services } from "../Services/Services";
import { router } from "../router/index";
import { axios } from "axios"


const state = {
    desertList: [],
    pizzaList: [],
    drinkList:[]


}

const mutations = {

    getPizzaSuccess(state, data) {
        state.pizzaList = data.data
    },
    getDessertSuccess(state,data){
        state.desertList = data.data
    },
    getDrinksSuccess(state,data){
        state.drinkList = data.data
    }
}

// dispatch action
const actions = {
    getPizza({ commit }) {
        services.getPizza()
            .then(response => {
                commit('getPizzaSuccess', response.data)
            }, error => {
                console.log(error)
            }

            )
    },
    getDessert({commit}) {
        services.getDessert().then(response => {
            commit('getDessertSuccess',response.data)
        },error =>{
            console.log(error)
        })
    },
    getDrinks({commit}){
        services.getDrinks().then(response => {
            commit('getDrinksSuccess',response.data)
        },error=>{
            console.log(error)
        })
    }

}


export const menuStore = {
    namespaced: true,
    state,
    mutations,
    actions
}