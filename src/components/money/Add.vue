<template>
  <div class="select-wrapper">
    <img src="@/assets/img/homeImg.png" alt="homeImg">
    <div class="addButton-wrapper">
      <div class="button-wrapper">
        <button v-for="tag in tags" :key="tag.key" :class="{selected:selectedTags.indexOf(tag.key)>=0}" @click="onToggle(tag.key)">
          <Icon :icon-name="tag.iconName"></Icon>
          <span>{{tag.content}}</span>
        </button>
      </div>
      <div class="add-wrapper">
        <button class="add-button" @click="addTag">
          <Icon icon-name="add"></Icon>
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="js">
import Icon from "@/components/Icon.vue";
export default {
  name: "Add",
  components:{
    Icon
  },
  props:['tags','selectedTags'],
  methods:{
    onToggle(key){

      let index = this.selectedTags.indexOf(key)
      if(index >= 0){
        this.selectedTags.splice(index,1);
      }else{
        this.selectedTags.push(key);
      }
      console.log(this.selectedTags)


    },
    addTag(){
      const content = window.prompt('请输入标签名称');
      if(content === null || content === ""){
        return;
      }
      const key = this.tags[this.tags.length-1].key + 1;
      const tag = {
        iconName : "custom",
        content:content,
        key:key
      }
      this.$emit('update:tag', tag);
    }
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
      .selected{
        background: #8256FF;
        color:#FFFFFF;
      }
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