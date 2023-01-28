<template>
  <div class="counter-wrapper">
    <button class="number-1 number-color" @click="inputContent">1</button>
    <button class="number-2 number-color" @click="inputContent">2</button>
    <button class="number-3 number-color" @click="inputContent">3</button>
    <button class="delete dee-color" @click="deleteNumber">删除</button>
    <button class="number-4 number-color" @click="inputContent">4</button>
    <button class="number-5 number-color" @click="inputContent">5</button>
    <button class="number-6 number-color" @click="inputContent">6</button>
    <button class="empty dee-color" @click="remove">清空</button>
    <button class="number-7 number-color" @click="inputContent">7</button>
    <button class="number-8 number-color" @click="inputContent">8</button>
    <button class="number-9 number-color" @click="inputContent">9</button>
    <button class="number-0 number-color" @click="inputContent">0</button>
    <button class="number-dot number-color" @click="inputContent">.</button>
    <button class="equal dee-color" @click="counterNumber">
      OK
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
    counterNumber(){
      this.$emit('clickCounter','计算结果')
    }
  }
};
</script>

<style lang="scss" scoped>
.counter-wrapper {
  min-width: 100vw;
  display: grid;
  background: linear-gradient(191.7deg, #BADEFF 10.29%, rgba(218, 231, 255, 0.74) 66.32%, rgba(165, 179, 254, 0.81) 93.9%);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: center;
  .number-1{
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .number-2{
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .number-3{
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .number-4{
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .number-5{
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .number-6{
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .number-7{
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .number-8{
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .number-9{
    grid-column: 3/4;
    grid-row: 3/4;
  }
  .number-0{
    grid-column: 1/3;
    grid-row: 4/5;
  }
  .number-dot{
    grid-column: 3/4;
    grid-row: 4/5;
  }
  .delete{
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .empty{
    grid-column: 4/5;
    grid-row: 2/3;
  }
  > button {
    background-color: transparent;
    outline: none;
    border-style: none;
    font-size: large;
    color:#2D39A0;
  }
  .equal {
    grid-column: 4/5;
    grid-row: 3/5;
    border-radius: 10px;
    background: linear-gradient(191.7deg, #7A98E7 0.5%, #B49CF7 100%);
    margin: 30% 10%;
    box-shadow: rgba(0, 0, 0, 0.16)  3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  }
}
</style>