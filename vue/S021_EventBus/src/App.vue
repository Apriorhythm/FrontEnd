<template>
  <div id="app">
    <!-- $event名字不能改 -->
    <apriori-header v-bind:title="title" v-on:changeTitleEventName="updateTitle($event)"></apriori-header>

    <!-- 必须使用v-bind来绑定下方data中的words -->
    <hr>
        <apriori-data v-bind:words="words"></apriori-data>
    <hr>

    <apriori-footer v-bind:title="title"></apriori-footer>
  </div>
</template>

<script>

import AprioriHeader from './components/AprioriHeader'
import AprioriFooter from './components/AprioriFooter'
import AprioriData from './components/AprioriData'

export default {
  name: 'App',

  data:function(){
    return{
      /* 这里定义数据，用于绑定到AprioriData.vue中 */
      title: 'Original Title',
      words:[
        {'english':'Two', 'number':2},
        {'english':'Five', 'number':5},
        {'english':'Zero', 'number':0},
      ]
    }

  },

  components: {
    'apriori-header': AprioriHeader,
    'apriori-footer': AprioriFooter,
    'apriori-data': AprioriData
  },

  methods:{
    // newTitle由上面的$event传递过来 */
    updateTitle:function(newTitle){
      this.title = newTitle;
    }
  }
}
</script>

<style>

</style>
