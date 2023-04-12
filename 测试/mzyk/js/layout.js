// menu --------------------------------------------
function menu(menu) {
  $(menu).click(function(){
    $(this).siblings().slideDown(100);
  });
};
menu(".menu_ico");

function cood(){
  $(".menu_ico").siblings().slideUp(50);
};

// 滚动播放 ------------------------------
$(function(){
 var _wrap=$('.scroll-tips');//定义滚动区域
 var _interval=2000;//定义滚动间隙时间
 var _moving;//需要清除的动画
 _wrap.hover(function(){
  clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动
},function(){
  _moving=setInterval(function(){
   var _field=_wrap.find('li:first');//此变量不可放置于函数起始处,li:first取值是变化的
   var _h=_field.height();//取得每次滚动高度(多行滚动情况下,此变量不可置于开始处,否则会有间隔时长延时)
   _field.animate({marginTop:-_h+'px'},600,function(){//通过取负margin值,隐藏第一行
    _field.css('marginTop',0).appendTo(_wrap);//隐藏后,将该行的margin值置零,并插入到最后,实现无缝滚动
  })
  },_interval)//滚动间隔时间取决于_interval
 }).trigger('mouseleave');//函数载入时,模拟执行mouseleave,即自动滚动
});

// tab标签切换 --------------------------------------------
function tab(tabTit, on, tabCon) {
  $(tabTit).children().click(function() {
    $(this).addClass(on).siblings().removeClass(on);
    var index = $(tabTit).children().index(this);
    $(tabCon).children().eq(index).show().siblings().hide();
  });
};
tab(".tab_tit", "on", ".tab_con");

// 轮播图 --------------------------------------------
var glume = function(banners_id, focus_id){
  this.$ctn = $('#' + banners_id);
  this.$focus = $('#' + focus_id);
  this.$adLis = null;
  this.$btns = null;
  this.switchSpeed = 5;//自动播放间隔(s)
  this.defOpacity = 1;
  this.crtIndex = 0;
  this.adLength = 0;
  this.timerSwitch = null;
  this.init();
};
glume.prototype = {
  fnNextIndex:function(){
    return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
  },
  //动画切换
  fnSwitch:function(toIndex){
    if(this.crtIndex==toIndex){return;}
    this.$adLis.css('zIndex', 0);
    this.$adLis.filter(':eq('+this.crtIndex+')').css('zIndex', 2);
    this.$adLis.filter(':eq('+toIndex+')').css('zIndex', 1);
    this.$btns.removeClass('on');
    this.$btns.filter(':eq('+toIndex+')').addClass('on');
    var me = this;

    $(this.$adLis[this.crtIndex]).animate({
      opacity: 0
    }, 1000, function() {
      me.crtIndex = toIndex;
      $(this).css({
        opacity: me.defOpacity,
        zIndex: 0
      });
    });
  },
  fnAutoPlay:function(){
    this.fnSwitch(this.fnNextIndex());
  },
  fnPlay:function(){
    var me = this;
    me.timerSwitch = window.setInterval(function() {
      me.fnAutoPlay();
    },me.switchSpeed*1000);
  },
  fnStopPlay:function(){
    window.clearTimeout(this.timerSwitch);
    this.timerSwitch = null;
  },

  init:function(){
    this.$adLis = this.$ctn.children();
    this.$btns = this.$focus.children();
    this.adLength = this.$adLis.length;

    var me = this;
    //点击切换
    this.$focus.on('click', 'a', function(e) {
      e.preventDefault();
      var index = parseInt($(this).attr('data-index'), 10)
      me.fnSwitch(index);
    });
    this.$adLis.filter(':eq('+ this.crtIndex +')').css('zIndex', 2);
    this.fnPlay();

    //hover时暂停动画
    this.$ctn.hover(function() {
      me.fnStopPlay();
    }, function() {
      me.fnPlay();
    });
  }
};
var player1 = new glume('banners', 'focus');



// 获取急速问医生的高度
if ($('.topseep_box').length !== 0) {
	$("body").css("padding-bottom", $('.topseep_box').innerHeight());
}


// 回到顶部 --------------------------------------------
$(document).ready(function(){
  $("#back-to-top").hide();
  $(function () {
    $(window).scroll(function(){
      if ($(window).scrollTop()>100){
        $("#back-to-top").fadeIn(500);
      }
      else {
        $("#back-to-top").fadeOut(500);
      }
    });
    $("#back-to-top").click(function(){
      $('body,html').animate({scrollTop:0},100);
      return false;
    });
  });
});
