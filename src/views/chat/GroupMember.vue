<template>
  <v-ons-page class="GroupMember">
    <v-ons-toolbar class="GroupMember-toolbar">
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center">群成员({{ list.length }})</div>
    </v-ons-toolbar>

    <!--<v-ons-row class="GroupMember-row">-->
    <!--<v-ons-search-input-->
    <!--class="GroupMember-row_input"-->
    <!--placeholder="搜索"-->
    <!--v-model="search"-->
    <!--&gt;</v-ons-search-input>-->
    <!--</v-ons-row>-->

    <div class="GroupMember-list">
      <ul class="outer">
        <li v-for="(i, index) in list" :key="index">
          <router-link :to="{ name: 'Personal', params: { id: index } }">
            <img :src="i.img" alt="" />
            <p>{{ i.name }}</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GroupChat' }" class="router">
            <i style="color: #ccc">+</i>
          </router-link>
        </li>
        <li v-if="state === 1">
          <router-link :to="{ name: 'GroupChat' }" class="router">
            <i style="color: #ccc">-</i>
          </router-link>
        </li>
      </ul>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: "GroupMember",
  data() {
    return {
      state: 1,
      search: "",
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
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.GroupMember {
  @at-root #{&}-toolbar {
    .center {
      font-size: 14px;
      font-weight: bold;
    }
  }
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
          width: 40px;
          height: 40px;
          border: 2px solid #ccc;
          line-height: 40px;
          font-size: 28px;
          border-radius: 4px;
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
}
</style>
