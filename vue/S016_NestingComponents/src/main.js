import Vue from 'vue'
import App from './App.vue'

/* 全局Component */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

import AprioriGlobalComponent from './AprioriGlobalComponent.vue'
Vue.component('AprioriGlobalComponentName', AprioriGlobalComponent);

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

new Vue({
  el: '#app',
  render: h => h(App)
})
