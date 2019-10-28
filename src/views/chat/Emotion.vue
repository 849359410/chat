<template>
  <div class="ly-emotion">
    <slot></slot>
  </div>
</template>

<script>
import { EMOTION_LIST } from "../../assets/js/emoticon";
export default {
  name: "ly-emotion",
  mounted() {
    const name = this.$el.innerHTML;
    const list = EMOTION_LIST.contrastList;
    let index = list.indexOf(name),
      imgHTML = "";
    const listImg = EMOTION_LIST.staticList[`${index}`];
    if (index !== -1) {
      console.log(listImg);
      imgHTML = `<em style="background-position: ${listImg.x} ${
        listImg.y
      }"></em>`;
      // <img src="${EMOTION_LIST.staticList[index].img}">
    } else {
      imgHTML = ` <i class="fa fa-ic-arrow-left2" style="font-size: 20px;color: #2a2a2a"></i> `;
    }
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML;
    });
  }
};
</script>
<style scoped lang="scss">
.ly-emotion {
  display: inline-block;
  padding: 0 4px;
  /deep/ em {
    background: url("../../assets/img/emotion/emotion.png") no-repeat;
    vertical-align: middle;
    display: inline-block;
    background-size: 1900%;
    width: 26px;
    height: 26px;
  }
}
</style>
