// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource);

import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  // mode: 'hash'
  mode: 'history'


});

Vue.config.productionTip = false


Vue.filter('apriori-snippet', function(value){
  return value.slice(0, 125) + "......";
});


Vue.directive('AprioriTheme', {
  bind(el, binding, vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    else if (binding.value == 'narrow'){
      el.style.maxWidth = "567px";
    }

    if (binding.arg == 'AprioriColumn'){
      el.style.background = "#ddd";
      el.style.padding = '20px';

    }
  }
});


/* ##################################### */
import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
/* ##################################### */



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  router: router

})
