<template>
    <div>
        <p>My name is {{ name }}</p>
        <p>Where {{ whereAmI }}</p>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Apriorhythm',
      whereAmI: 'Global'
    }
  },
}
</script>

<style lang="scss">

</style>
