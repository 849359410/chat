<template>
  <v-ons-page class="diary">
    <v-ons-toolbar>
      <div class="center" style="font-size: 14px;font-weight: bold">通讯录</div>
      <div class="right" @click="goToFriends()" style="padding-right: 14px">
        <v-ons-icon
          size="22px"
          style="color: #2A2A2A"
          icon="fa-ic-AddFriend"
        ></v-ons-icon>
      </div>
    </v-ons-toolbar>
    <v-ons-row class="diary-row">
      <v-ons-search-input
        class="diary-row_input"
        placeholder="搜索"
        v-model="search"
      ></v-ons-search-input>
    </v-ons-row>

    <v-ons-list
      v-show="!arrByZM.length"
      v-for="(item, index) in list"
      :key="index"
      class="diary-list"
    >
      <v-ons-list-header v-if="item.name">{{ item.name }}</v-ons-list-header>
      <ons-list-item
        v-for="(i, index1) in item.list"
        @click="goToPersonal(i.path, index1)"
        :key="index1"
      >
        <div class="left">
          <img class="list-item__thumbnail" :src="i.img" />
        </div>
        <div class="center">
          <p>{{ i.name }}</p>
        </div>
      </ons-list-item>
    </v-ons-list>

    <!-- 搜索内容渲染 -->
    <v-ons-list v-show="arrByZM.length" class="diary-list">
      <v-ons-list-item v-for="(item, index) in arrByZM" :key="index">
        <div class="left">
          <img class="list-item__thumbnail" :src="item.img" />
        </div>
        <div class="center">
          <p>{{ item.name }}</p>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <Footer></Footer>
  </v-ons-page>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "diary",
  components: { Footer },
  data() {
    return {
      search: "",
      arrByZM: [],
      list: [
        {
          name: "",
          list: [
            {
              img: "https://placekitten.com/g/40/40",
              name: "新的朋友",
              path: "NewFriend"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "群聊",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "标签",
              path: "Personal"
            }
          ]
        },
        {
          name: "星标朋友",
          list: [
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1朋友朋友朋友朋友朋友朋友朋友朋友朋友",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              path: "Personal"
            }
          ]
        }
      ]
    };
  },
  watch: {
    search(n) {
      this.arrByZM = [];
      if (n) {
        this.list.forEach(i => {
          i.list.forEach(j => {
            if (j.name.search(n) !== -1) {
              this.arrByZM.push(j);
            }
          });
        });
      }
    }
  },
  created() {},
  methods: {
    goToPersonal(path, index) {
      if (path === "Personal") {
        this.$router.push({ name: path, params: { id: index } });
      } else this.$router.push({ name: path });
    },
    goToFriends() {
      this.$router.push({ name: "AddFriends" });
    }
  }
};
</script>

<style scoped lang="scss">
.diary {
  @at-root #{&}-row {
    padding: 10px;
    background-color: #ececec;
    @at-root #{&}_input {
      background-color: white;
      caret-color: #9eea6a;
      border-radius: 4px;
      font-size: 12px !important;
      width: 100%;
    }
    @at-root #{&}_input:focus {
      color: #9eea6a;
    }
  }
  @at-root #{&}-list {
    .center {
      p {
        width: 85%;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
