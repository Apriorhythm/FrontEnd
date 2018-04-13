// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource);

/* ##################################### */
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  // mode: 'hash'
  mode: 'history'

  /* hash VS history
   * hash(默认值) :
   *    点击的时候其实并没有请求服务器，而是在index中
   *    跳转，原理是component变成index的一部分，点击
   *    只是选择显示部分，所以，URL会想这样（必有#）
   *      http://localhost:8080/#/addB
   * history:
   *    点击的时候会服务器资源，URL是这样的
   *       http://localhost:8080/add
   */


});
/* ##################################### */


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




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  /* ##################################### */
  router: router
  /* ##################################### */

})
