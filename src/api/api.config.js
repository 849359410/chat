export default {
	PLUTO_API: {
		API_POST_USER_LOGIN: {  // 登录
			url: "user/login",
			method: "post",
			requestType: 'json' // 0.form 1.json
		},
		API_POST_USER_REGISTER: {   // 注册
			url: "user/register",
			method: "post",
			requestType: 'json'
		},
		API_POST_USER_PASS: {   // 修改密码
			url: "user/changePassword",
			method: "post",
			requestType: 'json'
		}
	}
}
