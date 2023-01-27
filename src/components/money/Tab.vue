<template>
  <div class="tab-wrapper">
    <div class="left-tab" v-bind:class="type === '+'?'selected':undefined" v-on:click="changeType('+')">
      <span>支出</span>
    </div>
    <div class="right-tab" v-bind:class="type === '-'?'selected':undefined" v-on:click="changeType('-')">
      <span>收入</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Vue from "vue";
@Component
export default class SwitchTabs extends Vue{
  type:string = '+';
  changeType(type:string){
    this.type = type;
  }
}
</script>

<style scoped lang="scss">
.tab-wrapper{
  display: flex;
  .left-tab,.right-tab{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 12px;
    color:#FFFFFF;
    background: linear-gradient(191.7deg, rgba(176, 198, 255, 0.3) 0.5%, rgba(204, 191, 242, 0.3) 100%);
  }
  .selected{
    background: linear-gradient(191.7deg, #B0C6FF 0.5%, #CCBFF2 100%);
    color:#2D39A0;
    box-shadow: 0 2px 6px rgba(70, 87, 129, 0.25);
  ;
  }
}
</style>