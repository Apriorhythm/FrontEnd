<template>
  <div id="show-blogs" v-AprioriTheme:AprioriColumn="'narrow'">

    <!--
        自定义的directive中如果要传一个字符串，
        那么，要使用'字符串'的形式，也就是
        v-myDirective="'Passing String'"
    -->

    <h1>All Blogs</h1>

    <input type="text" v-model="search" placeholder="search blog" />

    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-AprioriRandomColor>{{ blog.title | apriori-to-upppercase }}</h2>
      <article>{{ blog.body | apriori-snippet }}</article>
    </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';

export default {
  data:function(){
    return{
      blogs: [],
      search: ''
    }
  },

  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
      // 得到前十个对象
      this.blogs = data.body.slice(0, 10);
    });
  },

  computed: {

  },

  /* ##################################### */

  filters: {
    // 'apriori-to-upppercase': function(value){
    //   return value.toUpperCase();
    // }

    aprioriToUpppercase(value){
      return value.toUpperCase(value);
    }
  },

  directives: {

    'AprioriRandomColor':{
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2, 8);
        // el.style.color = "red";
      }
    }
  },

  mixins: [searchMixin]

  /* ##################################### */

}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #ccc;
}

</style>
