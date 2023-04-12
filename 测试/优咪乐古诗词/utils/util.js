//去空格
const trim = (value)=>{
	return value.replace(/(^\s*)|(\s*$)/g, "");
} 
//内容替换
const replaceAll = (text, repstr, newstr)=>{
	return text.replace(new RegExp(repstr, "gm"), newstr);
}
//格式化手机号码
const formatNumber = (num)=>{
	return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : num;
}
//金额格式化
const rmoney = (money)=>{
	return parseFloat(money).toFixed(2).toString().split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(
		/\,$/, '').split('').reverse().join('');
}
//日期格式化
const formatDate = (formatStr, fdate)=>{
	if (fdate) {
		if (~fdate.indexOf('.')) {
			fdate = fdate.substring(0, fdate.indexOf('.'));
		}
		fdate = fdate.toString().replace('T', ' ').replace(/\-/g, '/');
		var fTime, fStr = 'ymdhis';
		if (!formatStr)
			formatStr = "y-m-d h:i:s";
		if (fdate)
			fTime = new Date(fdate);
		else
			fTime = new Date();
		var month = fTime.getMonth() + 1;
		var day = fTime.getDate();
		var hours = fTime.getHours();
		var minu = fTime.getMinutes();
		var second = fTime.getSeconds();
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hours = hours < 10 ? ('0' + hours) : hours;
		minu = minu < 10 ? '0' + minu : minu;
		second = second < 10 ? '0' + second : second;
		var formatArr = [
			fTime.getFullYear().toString(),
			month.toString(),
			day.toString(),
			hours.toString(),
			minu.toString(),
			second.toString()
		]
		for (var i = 0; i < formatArr.length; i++) {
			formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
		}
		return formatStr;
	} else {
		return "";
	}
}
const toHex =  (n)=>{
	n = parseInt(n, 10);
	if (isNaN(n)) return "00";
	n = Math.max(0, Math.min(n, 255));
	return "0123456789ABCDEF".charAt((n - n % 16) / 16) +
		"0123456789ABCDEF".charAt(n % 16);
}
const rgbToHex =  (r, g, b)=>{
	return "#" + utils.toHex(r) + utils.toHex(g) + utils.toHex(b)
}

const hexToRgb = (hex)=>{
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}
const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export {
	trim,
	replaceAll,
	formatNumber,
	rmoney,
	formatDate,
	rgbToHex,
	hexToRgb,
	waitTime
}
