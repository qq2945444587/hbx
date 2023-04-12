 var list
 var showList
 function getJson(res){
   list = res.likes
   list.map((item,index)=>{
   	$(".desc_box").append(`<li class="desc_li" onclick="myShowlist('${item.id}')">
   		 <i class="tlkc ${item.icon}"></i>
   		 <div class="desc_content">
   			<h3>${item.name}</h3>
   			<p>${item.desc}</p>
   		 </div>
   	</li>`)
       
   })
 }
 $(function(){
    //     $.ajax({
    //         type:"GET",
    //         url:'test.json',
    //         dataType: "json",
    //         success: function(data){
				// list = data
				// list.map((item,index)=>{
				// 	$(".desc_box").append(`<li class="desc_li" onclick="myShowlist('${item.id}')">
				// 		 <i class="tlkc ${item.icon}"></i>
				// 		 <div class="desc_content">
				// 			<h3>${item.name}</h3>
				// 			<p>${item.desc}</p>
				// 		 </div>
				// 	</li>`)
				    
				// })
    //         }
    //     });
});
function myShowlist(e) {
	showList = list.filter(item => item.id == e)
	$(".detail_view_box").addClass("mask_active")
	console.log(showList)
	$(".mask_content").html('')
	showList.map((item,index)=>{
		$(".mask_content").append(
		`<div class="top_title">
					 <i class="tlkc ${item.icon}"></i>
					 <div class="desc_content">
						<h3>${item.name}</h3>
						<p>${item.desc}</p>
					 </div>
				</div>
				
				<div class="mask_bottom">
					<ul class="mask_bottom_ul">
						<li class="mask_bottom_li">
							<h3>引导语句</h3>
							<section class="sections">
${item.model.default_prompt}
							</section>
							<h3>响应样本</h3>
							<section class="sections">
${item.model.default_reply}
							</section>
							<h3>接口请求</h3>
							<section class="mask_bottom_section">
								<ul class="tabs">
									<li class="tabsli active">json</li>
									<li class="tabsli">python</li>
									<li class="tabsli">shell</li>
									<div class="btncopy"><i class="tlkc icon-fuzhi"></i>复制</div>
								</ul>
								<ul class="boxs">
									<li class="tabs-box boxOne">${item.code.json}</li>
									<li class="tabs-box">${item.code.python}</li>
									<li class="tabs-box">${item.code.shell}</li>
								</ul>
							</section>
						</li>
						<li class="mask_right_li">
							<h3>设置</h3>
							<ul>
								<li><div>generate_length</div><div>100</div></li>
								<li><div>generate_length</div><div>100</div></li>
							</ul>
						</li>
					</ul>
				</div>`
		)
	})
}

// 点击透明遮罩底层关闭遮罩
$('.mask_box').click(function(){
	$(".detail_view_box").removeClass("mask_active")
})
// 键盘esc推出遮罩层
$(document).keyup(function(event){
	 switch(event.keyCode) {
	 case 27:
	   	$(".detail_view_box").removeClass("mask_active")
	 }
});

// 接口请求示例tab切换
$(".mask_content").on("click",'.tabsli', function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parent().next().children().eq($(this).index()).addClass('boxOne').siblings().removeClass('boxOne');
})

// 复制
let clipboard = new ClipboardJS('.btncopy', {
	text: function () {
		console.log(document.getElementsByClassName('boxOne')[0].innerHTML)
		//此处为处理函数并返回text
		return document.getElementsByClassName('boxOne')[0].innerHTML;
	}
});
clipboard.on('success', function(e) {
	alert('复制成功')
})