<template>
  <v-ons-page class="GroupNotice">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">
        群公告
      </div>
      <div
        class="right"
        style="padding-right: 12px"
        v-if="personal.state === 1"
      >
        <router-link
          style="display:inline-block;width: 100%;height: 100%;"
          :to="{ name: 'EditNotice' }"
          >编辑</router-link
        >
      </div>
    </v-ons-toolbar>

    <v-ons-list class="home-list">
      <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" :src="personal.img" />
          <span class="notification"></span>
        </div>
        <div class="center">
          <span class="list-item__title">
            {{ personal.name }}
          </span>
          <span class="list-item__subtitle">{{ personal.time }}</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <p style="padding: 10px 18px 0 18px">
      群公告群公告群公告群公告群公告群公告群公告群公告群公告
    </p>
    <p class="GroupNotice_bottom" v-if="personal.state !== 1">
      <span>———</span>
      &nbsp;仅群主及管理员可编辑&nbsp;
      <span>———</span>
    </p>
  </v-ons-page>
</template>

<script>
export default {
  name: "GroupNotice",
  data() {
    return {
      personal: {
        name: "BruceZhou.",
        img: "https://placekitten.com/g/40/40",
        state: 1,
        time: "2019-03-25 21:39"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.GroupNotice {
  @at-root #{&}_bottom {
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    font-size: 12px;
    color: #aaa;
  }
}
</style>
