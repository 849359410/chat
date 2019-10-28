import {Driver} from './api.drive'
import Deploy from '../config/deploy.config'
import ApiConfig from './api.config'
import {cloneDeep} from "lodash/lang"
import * as Qs from 'qs'

class Api {

	constructor() {
		this.token = '';
		this.url = '';
		this.params = {};
		this.urlParams = {};
	}

	/**
	 * 加载api配置
	 * @param uri
	 */
	loadingApiConfig(uri) {
		let config;
		for (let i in ApiConfig) {
			let key = Object.keys(ApiConfig[i]).filter(i => i === uri).shift();
			if (typeof key === 'string') {
				config = {uri: i, content: ApiConfig[i][key]}
			}
		}
		return config;
	}

	/**
	 * 生成请求地址
	 */
	generatingUrl() {
		for (let i in this.params) {
			if (i !== 'params' && this.params.hasOwnProperty(i)) {
				this.urlParams[i] = this.params[i];
				delete this.params[i];
			}
		}
		if (Object.keys(this.urlParams).length > 0) {
			this.url += `?${Qs.stringify(this.urlParams)}`;
		}
	}

	/**
	 * 请求实例
	 * @param uri
	 * @param params
	 * @param config
	 */
	requestInstance(uri, params, config) {
		let
			apiConfig = this.loadingApiConfig(uri),
			api = new Driver(Deploy[apiConfig.uri], apiConfig.content);
		// this.token = store.getters.token || '';
		this.params = cloneDeep(params) || {};
		this.url = apiConfig.content.url;
		this.generatingUrl();
		return new Promise((resolve, reject) => {
			api.instance[api.method](
				this.url,
				this.params.hasOwnProperty('params') ? this.params['params'] : {}
			).then(
				success => {
					if (success.status !== 200) return reject(success.data);
					return resolve(success.data);
				},
				error => reject(typeof error['Code'] === 'undefined' ? '网络异常! 请稍后重试' : error)
			);
		})
	}

	/**
	 * 创建一个请求实例
	 */
	request = this.requestInstance;
}
export default Api;
