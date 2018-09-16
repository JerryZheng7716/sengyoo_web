jQuery(function($) {
	new WOW().init();
	
$(".line2").bind("mousemove", ZmMouseMove);
	function ZmMouseMove(e){         //首页背景跟随鼠标
	  var w = $(".line2").width();	
      $(".zm_main01").css({"right":-260+200*e.pageX/w});
	}
	
	
	
var abc= $(window).height();
$(".cenghei").css({ "height":abc+"px"});	
$(".menu23").click(
	   function(){
		 $(".menu23").addClass("animated zoomOut");
		 $(".cha").show();
		 $(".cenghei").addClass("animated fadeIn").show();
		 $(".menulist").addClass("animated flipInY").show();
    });
	  
$("#wmj").click(
	   function(){
		 $(".menulist").addClass("animated fadeInRight").hide();
		 $(".secondmenu").addClass("animated fadeInLeft").show();
    });

$("#wmj1").click(
	   function(){
		 $(".menulist").addClass("animated fadeInRight").hide();
		 $(".secondmenu1").addClass("animated fadeInLeft").show();
    });

$("#wmj2").click(
	   function(){
		 $(".menulist").addClass("animated fadeInRight").hide();
		 $(".secondmenu2").addClass("animated fadeInLeft").show();
    });
	  	  	  	  
	   
$(".cha").click(
	   function(){
	
		$(".cenghei").hide();
		$(".cha").hide();
		 $(".secondmenu").hide();
		  $(".secondmenu1").hide();
		    $(".secondmenu2").hide();
		$(".menu23").removeClass("animated zoomOut");
	   })
	   
	   

});








//字体设置
(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
        dpr = 1, // 首页引用IFRAME，强制为1
        scale = 1 / dpr,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = win.devicePixelRatio;
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 375 && win.devicePixelRatio == 2) {
        docEl.classList.add('iphone6')
    }
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 414 && win.devicePixelRatio == 3) {
        docEl.classList.add('iphone6p')
    }
    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
    docEl.firstElementChild.appendChild(metaEl);
    var recalc = function() {
        var width = docEl.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 640) + 'px';
    };
    recalc();
    // 随着窗口变化而改变
    $(window).resize(function(event) {
		recalc();
	});
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
})(document, window);
