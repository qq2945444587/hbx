$('.table').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parent().next().children().eq($(this).index()).addClass('boxOne').siblings().removeClass('boxOne');
})