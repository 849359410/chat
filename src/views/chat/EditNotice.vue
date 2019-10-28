<template>
  <v-ons-page class="EditNotice">
    <v-ons-toolbar>
      <div
        class="left"
        @click="IsClose()"
        style="padding-left: 12px;font-size: 14px"
      >
        取消
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        群公告
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

    <textarea
      class="textarea textarea--transparent"
      v-model="notice"
    ></textarea>
    <v-ons-alert-dialog
      modifier="rowfooter"
      :visible.sync="alertDialog1Visible"
    >
      退出本次编辑？
      <template slot="footer">
        <v-ons-alert-dialog-button
          @click="alertDialog1Visible = false"
          style="color: #0076FF;"
          >继续编辑</v-ons-alert-dialog-button
        >
        <v-ons-alert-dialog-button
          @click="$router.back(-1)"
          style="color: #0076FF;"
          >退出</v-ons-alert-dialog-button
        >
      </template>
    </v-ons-alert-dialog>
  </v-ons-page>
</template>

<script>
export default {
  name: "EditNotice",
  data() {
    return {
      alertDialog1Visible: false,
      isShow: true,
      notice: "群公告"
    };
  },
  watch: {
    notice() {
      this.isShow = false;
    }
  },
  methods: {
    IsClose() {
      console.log(this.isShow);
      if (this.isShow === false) this.alertDialog1Visible = true;
      else this.$router.back(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.EditNotice {
  .textarea {
    width: 100%;
    height: 100%;
    padding: 10px 12px;
    caret-color: #9eea6a;
  }
}
</style>
