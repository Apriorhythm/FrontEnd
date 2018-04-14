<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Title</label>
      <input type="text" v-model.lazy="blog.title"></input>
      <label>Content</label>
      <textarea  v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label>Music</label>
        <input type="checkbox" value="music" v-model="blog.categories" />
        <label>Video</label>
        <input type="checkbox" value="video" v-model="blog.categories" />
        <label>Game</label>
        <input type="checkbox" value="game" v-model="blog.categories" />
        <label>Misc</label>
        <input type="checkbox" value="misc" v-model="blog.categories" />
      </div>

      <div id="author">
        <label>Author: &nbsp;</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </div>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>

<!-- ################################### -->
    <div v-if="submitted">
      <p>Submitted</p>
    </div>
    <!-- ################################### -->

    <div id="preview">
      <h3>Preview</h3>
      <h5>Title: {{ blog.title }}</h5>
      <h5>Content:</h5>
      <p>{{ blog.content }}</p>
      <h5>Categories:</h5>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <h5>Author</h5>
      <p>{{ blog.author }}</p>
    </div>

  </div>
</template>


<script>
export default {

  props:{

  },

  data () {
    return {
      blog:{
        title: "",
        content: "",
        categories:[],
        author:""
      },

      authors: [
        'Leonard Walker',
        'Apriorhythm',
        'Unknown author'
      ],

      submitted:false
    }
  },

  methods: {

    /* ################################### */

    post:function(){
      this.$http.post("https://jsonplaceholder.typicode.com/posts", {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
    /* ################################### */

  }

}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin:20px auto;
  max-width:500px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}

#preview{
  padding: 10px 20px;
  border: 2px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}


#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}

#author *{
    display: inline-block;
}


</style>
