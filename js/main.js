$('.slider-presented-slider').slick({
	dots: true,
	arrows: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	responsive: [
	  {
		 breakpoint: 1440,
		 settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
		 }
	  },
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3
		}
	 },
	  {
		 breakpoint: 900,
		 settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		 }
	  },
	  {
		 breakpoint: 620,
		 settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
		 }
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
 });
 $('.reviews-slider').slick({
	dots: true,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	
 });
