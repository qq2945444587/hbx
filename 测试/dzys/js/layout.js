// menu --------------------------------------------
function menu(menu) {
 $(menu).click(function(){
   $(".menu_nav").slideDown(200);
  });
};
menu(".menu_ico");

function cood(){
 $(".menu_nav").slideUp(200);
};

// arr --------------------------------------------
$(function () {
  $("#iChange").bind("click", function () {
    $(".head_nav_two").toggle(200);
    $this = $(this);
    if ($this.hasClass('icon-een')) {
      $this.removeClass('icon-een').addClass('icon-een1');
    }
    else {
      $this.removeClass('icon-een1').addClass('icon-een');
    };
  });
});

// backtop --------------------------------------------
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










