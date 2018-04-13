<template>
  <div id="app">
    <apriori-component>
        <p>slot1 slot2的顺序</p>
        <h3 slot="slot2">Slot 2 From App.vue</h3>

        <h3 slot="slot1">Slot 1 From App.vue</h3>

        <h2 slot="slotDynamic">{{ dynamicContent }}</h2>

        <div slot="form-fields">
          <h4>HEADER</h4>
          <p>Header Information</p>
        </div>

        <div slot="form-fields">
          <div slot="from-fields">
            <input type="text" placeholder="name"></input>
            <input type="password" placeholder="password"></input>
          </div>
        </div>

        <div slot="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
        </div>

    </apriori-component>
  </div>
</template>

<script>

import AprioriComponent from './components/AprioriComponent';


export default {
  name: 'App',

  data:function(){
    return{
      dynamicContent: "This is dynamic content"
    }
  },

  components: {
    'apriori-component': AprioriComponent,
  },

  methods:{
    handleSubmit:function(){
      alert("Handle Submit Function");
      return;
    }
  }
}
</script>

<style>

</style>
