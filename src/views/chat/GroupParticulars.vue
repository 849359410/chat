<template>
  <v-ons-page class="GroupParticulars">
    <v-ons-toolbar class="GroupParticulars-toolbar">
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center">聊天信息({{ list.length }})</div>
    </v-ons-toolbar>

    <div class="GroupParticulars-list">
      <ul class="outer">
        <li v-for="(i, index) in data" :key="index">
          <router-link :to="{ name: 'Personal', params: { id: index } }">
            <img :src="i.img" alt="" />
            <p>{{ i.name }}</p>
          </router-link>
        </li>
        <li>
          <div>
            <router-link :to="{ name: 'GroupChat' }" class="router">
              <i>+</i>
            </router-link>
          </div>
        </li>
        <li v-if="state === 1">
          <div>
            <router-link :to="{ name: 'GroupChat' }" class="router">
              <i>-</i>
            </router-link>
          </div>
        </li>
      </ul>
      <router-link
        :to="{ name: 'GroupMember' }"
        class="GroupParticulars-link"
        v-if="list.length > 19"
      >
        查看更多群成员
        <v-ons-icon icon="chevron-right"></v-ons-icon>
      </router-link>
    </div>

    <v-ons-list class="GroupParticulars-OnsList">
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
      <v-ons-list-item
        v-for="(item, index) in listOne"
        :key="index"
        @click="goToRoute(item.path, index)"
        class="GroupParticulars-OnsList_Nickname"
        modifier="chevron"
      >
        <div class="center" style="font-size: 14px;font-weight: bold">
          {{ item.name }}
        </div>
        <div class="right" :style="`width: ${item.width}`">
          <p class="list-item__subtitle">{{ item.rightName }}</p>
        </div>
      </v-ons-list-item>
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
    </v-ons-list>

    <v-ons-row>
      <v-ons-col class="button_col">
        <span style="border-bottom: 1px solid #ccc">清空聊天记录</span>
        <span>删除并退出</span>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: "GroupParticulars",
  data() {
    return {
      state: 1, // 1 管理员状态， 2 普通群成员
      list: [
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊12", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" },
        { name: "我去啊", img: "https://placekitten.com/g/40/40" }
      ],
      listOne: [
        {
          name: "群聊名称",
          rightName: "头像头像头像头像头像头像头像头像头像头像",
          path: "ModifyNickname",
          width: "75%"
        },
        {
          name: "群公告",
          rightName: "各位备注一下群昵称",
          path: "GroupNotice",
          width: "75%"
        },
        {
          name: "我在本群的昵称",
          rightName: "BruceZhou",
          path: "ModifyNickname",
          width: "60%"
        }
      ],
      data: []
    };
  },
  created() {
    if (this.list.length > 18 && this.state === 1)
      this.data = this.list.slice(0, 18);
    else if (this.list.length > 19 && this.state === 2)
      this.data = this.list.slice(0, 19);
    else this.data = this.list;
  },
  methods: {
    goToRoute(path, index) {
      this.$router.push({ name: path, params: { id: index } });
    }
  }
};
</script>

<style scoped lang="scss">
.GroupParticulars {
  @at-root #{&}-toolbar {
    background-color: white;
    .center {
      font-size: 14px;
      font-weight: bold;
    }
  }
  @at-root #{&}-list {
    ul {
      margin: 0;
      li {
        float: left;
        width: 20%;
        padding: 6px 0;
        text-align: center;
        a.router {
          width: 42px;
          height: 42px;
          border-radius: 4px;
          border: 2px solid #ccc;
          i {
            font-size: 28px;
            color: #ccc;
            line-height: 42px;
          }
        }
        a {
          display: inline-block;
          width: 48px;
          margin: 0 auto;
          img {
            border-radius: 4px;
            width: 42px;
            height: 42px;
          }
          p {
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  @at-root #{&}-link {
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    color: #bbbbbb;
    text-align: center;
  }
  @at-root #{&}-OnsList {
    @at-root #{&}_Nickname {
      .right {
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .list-item__subtitle {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .button_col {
    padding-bottom: 20px;
    background-color: #ecebf1;
    span {
      background-color: white;
      display: inline-block;
      text-align: center;
      width: 100%;
      padding: 10px 0;
      color: #fe3824;
    }
  }
}
</style>
