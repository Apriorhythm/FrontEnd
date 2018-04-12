<template>
  <div id="app">
    <apriori-header></apriori-header>

    <hr>
        <p>##########################</p>
    <hr>

    <apriori-footer></apriori-footer>
  </div>
</template>

<script>

import AprioriHeader from './components/AprioriHeader'
import AprioriFooter from './components/AprioriFooter'

export default {
  name: 'App',
  components: {
    'apriori-header': AprioriHeader,
    'apriori-footer': AprioriFooter
  }
}
</script>

<style>

</style>
