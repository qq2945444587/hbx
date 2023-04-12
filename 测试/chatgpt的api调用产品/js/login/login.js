// 视窗口内容高度，不用管
var mainH = $('.header').height() + $('.footer_box').height()
$(".main").attr({
	"style": "height: calc(100vh - " + mainH + "px)"
})


//清除form标签默认事件
var form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', function(event) {
	event.preventDefault();
})

function postCode() {
	const mobiles = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

	if ($('#mobile').val() == "") {
		alert("请输入您的手机号")
		return
	} else if (!mobiles.test($('#mobile').val())) {
		alert("请输入正确的手机号码");
		return
	}
	// 		重新可发送验证码倒计时
	(function() {
		$('.get_yz').attr("disabled", true);
		let time = 60;
		const method = setInterval(function() {
			if (time == 0) {
				$('.get_yz').removeAttr("disabled");
				$('.get_yz').text('发送验证码');
				clearInterval(method);
				return;
			}
			$('.get_yz').text(time-- + '秒后可发送')
			$(".get_yz").attr({
				"style": "color: "
			})
		}, 1000);
	})();
	// $.ajax("/", {
	// 	type: "get",
	// 	success(result) {
	// 	},
	// 	error(result) {
	// 		console.log(result);
	// 	}
	// })
}

function checkreg() {
	const mobiles = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if ($('#mobile').val() == "") {
		alert("请输入您的手机号")
		return
	} else if (!mobiles.test($('#mobile').val())) {
		alert("请输入正确的手机号码");
		return
	}
	if ($('#code').val() == "") {
		alert("请填写验证码")
		return
	}
    console.log($('#mobile').val())
	console.log($('#code').val())
	alert('提交成功')
	localStorage.setItem('coke', JSON.stringify('11222'))
    window.location.href = "index.html";
	// $.ajax({
	// 	type: "post",
	// 	dataType: "json",
	// 	jsonp: "jsoncallback",
	// 	data: {
	// 		mobile: $('#mobile').val()
	// 		code: $('#code').val()
	// 	},
	// 	url: "/",
	// 	success: function(data) {},
	// 	error(result) {
	// 		console.log(result);
	// 	}
	// });
}