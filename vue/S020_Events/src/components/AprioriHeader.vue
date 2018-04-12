<template>
    <div>
        <header>
          <h1 v-on:click="changeTitle">{{ title }}</h1>
        </header>
    </div>
</template>

<script>
export default {

  props:{
      title:{
        type: String
      }
  },



  methods:{
    changeTitle:function(){
      /* 事件发送，用于改变另一个在AprioriFooter的title */
      /* 第一个参数是EventName，第二个是Prameter */
      this.$emit('changeTitleEventName', 'Changed Title');
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
