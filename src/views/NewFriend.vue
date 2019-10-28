<template>
  <v-ons-page class="NewFriend">
    <v-ons-toolbar style="font-size: 17px">
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        新的朋友
      </div>
      <div class="right">
        <router-link
          :to="{ name: 'AddFriends' }"
          style="font-size: 14px;color: #2A2A2A;padding-right: 10px"
        >
          添加朋友
        </router-link>
      </div>
    </v-ons-toolbar>

    <v-ons-list class="NewFriend-list">
      <v-ons-list-item v-for="(item, index) in list" :key="index">
        <div class="left">
          <img class="list-item__thumbnail" :src="item.img" />
        </div>
        <div class="center">
          <span class="list-item__title">
            {{ item.name }}
          </span>
          <span class="list-item__subtitle">
            {{ item.AddName }}
          </span>
        </div>
        <div class="right">
          <span style="font-size: 12px;color: #bbbbbb">
            {{ state[item.state] }}</span
          >
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: "NewFriend",
  data() {
    return {
      list: [
        {
          name: "朋友1朋友2朋友3朋友4朋友5朋友6",
          state: 1,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友2",
          state: 2,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友1朋友2朋友3朋友4朋友5朋友6",
          state: 3,
          AddName: "我是123.我是123.我是123.我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友4",
          state: 4,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友5",
          state: 3,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友6",
          state: 3,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友7",
          state: 3,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友8",
          state: 1,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友9",
          state: 2,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友1",
          state: 1,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "朋友1",
          state: 2,
          AddName: "我是123.",
          img: "https://placekitten.com/g/40/40"
        }
      ],
      state: {
        1: "已添加",
        2: "已拒绝",
        3: "等待验证",
        4: "已过期"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.NewFriend {
  @at-root #{&}-list {
    .center {
      width: 50%;
      .list-item__title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
      .list-item__subtitle {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
      }
    }
  }
}
</style>
