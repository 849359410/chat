import Api from "../api"
const utils = {
	api(uri, params, config) {
		const api = new Api();
		return new Promise((resolve, reject) => {
			api.requestInstance(uri, params, config).then(
				success => resolve(success),
				error => reject(error)
			);
		})
	}
};
export default {
	install: (Vue) => {
		Vue.prototype.$utils = utils
	}
}
