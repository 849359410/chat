//获取cookie、
export function getCookie(name) {
	let arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
	if (arr = document.cookie.match(reg)) { return unescape(arr[2]); } else { return null; }
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (name, value, s) {
	let exdate = new Date();
	exdate.setTime(exdate.getTime() + s * 1000);
	document.cookie = name + '=' + escape(value) + ((s == null) ? '' : ';expires=' + exdate.toUTCString());
};

//删除cookie
export function delCookie (name) {
	let exp = new Date();
	exp.setTime(exp.getTime() - 1);
	let cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + `${cval}` + ";expires=" + `${exp.toUTCString()}`;
}
