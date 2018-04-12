<template>
  <div id="app">
    <apriori-header></apriori-header>

    <!-- 必须使用v-bind来绑定下方data中的words -->
    <hr>
        <apriori-data v-bind:words="words"></apriori-data>
    <hr>

    <apriori-footer></apriori-footer>
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
  }
}
</script>

<style>

</style>
