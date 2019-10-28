<template>
  <v-ons-page>
	  <Share-Head></Share-Head>

    <div class="login-form">
      <v-ons-col class="login-form_col">
        <label class="login-form_label">用户名：</label>
        <v-ons-input
          type="text"
          class="login-form_input"
          placeholder="请输用户名"
          maxlength="11"
          minlength="4"
          v-model="params.account"
          @blur="checkUserName"
        >
        </v-ons-input>

	      <div v-show="error.nameErr" class="forme-err">
		      <div class="FormErrorC" style="width: auto;">
			      ✖ {{ tips.nameErrTip }}
		      </div>
	      </div>
      </v-ons-col>

      <v-ons-col class="login-form_col">
        <label class="login-form_label">密码：</label>
        <v-ons-input
          type="password"
          placeholder="请输入密码"
          class="login-form_input"
          @blur="IsPass"
          v-model="params.password"
        >
        </v-ons-input>

	      <div v-show="error.passErr" class="forme-err">
		      <div class="FormErrorC" style="width: auto;">
			      ✖ {{ tips.passErrTip }}
		      </div>
	      </div>
      </v-ons-col>
	    <v-ons-col class="login-form_col">
		    <label class="login-form_label">昵称：</label>
		    <v-ons-input
			    type="password"
			    placeholder="请输入昵称"
			    class="login-form_input"
			    v-model="params.name"
		    >
		    </v-ons-input>
	    </v-ons-col>
	    <v-ons-col class="login-form_col">
		    <label class="login-form_label">手机号：</label>
		    <v-ons-input
			    type="password"
			    placeholder="请输手机号"
			    class="login-form_input"
			    v-model="params.phone"
		    >
		    </v-ons-input>
	    </v-ons-col>
	    <v-ons-col class="login-form_col">
		    <label class="login-form_label">描述：</label>
		    <v-ons-input
			    type="password"
			    placeholder="请输入描述"
			    class="login-form_input"
			    v-model="params.description"
		    >
		    </v-ons-input>
	    </v-ons-col>
	    <v-ons-col class="login-form_col">
		    <label class="login-form_label">性别：</label>
		    <v-ons-select class="login-form_input" v-model="params.Sex">
			    <option v-for="item in items" :value="item.value">
				    {{ item.text }}
			    </option>
		    </v-ons-select>
	    </v-ons-col>
	    <v-ons-col class="login-form_col">
		    <label class="login-form_label">头像：</label>
		    <v-ons-input
			    type="file"
			    class="login-form_input"
			    v-model="params.Portrait"
		    >
		    </v-ons-input>
	    </v-ons-col>

      <v-ons-col>
        <v-ons-button class="login-form_button" style="margin: 6px 0" @click="canRegister()"
          >注册</v-ons-button>
      </v-ons-col>
    </div>
  </v-ons-page>
</template>

<script>
import Verification from "../../config/veriFication";
export default {
  name: "register",
  data() {
    return {
      params: {
	      account: "",      // 账户
	      name: "",         // 会员昵称
	      description: "",  // 描述
	      phone: "",        // 手机号
	      Portrait: "",     // 头像
	      Sex: 0,           // 性别(0：保密; 1：男; 2：女)
	      password: "",     // 密码
	      site_id: ""       // 所属站点
      },
	    items: [
		    { text: '保密', value: 0 },
		    { text: '男', value: 1 },
		    { text: '女', value: 2 }
	    ],
	    error: {
		    passErr: false,
		    nameErr: false
	    },
	    tips: {
		    nameErrTip: "",
		    passErrTip: ""
	    }
    }
  },
	methods: {
		checkUserName() {
			let NoNull = Verification.canNoNull(this.params.account),
					Username = Verification.canUsername(this.params.account);
			this.error.nameErr = !!(NoNull || Username);
			if (NoNull) return this.tips.nameErrTip = "账号不能为空！！";
			if (Username) return this.tips.nameErrTip = "账号格式错误！！";
		},
		/**
		 * @return {string}
		 */
		IsPass() {
			let NoNull = Verification.canNoNull(this.params.password),
					Password = Verification.canPassword(this.params.password);
			this.error.passErr = !!(NoNull || Password);
			if (NoNull) return this.tips.passErrTip = "账号不能为空！！";
			if (Password) return this.tips.passErrTip = "账号格式错误！！";
		},
		canRegister() {
			console.log(this.error);
			if (this.error.nameErr || this.error.passErr)
				return this.$root.$emit('handleError', "请完善注册信息");

			this.$utils.api("API_POST_USER_REGISTER", { params: this.params }).then(
				(success) => {
					console.log("success", success);
					this.$root.$emit("handleSuccess", success.message);
				}, error => this.$root.$emit('handleError', error)
			)
		}
	}
}
</script>

<style scoped lang="scss">
.login {
  @at-root #{&}-form {
    padding: 16% 10px 10px 10px;
    text-align: center;
    @at-root #{&}_label {
      display: inline-block;
      width: 20%;
      font-size: 14px;
      text-align: right;
    }
    @at-root #{&}_input {
      border: 1px solid #ccc;
      width: 60%;
      padding-left: 6px;
      margin: 8px 0;
      font-size: 20px;
      border-radius: 4px;
      /deep/ input {
        font-size: 14px !important;
      }
	    /deep/ .select-input {
		    font-size: 14px !important;
	    }
    }
    @at-root #{&}_button {
      width: 82%;
      background-color: #00d00b;
    }
	  @at-root #{&}_col {
		  position: relative;
	  }
	  .forme-err {
		  right: 0;
		  top: -1rem;
		  opacity: 0.8;
		  position: absolute;
		  z-index: 100;
		  .FormErrorC {
			  width: auto;
			  background: #ee0101;
			  position: relative;
			  z-index: 999;
			  color: #fff;
			  font-size: 12px;
			  line-height: 1rem;
			  border: 2px solid #ddd;
			  box-shadow: 0 0 6px #000;
			  -moz-box-shadow: 0 0 6px #000;
			  -webkit-box-shadow: 0 0 6px #000;
			  padding: 0.22rem 0.41rem 0.22rem 0.41rem;
			  border-radius: 0.3rem;
		  }
		  &:before {
			  content: "";
			  background: red;
			  width: 10px !important;
			  height: 10px !important;
			  position: absolute;
			  bottom: -5px;
			  right: 48px;
			  -webkit-transform: rotate(45deg);
			  transform: rotate(45deg);
		  }
	  }
  }
}
</style>
