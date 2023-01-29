<template>
  <div class="remark-wrapper">
    <label for="remark">备注:</label>
    <input type="text" @input="onInput"  placeholder="在此添加备注" id="remark">
  </div>
</template>

<script lang="js">
export default {
  name: "Remark",
  data(){
    return{
      value : ''
    }
  },
  watch:{
    value(value){
      this.$emit('update:remark',value);
    }
  },
  methods:{
    onInput(event){
      this.value = event.target.value
    }
  }
};
</script>

<style scoped lang="scss">
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
    background: none;
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