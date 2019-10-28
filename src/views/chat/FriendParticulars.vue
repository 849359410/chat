<template>
  <v-ons-page class="FriendParticulars">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">
        聊天详情
      </div>
    </v-ons-toolbar>

    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          置顶消息
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          消息免打扰
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>

      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>

      <v-ons-list-item modifier="chevron" @click="actionSheetVisible = true">
        <div class="center">
          清空聊天记录
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable>
      <v-ons-action-sheet-button icon="md-square-o" modifier="destructive"
        >清空聊天记录</v-ons-action-sheet-button
      >
      <v-ons-action-sheet-button
        icon="md-square-o"
        style="color: #2A2A2A"
        @click="actionSheetVisible = false"
      >
        取消
      </v-ons-action-sheet-button>
    </v-ons-action-sheet>
  </v-ons-page>
</template>

<script>
export default {
  name: "FriendParticulars",
  data() {
    return {
      actionSheetVisible: false
    };
  }
};
</script>

<style scoped lang="scss"></style>
