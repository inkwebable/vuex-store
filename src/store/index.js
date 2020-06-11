import Vue from 'vue';
import Vuex from 'vuex';

import CartModule from '../modules/cart/cart-module';
import CheckoutModule from '../modules/checkout/checkout-module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CartModule,
    CheckoutModule
  }
});
