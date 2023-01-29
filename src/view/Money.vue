<template>
<div class="money-wrapper">
  <Title></Title>
  <Add :tags="tagsArray" v-on:update:tag="addTag" :selected-tags="selectedTags"></Add>
  <Remark v-on:update:remark="getRemark"></Remark>
  <Tab v-on:update:type="getType"></Tab>
  <Result v-bind:value="clickNumber"></Result>
  <counter v-on:clickNumber="showValue"
           v-on:clickRemove = "removeValue"
           v-on:clickDelete="deleteValue"
           v-on:clickCounter="getResult"
  >
  </counter>
  {{record}}
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
    return {
      clickNumber : '0',
      numArray : [],
      add:false,
      subtract:false,
      selectedTags:[],
      tagsArray:[
          {iconName:"clothes",content:"衣",key:1},
          {iconName:"food",content:"食",key:2},
          {iconName:"home",content:"住",key:3},
          {iconName:"trip",content:"行",key:4},
      ],
      record:{
        selected:[],
        remark:'',
        type:'-',
        result:0
      },
      recordList: JSON.parse(window.localStorage.getItem('recordList'))||[],
    }
  },
  methods:{
    showValue:function (dataValue){
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
    removeValue:function (){
      this.clickNumber = '0';
    },
    deleteValue:function (){
      let numberLength = this.clickNumber.length;
      if(numberLength === 1){
        this.clickNumber = '0'
      }else{
        this.clickNumber = this.clickNumber.substring(0,numberLength-1);
      }
    },
    addTag:function (dataValues){
      this.tagsArray.push(dataValues);
    },
    getSelectedTags(value){
      this.record.selected = value;
    },
    getRemark(value){
      this.record.remark = value;
    },
    getType(value){
      this.record.type = value;
    },
    getResult(){
      this.record.result = parseFloat(this.clickNumber);
      this.record.selected = this.selectedTags;
      if(this.clickNumber[this.clickNumber.length-1] === '.'){
        window.alert("请输入正确数字");
        return;
      }
      const record2 = JSON.parse(JSON.stringify(this.record));
      this.recordList.push(record2);
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList))

      this.clickNumber = '0';
      this.selectedTags = [];
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