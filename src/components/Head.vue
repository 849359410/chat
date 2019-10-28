<template>
  <div class="Head">
    <div v-if="$route.name === 'home'">微信<span>(1)</span></div>
    <div v-if="$route.name === 'diary'">通讯录</div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.Head {
  background-color: #e9e9e9;
  text-align: center;
}
</style>
