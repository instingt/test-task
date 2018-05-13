// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import App from './App';
import createStore from './store';

window.api = api;
Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: createStore(),
  beforeCreate() {
    this.$store.dispatch('initialLoading');
  },
  components: { App },
  template: '<App/>',
});
