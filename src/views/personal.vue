<template>
  <v-ons-page class="personal">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></ons-toolbar-button>
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        Cutest kitty
      </div>
    </v-ons-toolbar>
    <v-ons-list>
      <ons-list-item>
        <div class="left">
          <img
            class="list-item__thumbnail"
            width="50"
            height="50"
            src="https://placekitten.com/g/40/40"
          />
        </div>
        <div class="center">
          <span class="list-item__title">Cutest kitty</span>
          <span class="list-item__subtitle">微信号：lhb123456</span>
          <span class="list-item__subtitle">地区：广东 广州</span>
        </div>
      </ons-list-item>

      <v-ons-list-header></v-ons-list-header>
      <v-ons-list-item modifier="chevron">
        <div class="left">朋友圈</div>
        <div class="center">
          <img src="https://placekitten.com/g/40/40" alt="" />
          <img src="https://placekitten.com/g/40/40" alt="" />
          <img src="https://placekitten.com/g/40/40" alt="" />
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron">更多信息</v-ons-list-item>

      <v-ons-list-header></v-ons-list-header>
    </v-ons-list>
    <v-ons-row>
      <v-ons-col class="button_col">
        <span>
          <router-link :to="{ name: 'Chat' }">发消息</router-link>
        </span>
        <span>视频</span>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: "personal",
  created() {
    console.log(this.$route.params);
  }
};
</script>

<style scoped lang="scss">
.personal {
  .button_col {
    span {
      display: inline-block;
      text-align: center;
      width: 100%;
      padding: 10px 0;
      border-bottom: 1px solid #e9e9e9;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
