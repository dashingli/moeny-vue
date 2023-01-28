<template>
  <div class="select-wrapper">
    <img src="@/assets/img/homeImg.png" alt="homeImg">
    <div class="addButton-wrapper">
      <div class="button-wrapper">
        <button>
          <Icon icon-name="clothes"></Icon>
          <span>衣</span>
        </button>
        <button>
          <Icon icon-name="food"></Icon>
          <span>食</span>
        </button>
        <button>
          <Icon icon-name="home"></Icon>
          <span>住</span>
        </button>
        <button>
          <Icon icon-name="trip"></Icon>
          <span>行</span>
        </button>
        <button>
          <Icon icon-name="trip"></Icon>
          <span>行</span>
        </button>
      </div>
      <div class="add-wrapper">
        <button class="add-button">
          <Icon icon-name="add"></Icon>
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default {
  name: "Add",
  components:{
    Icon
  }
};
</script>

<style scoped lang="scss">
.select-wrapper{
  position: relative;
  img{
    width: 100%;
    height: 279px;
    object-fit:cover;
  }
  .addButton-wrapper{
    display: flex;
    position: absolute;
    bottom: 10px;
    width: 100%;
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .button-wrapper{
      display: flex;
      justify-content: center;
      gap:13px;
      width:276px;
      overflow: scroll;
      flex-wrap: nowrap;
      button{
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-style: none;
        border-radius: 10px;
        background: #FFFFFF;
        color:#2D39A0;
        width: 56px;
        height: 56px;
        box-shadow: -2px -1px 3px 0px #4A72D740 inset;
        span{
          padding-bottom: 3px;
        }
      }
    }
    .add-wrapper{
      flex:1;
      //border:1px solid blue;
      display: flex;
      justify-content: center;
      button{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size:10px;
        width: 56px;
        height: 56px;
        color: white;
        border-radius: 10px;
        outline: 1px white dashed;
        border-style: none;
        background-color: transparent;
      }
    }
  }

}
</style>