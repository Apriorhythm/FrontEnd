// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false


/* ##################################### */

// Vue.filter('apriori-to-upppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('apriori-snippet', function(value){
  return value.slice(0, 125) + "......";
});


/* ##################################### */



// 
// Vue.directive('AprioriRandomColor', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2, 8);
//     // el.style.color = "red";
//   }
// });

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




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
