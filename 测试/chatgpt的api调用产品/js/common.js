// 头部登录用户是否登录
$(function() { 
 	console.log( JSON.parse(localStorage.getItem('coke')))
 	var coke = JSON.parse(localStorage.getItem('coke'))
 	if (coke == null) {
 		 $('.login_btn').show()
 		$('.login_state').hide()
 	} else {
 		  $('.login_btn').hide()
 		  $('.login_state').show()
 		  $(".login_state").attr({
 		  	"style": "display: flex"
 		  })
 	}
	
	// 退出登录
	$('.logout').click(function(){
		localStorage.removeItem("coke");
		location.reload();
	})

	$('.log_reg_box').click(function(){
		$('.all-set').toggle()
	})
 });