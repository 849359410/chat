<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>
      <div class="center" style="font-size: 14px;font-weight: bold">
        账号与安全
      </div>
    </v-ons-toolbar>

    <v-ons-list v-for="(item, index) in list" :key="index">
      <v-ons-list-item
        v-for="(i, key) in item.list"
        :key="key"
        modifier="chevron"
        @click="canRouterName(i.to)"
      >
        {{ i.name }}
        <div class="right">
          <span class="list-item__subtitle">{{ i.rightName }}</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-header style="min-height: 10px"></v-ons-list-header>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: "Security",
  data() {
    return {
      list: [
        {
          list: [
            {
              name: "微信号",
              rightName: "vx123456"
            }
          ]
        },
        {
          list: [
            {
              name: "手机号",
              rightName: 18688888888
            },
            {
              name: "微信密码",
              rightName: "修改密码",
	            to: "modifyPass"
            }
          ]
        }
      ]
    };
  },
	methods: {
		canRouterName(name) {
			console.log(name);
			this.$router.push({ name: name });
		}
	}
};
</script>

<style scoped lang="scss"></style>
