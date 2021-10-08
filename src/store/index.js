import Vue from 'vue'
import Vuex from 'vuex'

import  {menuStore}  from "./MenuStore.module"
import {orderStore} from "./Order.module"

Vue.use(Vuex)


export const store = new Vuex.Store({
  modules: {
    menuStore,
    orderStore
  }
});

