<template>
  <v-ons-bottom-toolbar>
    <div class="tabbar">
      <label
        class="tabbar__item"
        v-for="(tab, index) in tabs"
        :key="tab.page"
        @click.prevent="$router.push({ name: tab.page })"
      >
        <input type="radio" :name="index" :checked="$route.name === tab.page" />
        <button class="tabbar__button">
          <span v-if="tab.page === 'Home'" class="notification"></span>
          <v-ons-icon
            :icon="tab.icon"
            v-if="$route.name === tab.page"
            style="font-size: 20px;padding-top: 8px;height: 24px"
            class="tabbar__icon"
          ></v-ons-icon>
          <v-ons-icon
            :icon="tab.ico"
            v-else
            style="font-size: 20px;padding-top: 8px;height: 24px"
            class="tabbar__icon"
          ></v-ons-icon>
          <div class="tabbar__label">{{ tab.label }}</div>
        </button>
      </label>
    </div>
  </v-ons-bottom-toolbar>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      tabs: [
        {
          label: "微信",
          ico: "fa-ic-WeChat",
          icon: "fa-ic-WeChatBg",
          page: "Home"
        },
        {
          label: "通讯录",
          ico: "fa-ic-Mail",
          icon: "fa-ic-MailBg",
          page: "Diary"
        },
        {
          label: "发现",
          ico: "fa-ic-Find",
          icon: "fa-ic-FindBg",
          page: "Find"
        },
        { label: "我", ico: "fa-ic-My", icon: "fa-ic-MyBg", page: "My" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.tabbar {
  height: 50px;
  .notification {
    position: absolute;
    display: inline-block;
    right: 28px;
    top: 8px;
    min-width: 8px !important;
    height: 8px;
  }
}
</style>
