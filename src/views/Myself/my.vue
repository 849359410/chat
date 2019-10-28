<template>
  <v-ons-page>
    <!-- 个人信息 -->
    <v-ons-list>
      <ons-list-item
        modifier="chevron"
        style="padding-top: 14px"
        @click="goToMyInformation()"
      >
        <div class="left">
          <img
            class="list-item__thumbnail"
            src="https://placekitten.com/g/40/40"
          />
        </div>
        <div class="center">
          <span class="list-item__title">自己</span>
          <span class="list-item__subtitle">微信号：vx123456</span>
        </div>
      </ons-list-item>
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
    </v-ons-list>

    <v-ons-list v-for="(item, index) in list" :key="index">
      <ons-list-item
        v-for="(i, index1) in item.list"
        @click="jumpRoute(i)"
        :key="index1"
        modifier="chevron"
      >
        <div class="left">
          <!--<v-ons-icon :icon="i.icon" style="color: #00d00b"></v-ons-icon>-->
          <img :src="i.img" width="20" height="20" alt="" />
        </div>
        <div class="center">
          {{ i.name }}
        </div>
      </ons-list-item>
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
    </v-ons-list>
    <Footer></Footer>
  </v-ons-page>
</template>

<script>
import Footer from "../../components/Footer";
import { MY_IMG } from "../../assets/js/images";

export default {
  name: "my",
  data() {
    return {
      list: [
        {
          list: [
            {
              img: MY_IMG[0].img,
              icon: "ion-aperture",
              name: "支付"
            }
          ]
        },
        {
          list: [
            {
              img: MY_IMG[1].img,
              icon: "ion-aperture",
              name: "收藏"
            },
            {
              img: MY_IMG[1].img,
              icon: "ion-briefcase",
              name: "相册"
            },
            {
              img: MY_IMG[2].img,
              icon: "ion-aperture",
              name: "卡包"
            },
            {
              img: MY_IMG[3].img,
              icon: "ion-clock",
              name: "表情"
            }
          ]
        },
        {
          list: [
            {
              img: MY_IMG[4].img,
              icon: "ion-heart",
              path: "Adjustment",
              name: "设置"
            }
          ]
        }
      ]
    };
  },
  components: { Footer },
  methods: {
    goToMyInformation() {
      this.$router.push({ name: "MyInformation" });
    },
    jumpRoute(item) {
      console.log(item);
      if (item.path) this.$router.push({ name: "Adjustment" });
    }
  }
};
</script>

<style scoped></style>
