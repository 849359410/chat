<template>
  <v-ons-page class="GroupChat">
    <v-ons-toolbar style="font-size: 17px">
      <div
        class="left"
        @click="$router.back(-1)"
        style="padding-left: 12px;font-size: 14px"
      >
        取消
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        选择联系人
      </div>
      <div class="right">
        <v-ons-button
          :disabled="checkedColors.length ? false : true"
          style="padding: 0 8px;margin-right: 6px;font-size: 14px"
        >
          完成
          <span v-if="checkedColors.length">({{ checkedColors.length }})</span>
        </v-ons-button>
      </div>
    </v-ons-toolbar>

    <!-- 添加群聊好友列表 -->

    <v-ons-list v-for="(item, index) in list" :key="index">
      <v-ons-list-header v-if="item.name">{{ item.name }}</v-ons-list-header>
      <ons-list-item v-for="(i, $index) in item.list" :key="$index" tappable>
        <label class="left">
          <v-ons-checkbox
            :input-id="i.id"
            :value="i.id"
            v-model="checkedColors"
          >
          </v-ons-checkbox>
          <img
            class="list-item__thumbnail"
            style="margin-left: 12px"
            :src="i.img"
          />
        </label>
        <label class="center" style="font-size: 14px" :for="i.id">
          {{ i.name }}
        </label>
      </ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: "GroupChat",
  data() {
    return {
      list: [
        {
          name: "",
          list: [
            {
              img: "https://placekitten.com/g/40/40",
              name: "新的朋友新的朋友",
              id: 1
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "群聊",
              id: 2
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "标签",
              id: 3
            }
          ]
        },
        {
          name: "星标朋友",
          list: [
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 4
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 5
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 6
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 7
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 8
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 9
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 10
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 11
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 12
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 13
            },
            {
              img: "https://placekitten.com/g/40/40",
              name: "朋友1",
              id: 14
            }
          ]
        }
      ],
      checkedColors: ["1", "2"]
    };
  },
  watch: {
    checkedColors(n) {
      console.log(n);
    }
  }
};
</script>

<style scoped lang="scss"></style>
