<template>
<div class="money-wrapper">
  <Title></Title>
  <Add></Add>
  <div class="remark-wrapper">
    <label for="remark">备注:</label>
    <input type="text" placeholder="在此添加备注" id="remark">
  </div>
</div>
</template>

<script lang="ts">

import Title from "@/components/money/Title.vue";
import Add from "@/components/money/Add.vue";
export default {
  name: "Money",
  components:{
    Add,
    Title,
  }
};
</script>

<style scoped lang="scss">
  .money-wrapper{
    flex:1;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 279px 0.4fr 0.5fr 0.7fr 1.5fr auto;
    background: linear-gradient(191.7deg, #BADEFF 10.29%, rgba(218, 231, 255, 0.74) 66.32%, rgba(165, 179, 254, 0.81) 93.9%);
  }
  .remark-wrapper{
    display: flex;
    align-items: center;
    background-color: #F0F8FF;
    color: #2D39A0;
    label{
      font-weight: 600;
      font-size: 16px;
      line-height: 12px;
      padding-left:10px;
    }
    #remark{
      border-style: none;
      outline: none;
      padding-left: 10px;
    }
    #remark::placeholder{
      color: #2D39A0;
      opacity: 0.5;
      font-weight: 600;
      font-size: 12px;
      line-height: 12px;
    }
  }

</style>