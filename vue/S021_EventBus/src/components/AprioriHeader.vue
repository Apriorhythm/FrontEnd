<template>
    <div>
        <header>
          <h1 v-on:click="changeTitle">{{ title }}</h1>
        </header>
    </div>
</template>

<script>

import { eventBus } from '../main';

export default {

  props:{
      title:{
        type: String
      }
  },



  methods:{
    changeTitle:function(){
      /* 如果没有添加this.title = 'What title'
       * 那么AprioriHeader中的title不会被改变，
       * 因为AprioriHeader本身没有监听这个事件
       */
      this.title = 'What title';
      eventBus.$emit('titleChanged', 'New Title');
    }
  }
}
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 5px;
        text-align: center;
        font-size: 25px;
    }

</style>
