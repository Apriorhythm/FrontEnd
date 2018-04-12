<template>
    <div>
        <!-- 全局 CSS -->
        <h1>App.vue的全局CSS</h1>
        <div>
            <AprioriComponentName></AprioriComponentName>
        </div>
    </div>

</template>

<script>

/* 局部Component */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
import AprioriComponent from './AprioriComponent.vue'
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

export default {
  name: 'app',
  data () {
    return {

    }
  },

/* 局部Component */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

  components: {
    'AprioriComponentName': AprioriComponent
  }

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

}
</script>

<style>
    h1{
        color: red;
    }
</style>
