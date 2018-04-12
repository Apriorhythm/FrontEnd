<template>
    <footer>
        <p>{{ copyleft }}: {{ title }}</p>
    </footer>
</template>

<script>

import { eventBus } from '../main';

export default {
  data () {
    return {
        copyleft: 'Copyleft 6666'
    }
  },
  props:{
    title:{
      type:String
    }
  },

/* created()
 * 生命周期钩子函数，一个vue实例被生成后调用这个函数
 * 一般可以在created函数中调用ajax获取页面初始化所需的数据
 */
  created(){
    eventBus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
    footer{
        background: black;
        padding: 5px;
    }

    p{
        color: green;
        text-align: center;
    }
</style>
