<template>
	<v-ons-page>
		<Share-Head ref="child" :fatherMethod="fatherMethod"></Share-Head>
		<v-ons-list>
			<v-ons-list-item>
				旧密码
				<v-ons-input
					type="password"
					style="padding-left: 20px"
					v-model="params.old_password"
					placeholder="请填写旧密码"
				>
				</v-ons-input>
			</v-ons-list-item>
			<v-ons-list-item>
				新密码
				<v-ons-input
					type="password"
					style="padding-left: 20px"
					v-model="params.password"
					placeholder="请填写新密码"
				>
				</v-ons-input>
			</v-ons-list-item>

			<v-ons-list-header>
				密码至少需要6个字符，而且同时包含数字和字母
			</v-ons-list-header>
		</v-ons-list>
	</v-ons-page>
</template>

<script>
	export default {
		name: "modifyPass",
		data() {
			return {
				params: {
					id: "",
					old_password: "",
					password: ""
				},
				disabledBtn: true
			}
		},
		watch: {
			params: {
				handler(n) {
					this.disabledBtn = !(n.old_password && n.password);
					this.$refs["child"].$emit("handleChange", this.disabledBtn);
				},
				deep: true
			}
		},
		methods: {
			fatherMethod() {
				this.$utils.api("API_POST_USER_PASS", { params: this.params }).then(
					(success) => {
						console.log("success", success);
						this.$root.$emit("handleSuccess", success.message);
					}, error => this.$root.$emit('handleError', error)
				)
			}
		}
	}
</script>

<style scoped>

</style>
