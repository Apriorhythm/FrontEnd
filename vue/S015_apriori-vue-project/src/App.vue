<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ greeting() }}</p>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'This is the title'
    }
  },

  methods: {
    greeting: function() {
        return 'Hello there!';
    }
  }

}
</script>

<style lang="scss">

</style>
