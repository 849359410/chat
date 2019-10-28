<template>
  <v-ons-page class="AddFriends">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">
        添加好友
      </div>
    </v-ons-toolbar>

    <v-ons-row>
      <v-ons-search-input
        placeholder="账号/手机号"
        style="caret-color: #9eea6a;width: 100%"
      ></v-ons-search-input>
    </v-ons-row>
    <v-ons-list-header style="text-align: center;padding: 10px">
      我的微信号：vx123456
    </v-ons-list-header>

    <v-ons-list>
      <ons-list-item @click="goToPersonal()">
        <div class="left">
          <img
            class="list-item__thumbnail"
            src="https://placekitten.com/g/40/40"
          />
        </div>
        <div class="center">
          搜到了
        </div>
      </ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: "AddFriends",
  methods: {
    goToPersonal() {
      this.$router.push({ name: "Personal", params: { id: 1 } });
    }
  }
};
</script>
<style scoped lang="scss"></style>
