<template>
  <div id="app">
    <show-blogs></show-blogs>
  </div>
</template>

<script>

// import AprioriComponent from './components/AprioriComponent';
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';



export default {
  name: 'App',

  data:function(){
    return{

    }
  },

  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },

  methods:{

  }
}
</script>

<style>

</style>
