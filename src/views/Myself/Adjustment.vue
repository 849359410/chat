<template>
  <v-ons-page class="Adjustment">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">设置</div>
    </v-ons-toolbar>

    <v-ons-list v-for="(item, index) in list" :key="index">
      <v-ons-list-item
        v-for="(i, key) in item.list"
        :key="key"
        @click="goToRouteName(i.path)"
        modifier="chevron"
      >
        {{ i.name }}
        <div class="right">
          <span class="list-item__subtitle">{{ i.rightName }}</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
    </v-ons-list>

    <v-ons-row>
      <v-ons-col class="button_col">
        <span>切换账号</span>
        <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
        <span>退出登录</span>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: "Adjustment",
  data() {
    return {
      list: [
        {
          list: [
            {
              name: "账号与安全",
              path: "Security"
            }
          ]
        },
        {
          list: [
            {
              name: "新消息通知"
            },
            {
              name: "隐私"
            },
            {
              name: "通用"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goToRouteName(path) {
      console.log(path);
      this.$router.push({ name: path });
    }
  }
};
</script>

<style scoped lang="scss">
.Adjustment {
  .button_col {
    span {
      display: inline-block;
      text-align: center;
      width: 100%;
      padding: 10px 0;
    }
  }
}
</style>
