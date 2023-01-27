<template>
  <div id="app">
    <Router />
  </div>
</template>
<script lang="ts">
import Router from '@/components/Router.vue'
export default {
  name: 'app',
  components:{
    Router
  }
}
</script>
<style lang="scss">

*,*::after,*::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "PingFang SC",serif;
}

</style>
