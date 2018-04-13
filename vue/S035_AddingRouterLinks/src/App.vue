<template>
  <div id="app">
    <!-- ################################### -->
    <app-header></app-header>
    <router-view></router-view>
    <!-- ################################### -->
  </div>
</template>

<script>

// import AprioriComponent from './components/AprioriComponent';
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';
import header from './components/header';



export default {
  name: 'App',

  data:function(){
    return{

    }
  },

  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  },

}
</script>

<style scoped>


</style>
