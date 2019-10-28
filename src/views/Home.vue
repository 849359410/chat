<template>
  <v-ons-page class="home">
    <v-ons-toolbar>
      <div class="center" style="font-size: 14px;font-weight: bold">微信</div>
      <div class="right" @click="showPopover($event, 'down', true)">
        <v-ons-toolbar-button>
          <v-ons-icon
            size="22px"
            style="color: #2A2A2A;font-weight: 100"
            icon="fa-ic-AddTo"
          ></v-ons-icon>
        </v-ons-toolbar-button>
        <!-- 弹出框 -->
        <v-ons-popover
          cancelable
          class="home-popover"
          :visible.sync="popoverVisible"
          :target="popoverTarget"
          :direction="popoverDirection"
          :cover-target="coverTarget"
        >
          <v-ons-list-item
            v-for="(item, index) in navList"
            :key="index"
            class="home-popover_item"
            @click="goToAddFriends(index)"
          >
            <div class="left">
              <v-ons-icon
                :icon="item.icon"
                class="list-item__icon"
              ></v-ons-icon>
            </div>
            <div class="center">
              {{ item.name }}
            </div>
          </v-ons-list-item>
        </v-ons-popover>
      </div>
    </v-ons-toolbar>

    <v-ons-row class="home-row">
      <v-ons-search-input
        class="home-row_input"
        placeholder="搜索"
        v-model="search"
      ></v-ons-search-input>
    </v-ons-row>

    <v-ons-list class="home-list" v-show="!arrByZM.length">
      <v-ons-list-item
        @click="goToChat()"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="left">
          <img class="list-item__thumbnail" :src="item.img" />
          <span class="notification" v-show="item.length">{{
            item.length
          }}</span>
        </div>
        <div class="center">
          <span class="list-item__title">
            <p>{{ item.name }}</p>
            <span>12:59</span>
          </span>
          <span class="list-item__subtitle">On the Internetw </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <!-- 搜索内容渲染 -->
    <v-ons-list class="home-list" v-show="arrByZM.length">
      <v-ons-list-item
        @click="goToChat()"
        v-for="(i, index) in arrByZM"
        :key="index"
      >
        <div class="left">
          <img class="list-item__thumbnail" :src="i.img" />
        </div>
        <div class="center">
          <span class="list-item__title">
            <p>{{ i.name }}</p>
            <span>12:59</span>
          </span>
          <span class="list-item__subtitle">On the Internetw </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <Footer></Footer>
  </v-ons-page>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "home",
  data() {
    return {
      list: [
        {
          name: "朋友1朋友1朋友1朋友1朋友1朋友1朋友1朋友1",
          img: "https://placekitten.com/g/40/40"
        },
        { name: "群聊", length: 22, img: "https://placekitten.com/g/40/40" },
        { name: "朋友2", img: "https://placekitten.com/g/40/40" },
        { name: "朋友3", img: "https://placekitten.com/g/40/40" },
        { name: "朋友4", img: "https://placekitten.com/g/40/40" },
        { name: "朋友5", img: "https://placekitten.com/g/40/40" },
        { name: "朋友6", img: "https://placekitten.com/g/40/40" },
        { name: "朋友7", img: "https://placekitten.com/g/40/40" },
        { name: "朋友8", img: "https://placekitten.com/g/40/40" },
        { name: "朋友9", img: "https://placekitten.com/g/40/40" },
        { name: "朋友1", img: "https://placekitten.com/g/40/40" },
        { name: "朋友1", img: "https://placekitten.com/g/40/40" }
      ],
      search: "",
      arrByZM: [],
      navList: [
        {
          icon: "md-face",
          name: "发起群聊"
        },
        {
          icon: "ion-aperture",
          name: "添加朋友"
        }
      ],
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: "up",
      coverTarget: false
    };
  },
  components: { Footer },
  watch: {
    search(n) {
      this.arrByZM = [];
      if (n) {
        this.list.forEach(i => {
          if (i.name.search(n) !== -1) {
            this.arrByZM.push(i);
          }
        });
      }
    }
  },
  methods: {
    goToChat() {
      this.$router.push({ name: "Chat" });
    },
    showPopover(event, direction, coverTarget = false) {
      this.popoverTarget = event;
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
      this.popoverVisible = true;
    },
    goToAddFriends(index) {
      if (index === 0) this.$router.push({ name: "GroupChat" });
      else this.$router.push({ name: "AddFriends" });
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  .left {
    position: relative;
    .notification {
      border-radius: 50%;
      font-size: 12px;
      height: 20px;
      width: 20px;
      padding: 0;
      line-height: 20px;
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
  .center {
    .list-item__title {
      font-size: 14px;
      p {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 80%;
      }
      span {
        font-size: 12px;
        float: right;
        color: #bbbbbb;
      }
    }
    .list-item__subtitle {
      max-width: 80%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  @at-root #{&}-row {
    padding: 10px;
    background-color: #ececec;
    @at-root #{&}_input {
      background-color: white;
      caret-color: #9eea6a;
      border-radius: 4px;
      width: 100%;
    }
  }
}
.home-popover {
  /deep/.popover--top {
    top: 44px !important;
    right: 4px !important;
  }
  /deep/ .popover-mask {
    background: transparent;
  }
  @at-root #{&}_item {
    color: white !important;
    .center {
      border-bottom: 1px solid #363131;
      background-image: none;
    }
  }
  /deep/.popover__content {
    width: 140px;
    background-color: #2a2a2a;
  }
  /deep/ .popover__arrow {
    width: 12px;
    height: 12px;
    margin-right: -12px;
    background-image: linear-gradient(
      45deg,
      #2a2a2a,
      #2a2a2a 50%,
      transparent 50%
    );
  }
}
</style>
