<template>
  <div id="app">
    <component v-bind:is="whichComponent"></component>
    <button v-on:click="whichComponent = 'component1'">Show Component1</button>
    <button v-on:click="whichComponent = 'component2'">Show Component2</button>

    <hr>

    <keep-alive>
      <component v-bind:is="aliveComponent"></component>
    </keep-alive>
    <button v-on:click="aliveComponent = 'component1'">Alive Component1</button>
    <button v-on:click="aliveComponent = 'component2'">Alive Component2</button>
    <p>
      1. is后面的名字不能有“-”，比如which-component是不行的
      2. 每次点击，component都会被destroy，所有数据都会丢失,所以要用keep-alive
    </p>
  </div>
</template>

<script>

import component1 from './components/component1';
import component2 from './components/component2';

export default {
  name: 'App',

  data:function(){
    return{
      whichComponent: 'component1',
      aliveComponent: 'component1'
    }
  },

  components: {
    'component1': component1,
    'component2': component2,
  },

}
</script>

<style>

</style>
