<template>
    <footer>
        <p>{{ copyleft }}: {{ title }}</p>
    </footer>
</template>

<script>
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
