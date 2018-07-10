const settings = {
  cssEase: 'linear',
  dots: true,
  lazyLoad: true,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 5000,
  infinite: true,
  responsive: [
    {
      breakpoint: 2561,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    }
  ]
};

export { settings };
