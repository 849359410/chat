<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center" style="font-size: 14px;font-weight: bold">发现</div>
    </v-ons-toolbar>
    <v-ons-list v-for="(item, index) in list" :key="index">
      <ons-list-item
        v-for="(i, index1) in item.list"
        :key="index1"
        modifier="chevron"
      >
        <div class="left">
          <!--<v-ons-icon :icon="i.icon" style="color: #00d00b"></v-ons-icon>-->
          <img :src="i.img" width="20" alt="" />
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
import Footer from "../components/Footer";
import { FIND_IMG } from "../assets/js/images";
export default {
  name: "find",
  components: { Footer },
  data() {
    return {
      list: [
        {
          list: [
            {
              img: FIND_IMG[0].img,
              icon: "ion-aperture",
              name: "朋友圈"
            }
          ]
        },
        {
          list: [
            {
              img: FIND_IMG[1].img,
              icon: "ion-aperture",
              name: "扫一扫"
            },
            {
              img: FIND_IMG[2].img,
              icon: "ion-briefcase",
              name: "摇一摇"
            },
            {
              img: FIND_IMG[3].img,
              icon: "ion-aperture",
              name: "看一看"
            }
          ]
        },
        {
          list: [
            {
              img: FIND_IMG[4].img,
              icon: "ion-aperture",
              name: "搜一搜"
            },
            {
              img: FIND_IMG[5].img,
              icon: "ion-clock",
              name: "朋友1"
            },
            {
              img: FIND_IMG[6].img,
              icon: "ion-aperture",
              name: "朋友1"
            },
            {
              img: FIND_IMG[7].img,
              icon: "ion-happy",
              name: "朋友1"
            },
            {
              img: FIND_IMG[8].img,
              icon: "ion-aperture",
              name: "标签"
            },
            {
              icon: "ion-heart",
              name: "朋友1"
            },
            {
              icon: "ion-heart",
              name: "朋友1"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
