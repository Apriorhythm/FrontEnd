<template>
    <footer>
        <p>{{ copyleft }}</p>
    </footer>
</template>

<script>
export default {
  data () {
    return {
        copyleft: 'Copyleft 6666'
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
