/**
 * 各种正则验证
 *
 * */

const Verification = {
	// 用户名校验
	canUsername(account) {
		return !/^[a-z\d\-_]{4,11}$/g.test(account);
	},
	// 密码校验
	canPassword(password) {
		return !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(password);
	},
	// 电话校验
	canPhone(phone) {
		return !/^[1][3456789]\d{9}$/.test(phone);
	},
	// 不能为空
	canNoNull(classNull) {
		return !classNull;
	}
};

export default Verification;
