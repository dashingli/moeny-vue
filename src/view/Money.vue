<template>
<div class="money-wrapper">
  <Title></Title>
  <Add></Add>
  <Remark></Remark>
  <Tab></Tab>
  <Result></Result>
  <counter></counter>
</div>
</template>

<script lang="ts">

import Title from "@/components/money/Title.vue";
import Add from "@/components/money/Add.vue";
import Remark from "@/components/money/Remark.vue";
import Tab from "@/components/money/Tab.vue";
import Counter from "@/components/money/Counter.vue";
import Result from "@/components/money/Result.vue";
export default {
  name: "Money",
  components:{
    Add,
    Title,
    Remark,
    Tab,
    Counter,
    Result
  }
};
</script>

<style scoped lang="scss">
  .money-wrapper{
    flex:1;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.15fr 279px 0.15fr 0.15fr 0.2fr auto;
    background: linear-gradient(191.7deg, #BADEFF 10.29%, rgba(218, 231, 255, 0.74) 66.32%, rgba(165, 179, 254, 0.81) 93.9%);
  }



</style>