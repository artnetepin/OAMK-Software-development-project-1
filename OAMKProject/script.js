$(document).ready(function(){

	$("nav ul li a").each(function(){
			var screen=$("body").scrollTop()+$(window).height()/2;
			var div=$($(this).attr("href"));
			var divoffs=div.offset().top;
			if((screen>=divoffs)&&(screen<divoffs+div.innerHeight())){
				$(this).next().addClass("cur");
			}
			else{
				$(this).next().removeClass("cur");
			}
		});

	$(document).scroll(function(){
		$("nav ul li a").each(function(){
			var screen=$("body").scrollTop()+$(window).height()/2;
			var div=$($(this).attr("href"));
			var divoffs=div.offset().top;
			if((screen>=divoffs)&&(screen<divoffs+div.innerHeight())){
				$(this).next().addClass("cur");
			}
			else{
				$(this).next().removeClass("cur");
			}
		});
	});

	$(".menu-toggle").click(function(){
		$("nav").toggleClass("open");
		$("body").toggleClass("disableMain");
		$(this).fadeOut(300,function(){
			if($(this).attr("src")=="images/menu.png"){
				$(this).attr("src","images/close.png");
				$(this).fadeIn();
			}
			else{
				$(this).attr("src","images/menu.png");
				$(this).fadeIn();
			}
		});
	});

	$("#home a").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$("html,body").animate({
				scrollTop: $($(this).attr("href")).offset().top
			},1000);
	});

	$("nav ul li a").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$("nav").toggleClass("open");
		$("body").toggleClass("disableMain");
		$(".menu-toggle").fadeOut(300,function(){
		if($(".menu-toggle").attr("src")=="images/menu.png"){
				$(".menu-toggle").attr("src","images/close.png");
				$(".menu-toggle").fadeIn();
			}
			else{
				$(".menu-toggle").attr("src","images/menu.png");
				$(".menu-toggle").fadeIn();
			}
		});
		if($("header").css("display")=="none"){
			$("html,body").animate({
				scrollTop: $($(this).attr("href")).offset().top
			},1000);
		}
		else{
			$("html,body").animate({
				scrollTop: $($(this).attr("href")).offset().top-$("header").height()
			},1000);
		}
	});

	var swiper = new Swiper('.s1', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        breakpoints :{
        	1366:{
        		slidesPerView:4
        	},
        	1200 :{
        		slidesPerView: 3
        	},
        	768 :{
        		slidesPerView: 2
        	},
        	480:{
        		slidesPerView:1
        	}
        }
    });

  var swiper2 = new Swiper('.s2', {
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        breakpoints :{
        	1366:{
        		slidesPerView:5
        	},
        	1200 :{
        		slidesPerView: 4
        	},
        	768 :{
        		slidesPerView: 3
        	},
        	600:{
        		slidesPerView:2
        	}
        }
    });


 	$(".serv>h1").click(function(){
 		$(this).next().slideToggle();
 		$(this).children("i").toggleClass("rotation");
 	});

 	$(".services ul li a").click(function(e){
 		e.preventDefault();
 		$(".services ul li a").removeClass("curser");
 		$(this).addClass("curser");
 		$(".services .cont").removeClass("curcont");
 		$($(this).attr("href")).addClass("curcont");
 	});

 	$(".vac ul li a").click(function(e){
 		e.preventDefault();
 		$(".desc").css({
 			display:"block"
 		});

 		$(".desc .desc-item").removeClass("cur-desc");
 		$($(this).attr("href")).addClass("cur-desc");
 	});

 	$(".desc .desc-item span").click(function(){
 		$(".cur-desc").removeClass("cur-desc");
 		$(".desc").css({
 			display:"none"
 		});
 	});

 	$(".s2 .swiper-slide img").click(function(){
 		$(".backer").css({
 			display:"block"
 		});
 		$(".popup img").attr("src",$(this).attr("src"));
 		$("body").toggleClass("disable");
 	});

 	$(".backer").click(function(){
 		$(this).css({
 			display:"none"
 		});
 		$("body").toggleClass("disable");
 		$(".popup").removeClass("showedpopup");
 		$(".popup img").removeClass("showed");
 	});

 	$(".popup img").click(function(e){
 		e.stopPropagation();
 		$(".popup").toggleClass("showedpopup");
 		$(this).toggleClass("showed");
 	});

});
