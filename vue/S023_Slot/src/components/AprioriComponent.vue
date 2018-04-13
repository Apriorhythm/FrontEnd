<template>
  <div>
    <slot name="slot1"></slot>
    <h1>In AprioriComponent</h1>
    <slot name="slot2"></slot>
    <hr>
    <slot name="slotDynamic"></slot>
    <hr><hr>

    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="form-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
      </div>
    </form>


  </div>
</template>



<script>
export default {

  props:{
    title:{
      type:String
    }
  },

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>
form > div{
  background-color: #C0C0C0;
}
</style>
