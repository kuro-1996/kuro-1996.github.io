$(document).ready(function() {
	/*menu item customize*/
	$(".nav-bar__menu")
		.children()
		.click(function() {
			$(".nav-bar__menu")
				.children()
				.removeClass("active");
			$(".nav-bar__btn").removeClass("active");
			$(this).addClass("active");
		});

	$(".nav-bar__btn").click(function() {
		$(this).toggleClass("active");
	});
	/**********************/
	/*scroll to top button*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$(".scroll-top").fadeIn("500", "swing");
		} else {
			$(".scroll-top").fadeOut("500", "swing");
		}
	});

	$(".scroll-top").click(function() {
		scroll(0, 0);
	});
	/**********************/
	/*work-section gallery*/
	$(".btn").click(function() {
		$(".grid__item").hide();
		$(".btn__all").addClass("check");
		if ($(".btn").hasClass("active")) {
			$(".btn").removeClass("active");
		}
	});
	$(".btn__all").click(function() {
		$(".btn__all").addClass("active");
		if ($(".btn__all").hasClass("check")) {
			$(".btn__all").removeClass("check");
			$(".grid__item").show();
		}
	});
	$(".btn__brand").click(function() {
		$(".btn__brand").addClass("active");
		$(".grid__item.brand").show();
	});
	$(".btn__web").click(function() {
		$(".btn__web").addClass("active");
		$(".grid__item.web").show();
	});
	$(".btn__logo").click(function() {
		$(".btn__logo").addClass("active");
		$(".grid__item.logo").show();
	});
	$(".btn__photo").click(function() {
		$(".btn__photo").addClass("active");
		$(".grid__item.photo").show();
	});
	///////////////////////////////////
	/*scroll to section to add animation*/
	a = 0;
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".banner").height() - $("header").height()) 
			$("header").addClass("change");
		if ($(this).scrollTop() <= $(".banner").height() - $("header").height())
			$("header").removeClass("change");
		if (a == 0 && $(this).scrollTop() > $(".funfact").offset().top - 500) {
				/* add animation and counter when scroll to funfact section  */
				$(".item__counter").each(function() {
					var $this = $(this),
						countTo = $this.attr("data-count");
					$({
						countNum: $this.text()
					}).animate(
						{
							countNum: countTo
						},
						{
							duration: 8000,
							easing: "swing",
							step: function() {
								$this.text(Math.floor(this.countNum));
							},
							complete: function() {
								$this.text(this.countNum);
							}
						}
					);
				});
				a = 1;
			}
	});

	////////////////
	/*banner slick*/
	$(".slick-wrap").slick({
		dots: true,
		loop: true,
		prevArrow: null,
		nextArrow: null,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		slidesToShow: 1,
		slidesToScroll: 1
	});
	//////////////////////////
	/*features-section slick*/
	$(".features-content").slick({
		dots: true,
		loop: true,
		infinite: true,
		prevArrow: null,
		nextArrow: null,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	//////////////////////
	/*team-section slick*/
	$(".team-wrap__slick").slick({
		dots: true,
		loop: true,
		infinite: true,
		prevArrow: null,
		nextArrow: null,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});
	////////link page button////////////
	$(".button").click(function() {
		$(".button").removeClass("active");
		$(this).addClass("active");
	});

	$(function() {
		if (window.location.hash) {
			$("html,body").animate({
				scrollTop: $(window.location.hash).offset().top - 100
			});
		}
	});
	// if (window.location.hash && !window.location.toString().includes("sec")) {
	// 	scroll(0, 0);
	// 	setTimeout(function() {
	// 		scroll(0, 0);
	// 	}, 0);
	// }
});
