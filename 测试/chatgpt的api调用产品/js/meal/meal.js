var id
$('.buy button').click(function(item, index) {
	id = $(this).val()
	$('.pay_type_box').show()
	console.log(id)
})

$('.ze_box').click(function(){
	$(".pay_type_box").hide()
	$('.pay_scuss').hide()
})
$('.button_cancel').click(function(){
	$(".pay_type_box").hide()
})
// 键盘esc推出遮罩层
$(document).keyup(function(event){
	 switch(event.keyCode) {
	 case 27:
	   	$(".pay_type_box").hide()
	 }
});
// 立即支付
$('.button_ok').click(function(){
	console.log($('input:radio:checked').val()) //支付方式input的value
	if ($('input:radio:checked').val() == 'alipay') {
		// 支付宝支付
		$.ajax({
		    type:"GET",
		    url:"支付宝",
		    dataType: "json",
		    success: function(data){
				var pay_ok = document.getElementsByClassName("pay_ok")[0];
				pay_ok.innerHTML = data
				document.forms[0].submit()
				$(".pay_type_box").hide()
				$('.pay_scuss').show()
		    },
			error:function(){
				
			}
		});
	} else {
		// 其他方式支付
	}
})

