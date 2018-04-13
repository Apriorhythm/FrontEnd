<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>

// import AprioriComponent from './components/AprioriComponent';
import addBlog from './components/addBlog';


export default {
  name: 'App',

  data:function(){
    return{

    }
  },

  components: {
    'add-blog': addBlog
  },

  methods:{

  }
}
</script>

<style>

</style>
