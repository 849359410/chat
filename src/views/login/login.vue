<template>
  <v-ons-page class="login">
	  <Share-Head></Share-Head>

    <div class="login-form">
      <label>用户名</label>
      <v-ons-col>
        <v-ons-input
          type="text"
          class="login-form_input"
          placeholder="请输用户名"
          v-model="params.account"
        >
        </v-ons-input>
      </v-ons-col>
      <label>密码</label>
      <v-ons-col>
        <v-ons-input
          type="password"
          placeholder="请输入密码"
          class="login-form_input"
          v-model="params.password"
        >
        </v-ons-input>
      </v-ons-col>

      <v-ons-col>
        <v-ons-button class="login-form_button" @click="canLogin()">
	        登录
        </v-ons-button>
      </v-ons-col>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      params: {
	      account: "",
        password: ""
      }
    };
  },
	methods: {
		canLogin() {
			if (!this.canUser()) return;
			console.log(123);
			this.$utils.api("API_POST_USER_LOGIN", { params: this.params }).then(
				(success) => {
					console.log("success", success);
					this.$root.$emit("handleSuccess", success.message);
				}, error => this.$root.$emit('handleError', error)
			)
		},
		canUser() {
			const password = this.params.password.replace(/\s+/g, "");
			if (!this.params.username || !this.params.password) {
				this.$root.$emit("handleError", "用户名或密码不能为空");
				return false;
			}
			if (password.length < 6) {
				this.$root.$emit("handleError", "密码长度最小为6位");
				return false;
			}
			return true;
		}
	}
};
</script>

<style scoped lang="scss">
.login {
  @at-root #{&}-form {
    padding: 40% 10px 10px 10px;
    text-align: center;
    @at-root #{&}_input {
      border: 1px solid #ccc;
      width: 70%;
      padding-left: 6px;
      margin: 8px 0;
    }
    @at-root #{&}_button {
      width: 72%;
      background-color: #00d00b;
    }
  }
}
</style>
