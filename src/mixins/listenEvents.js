/* eslint-disable no-prototype-builtins */

export default {
	created() {
		let original = this.$helps.getUrlParam("s");
		if (!original) original = this.$cookiesStorage.getCookie("s");
		if (original) {
			this.$cookiesStorage.setCookie("s", original);
			this.$store.dispatch("setToken", original);
			this.handleLoadUserMessage();
		} else {
			// this.handleClearLoginInformation();
			this.$store.dispatch("setLoginStatus", false);
			this.$cookiesStorage.removeCookie("s");
		}
	},
	mounted() {
		// 监听成功信息
		this.$on("handleSuccess", successMsg => this.handleToast(successMsg));

		// 监听错误信息
		this.$on("handleError", (errorMsg, typeStatus = 0) => {
			const errorType = typeof errorMsg;
			switch (errorType) {
				case "string":
					this.handleToast(errorMsg);
					break;
				case "object":
					if (errorMsg.hasOwnProperty("Code")) {
						this.handleErrorEvent(errorMsg, typeStatus);
					}
					if (errorMsg.hasOwnProperty("status")) {
						console.warn(errorMsg.message);
					}
					break;
				default:
			}
		});

		// 监听弹窗提示
		this.$on("handleAlert", (alertMsg, callback) => {
			const options = {
				title: "温馨提示",
				buttonLabels: "确定"
			};
			if (callback) options.callback = callback;
			this.$ons.notification.alert(alertMsg, options);
		});

		// 处理用户登录
		this.$on("handleUserLogin", loginInfo => {
			this.$store.dispatch("setUserMessage", loginInfo);
			this.$cookiesStorage.setCookie(
				"s",
				loginInfo.Token,
				new Date().getTime() + 60 * 60 * 1000
			);
		});

		// 处理用户退出
		this.$on("handleUserLoginOut", () => this.handleClearLoginInformation());

		// 处理拉取用户信息
		this.$on("getUserMessage", () => this.handleLoadUserMessage());

		// 监听页面状态
		document.addEventListener("visibilitychange", () => {
			this.$store.dispatch("setPageStatus", document.visibilityState);
		});
	},
	methods: {
		async handleLoadUserMessage() {
			console.warn('网络异常');
			// await this.$api.request("API_GET_USER").then(
			// 	success => this.$store.dispatch("setUserMessage", success.Data),
			// 	error => {
			// 		if (
			// 			error.hasOwnProperty("Code") &&
			// 			error.Code === "1109" &&
			// 			this.$route.name === "Index"
			// 		) {
			// 			this.handleClearLoginInformation();
			// 		} else {
			// 			this.$emit("handleError", error);
			// 		}
			// 	}
			// );
		},
		// 清除登录信息
		handleClearLoginInformation() {
			this.$router.push({ name: "Index" });
			this.$store.dispatch("setLoginStatus", false);
			this.$cookiesStorage.removeCookie("s");
		},
		// 处理烤面包提示
		handleToast(message) {
			if (document.visibilityState !== "visible") return;
			if (typeof message === "undefined" || !message) return;
			this.$ons.notification.toast(message, { timeout: 2000 });
		},
		// 处理错误事件
		handleErrorEvent(errorMsg, type) {
			if (type === 1) this.handleToast(errorMsg.Data);
			else this.handleToast(errorMsg.Msg);
			if (
				errorMsg.hasOwnProperty("Code") &&
				errorMsg.Code === "1109" &&
				this.$route.name !== "login"
			) {
				this.handleClearLoginInformation();
			}
		}
	}
};
