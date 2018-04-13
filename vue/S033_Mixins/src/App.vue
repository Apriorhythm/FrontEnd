<template>
  <div id="app">
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>

// import AprioriComponent from './components/AprioriComponent';
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';



export default {
  name: 'App',

  data:function(){
    return{

    }
  },

  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },

  methods:{

  }
}
</script>

<style>

</style>
