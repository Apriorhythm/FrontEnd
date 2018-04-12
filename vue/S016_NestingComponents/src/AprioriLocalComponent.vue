<template>
    <div>
        <p>My name is {{ name }}</p>
        <p>{{ whereAmI }}</p>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Apriorhythm',
      whereAmI: 'Local'
    }
  },
}
</script>

<style lang="scss">

</style>
