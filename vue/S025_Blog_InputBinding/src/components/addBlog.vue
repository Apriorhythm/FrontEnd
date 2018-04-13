<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Title</label>
      <input type="text" v-model.lazy="blog.title"></input>
      <label>Content</label>
      <textarea  v-model.lazy="blog.content"></textarea>
    </form>

    <div id="preview">
      <h3>Preview</h3>
      <h5>Title: {{ blog.title }}</h5>
      <h5>Content:</h5>
      <p>{{ blog.content }}</p>
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
        content: ""
      }
    }
  },

  methods: {

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

</style>
