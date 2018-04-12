/* 有一点必须注意，template内部必须只有一个根元素 */
/* 下面使用的是div，也可以是其他的，比如<ul> */

<template>
    <div><!-- 这个div之前的内容非法 -->
        <h1>Global Component</h1>
        <div>
            <AprioriGlobalComponentName></AprioriGlobalComponentName>
        </div>
        <br>

        <h1>Local Component</h1>
        <div>
            <AprioriLocalComponentName></AprioriLocalComponentName>
        </div>

        <!-- 下面这个div后面的内容非法 -->
    </div>

</template>

<script>

/* 局部Component */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
import AprioriLocalComponent from './AprioriLocalComponent.vue'
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
    'AprioriLocalComponentName': AprioriLocalComponent
  }

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

}
</script>

<style lang="scss">

</style>
