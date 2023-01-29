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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main{
    width: 100%;
    display: flex;
    flex:1;
  }
  footer{
    width: 100vw;
    display: flex;
    background:linear-gradient(191.7deg, #B0C6FF 0.5%, #CCBFF2 100%);
  }
  .link-item{
    display: flex;
    flex-direction: column;
    width: 33.3333%;
    align-items: center;
    text-decoration: none;
    color: #838EC9;
  }
  .link-item-active{
    color:#2D39A0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>