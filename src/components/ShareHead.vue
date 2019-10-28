<template>
	<v-ons-toolbar>
		<div class="left" @click="$router.back(-1)">
			<v-ons-toolbar-button
				icon="chevron-left"
				style="color: #2a2a2a"
			></v-ons-toolbar-button>
		</div>

		<div class="center" style="font-size: 14px;font-weight: bold">
			{{ $route.meta.pageName }}
		</div>

		<div class="right">
			<v-ons-button
				style="padding: 0 8px;margin-right: 6px;font-size: 14px"
				v-if="$route.meta.pageRight"
				:disabled="disabledBtn"
				@click="fatherMethod()"
			>
				完成
			</v-ons-button>
		</div>
	</v-ons-toolbar>
</template>

<script>
	export default {
		name: "ShareHead",
		props: {
			fatherMethod: {
				type: Function,
				default: null
			},
		},
			data() {
			return {
				disabledBtn: true
			}
		},
		mounted() {
			this.$on("handleChange", (n) => {
				this.disabledBtn = n;
			})
		}
	}
</script>

<style scoped lang="scss">

</style>
