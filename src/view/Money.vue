<template>
<div class="money-wrapper">
  <Title></Title>
  <Add></Add>
  <Remark></Remark>
  <Tab></Tab>
  <Result v-bind:value="clickNumber"></Result>
  <counter v-on:clickNumber="showValue"
           v-on:clickRemove = "removeValue"
           v-on:clickDelete="deleteValue"
           v-on:clickAdd = 'addValue'
  >

  </counter>
</div>
</template>

<script lang="js">

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
  },
  data(){
    return {clickNumber : '0'}
  },
  methods:{
    showValue:function (dataValue){
      console.log(dataValue);
      if(this.clickNumber.length > 16){
        return;
      }
      if(this.clickNumber === '0' && dataValue !== '.'){
        this.clickNumber = '';
      }
      if(this.clickNumber.includes('.') && dataValue === '.'){
        return;
      }
      this.clickNumber += dataValue;

    },
    removeValue:function (dataValue){
      this.clickNumber = '0';
    },
    deleteValue:function (dataValue){
      let numberLength = this.clickNumber.length;
      if(numberLength === 1){
        this.clickNumber = '0'
      }else{
        this.clickNumber = this.clickNumber.substring(0,numberLength-1);
      }

    },
    addValue:function (dataValue){

    }
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