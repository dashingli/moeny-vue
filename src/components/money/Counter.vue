<template>
  <div class="counter-wrapper">
    <button class="number-1 number-color" @click="inputContent">1</button>
    <button class="number-2 number-color" @click="inputContent">2</button>
    <button class="number-3 number-color" @click="inputContent">3</button>
    <button class="add ammm-color" @click="addContent">+</button>
    <button class="delete dee-color" @click="deleteNumber">删除</button>
    <button class="number-4 number-color" @click="inputContent">4</button>
    <button class="number-5 number-color" @click="inputContent">5</button>
    <button class="number-6 number-color" @click="inputContent">6</button>
    <button class="minus ammm-color">-</button>
    <button class="empty dee-color" @click="remove">清空</button>
    <button class="number-7 number-color" @click="inputContent">7</button>
    <button class="number-8 number-color" @click="inputContent">8</button>
    <button class="number-9 number-color" @click="inputContent">9</button>
    <button class="mul ammm-color">*</button>
    <button class="number-0 number-color" @click="inputContent">0</button>
    <button class="number-dot number-color" @click="inputContent">.</button>
    <button class="number-per number-color">%</button>
    <button class="modulo ammm-color">/</button>
    <button class="equal dee-color">
      ＝
    </button>
  </div>
</template>

<script lang="js">
export default {
  name: "Counter",
  methods:{
    inputContent(event){
      let content = event.target.innerText;
      this.$emit('clickNumber',content)
    },
    remove(){
      this.$emit('clickRemove','清空数据')
    },
    deleteNumber(){
      this.$emit('clickDelete','删除一个数据')
    },
    addContent(){
      this.$emit('clickContent','加法')
    }
  }
};
</script>

<style lang="scss" scoped>
.counter-wrapper {
  min-width: 100vw;
  display: grid;
  background: linear-gradient(191.7deg, #BADEFF 10.29%, rgba(218, 231, 255, 0.74) 66.32%, rgba(165, 179, 254, 0.81) 93.9%);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: center;
  > button {
    background-color: transparent;
    outline: none;
    border-style: none;
    font-size: large;
    color:#2D39A0;
  }
  .equal {
    grid-column: 5/6;
    grid-row: -3/-1;
    border-radius: 10px;
    background: linear-gradient(191.7deg, #7A98E7 0.5%, #B49CF7 100%);
    margin: 30% 10%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
}
</style>