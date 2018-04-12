<template>
    <div>
        <li v-for="word in words">
            <p>{{ word.english }} : {{ word.number }}</p>
        </li>
    </div>
</template>

<script>
export default {

/* ######################### */
/* 数据来源于其他地方 */
/* 简单定义:
/* props: ['words'],
/* ######################### */


/* 包含验证 */
  props:{
    words:{
      type: Array,
      required: true
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
