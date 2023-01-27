<template>
<div>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+iconName" />
  </svg>
</div>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
export default {
  name: "Icon",
  props:['iconName']
};
</script>

<style scoped lang="scss">
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>