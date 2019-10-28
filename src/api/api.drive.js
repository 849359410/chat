import axios from 'axios'
import * as Qs from 'qs'

export class Driver {

	constructor(uri, options) {
		this.instance = {};
		this.method = options.hasOwnProperty('method') ? options.method : 'get';
		this.requestType = options.hasOwnProperty('requestType') ? options.requestType : 'form';
		this.config = {};
		this._dynamicInstance(uri);
	}

	/**
	 * 生成请求头部
	 */
	_generatingHeader() {
		this.config.headers = {
			'Content-Type': this.requestType === 'json'
				? 'application/json'
				: 'application/x-www-form-urlencoded'
		}
	}

	/**
	 * 生成请求拦截器
	 */
	_generatingTransformRequest() {
		this.config.transformRequest = [
			data => {
				return this.requestType === 'json'
					? JSON.stringify(data)
					: Qs.stringify({...data})
			}
		]
	}

	/**
	 * 响应拦截器
	 */
	_interceptorForResponse() {
		this.instance.interceptors.response.use(
			success => success,
			error => {
				let timeoutMessage = `请求错误，请稍后重试.`;
				if (error.status) timeoutMessage = `${timeoutMessage} 错误码：${error.status}`;
				return Promise.reject(timeoutMessage);
			}
		)
	}

	/**
	 * 动态创建api实例
	 * @param uri
	 */
	_dynamicInstance(uri) {
		this.config.baseURL = uri || '';
		if (this.method === 'post') {
			this.config.withCredentials = true;
			this._generatingHeader();
			this._generatingTransformRequest();
		}
		this.instance = axios.create(this.config);
		this._interceptorForResponse();
	}

}
