<template>
<div class="wrapper">
  <main>
    <router-view />
  </main>
  <footer>
    <router-link active-class="link-item-active" to="/label" class="link-item">
      <Icon icon-name="label"></Icon>
      标签
    </router-link>
    <router-link active-class="link-item-active" to="/money" class="link-item">
      <Icon icon-name="money"></Icon>
      记账
    </router-link>
    <router-link active-class="link-item-active" to="/statistics" class="link-item">
      <Icon icon-name="statistics"></Icon>
      统计
    </router-link>
  </footer>
</div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default {
  name: "Router",
  components: {Icon}
};
</script>

<style scoped lang="scss">

.wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main{
    flex:1;
  }
  footer{
    min-width: 100vw;
    display: flex;
    background-color: #252a32;
  }
  .link-item{
    display: flex;
    padding-bottom: 10px;
    padding-top: 10px;
    flex-direction: column;
    width: 33.3333%;
    align-items: center;
    text-decoration: none;
    color: #f1f5f8;
  }
  .link-item-active{
    background-color: #f1f5f8;
    color: red;
  }
</style>