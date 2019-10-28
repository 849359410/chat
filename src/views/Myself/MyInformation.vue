<template>
  <!-- 个人资料 -->
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">
        个人信息
      </div>
    </v-ons-toolbar>
    <v-ons-list>
      <!--<v-ons-list-header>Default</v-ons-list-header>-->
      <v-ons-list-item
        v-for="(i, index) in list"
        @click="dialogVisible = true"
        :key="index"
        modifier="chevron"
      >
        {{ i.name }}
        <div class="right">
          <img :src="i.img" alt="" />
          <span class="list-item__subtitle">{{ i.rightName }}</span>
          <!--<i class="zmdi zmdi-chevron-left" style="font-size: 21px"></i>-->
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-dialog cancelable :visible.sync="dialogVisible">
      <p style="text-align: center;background-color: white">Lorem ipsum</p>
      <div style="background-color: white">1234</div>
    </v-ons-dialog>
  </v-ons-page>
</template>

<script>
export default {
  name: "MyInformation",
  data() {
    return {
      dialogVisible: false,
      list: [
        {
          name: "头像",
          img: "https://placekitten.com/g/40/40"
        },
        {
          name: "名字",
          rightName: "BruceZhou."
        },
        {
          name: "微信号",
          rightName: "vx123456"
        },
        {
          name: "更多"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped></style>
