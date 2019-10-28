<template>
  <v-ons-page class="ModifyNickname">
    <v-ons-toolbar>
      <div
        class="left"
        @click="$router.back(-1)"
        style="padding-left: 12px;font-size: 14px"
      >
        取消
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        {{ id === 0 ? "修改群昵称" : "我在本群的昵称" }}
      </div>
      <div class="right">
        <v-ons-button
          style="padding: 0 8px;margin-right: 6px;font-size: 14px"
          :disabled="isShow"
        >
          完成
        </v-ons-button>
      </div>
    </v-ons-toolbar>

    <div class="ModifyNickname-content">
      <p class="ModifyNickname-content_p">
        群聊名称
      </p>
      <v-ons-row class="ModifyNickname-content_row">
        <v-ons-input
          v-if="id === 0"
          v-model="nickname"
          class="ModifyNickname-content_row_input"
        ></v-ons-input>
        <v-ons-input
          v-else
          v-model="myName"
          class="ModifyNickname-content_row_input"
        ></v-ons-input>
        <i
          class="zmdi zmdi-close-circle"
          v-if="id === 0"
          @click="nickname = ''"
        ></i>
        <i class="zmdi zmdi-close-circle" v-else @click="myName = ''"></i>
      </v-ons-row>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: "ModifyNickname",
  data() {
    return {
      id: "",
      nickname: "1234",
      myName: "",
      isShow: true
    };
  },
  watch: {
    nickname() {
      this.isShow = false;
    },
    myName() {
      this.isShow = false;
    }
  },
  created() {
    this.id = Number(this.$route.params.id);
  }
};
</script>

<style scoped lang="scss">
.ModifyNickname {
  /deep/ .page__background {
    background-color: #ececec;
  }
  @at-root #{&}-content {
    @at-root #{&}_p {
      padding: 4px 0 4px 12px;
      font-size: 12px;
      color: #aaa;
    }
    @at-root #{&}_row {
      position: relative;
      @at-root #{&}_input {
        width: 100%;
        background-color: white;
        padding: 4px 40px 4px 12px;
        font-size: 14px;
      }
      i {
        font-size: 18px;
        position: absolute;
        top: 11px;
        right: 20px;
        color: #aaa;
      }
    }
  }
}
</style>
