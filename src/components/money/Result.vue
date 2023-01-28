<template>
  <div class="results-wrapper">
    <span>{{value}}</span>
  </div>
</template>

<script lang="js">
export default {
  name: "Result",
  props:['value']
};
</script>

<style scoped lang="scss">
.results-wrapper{
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 30px;
  background-color: #F0F8FF;
  font-weight: 600;
  font-size: 32px;
  color: #2D39A0;
;
}
</style>