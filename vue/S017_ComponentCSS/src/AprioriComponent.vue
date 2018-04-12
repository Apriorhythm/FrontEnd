<template>
    <div>
        <h1>AprioriComponent的局部CSS</h1>
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

/* 使用scoped即可
 * 
 * 如果不用scoped，那么，在浏览器中可以看到，会有两个名字一样的style
 * 后面的style会覆盖前面的style
 * 在下面段代码中，如果没有加scoped，那么，页面中所有h1都会是蓝色
 * App.vue中的style就会失效
 *
 * 原理: unique id实现样式定位
 */


<style scoped>
    h1{
        color: blue;
    }
</style>
