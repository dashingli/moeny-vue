<template>
  <div class="tab-wrapper">
    <div
      class="left-tab"
      v-bind:class="type === '-' ? 'selected' : undefined"
      v-on:click="changeType('-')"
    >
      <span>支出</span>
    </div>
    <div
      class="right-tab"
      v-bind:class="type === '+' ? 'selected' : undefined"
      v-on:click="changeType('+')"
    >
      <span>收入</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class SwitchTabs extends Vue {
  type: string = "-";
  changeType(type: string) {
    this.type = type;
  }
  @Watch("type")
  onTypeChanged(type: string) {
    this.$emit("update:type", type);
  }
}
</script>

<style scoped lang="scss">
.tab-wrapper {
  display: flex;
  .left-tab,
  .right-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 12px;
    color: #ffffff;
    background: linear-gradient(
      191.7deg,
      rgba(176, 198, 255, 0.3) 0.5%,
      rgba(204, 191, 242, 0.3) 100%
    );
  }
  .selected {
    background: linear-gradient(191.7deg, #b0c6ff 0.5%, #ccbff2 100%);
    color: #2d39a0;
    box-shadow: 0 2px 6px rgba(70, 87, 129, 0.25);
  }
}
</style>
