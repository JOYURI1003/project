$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});

$(document).ready(function () {
  $(".wine_but").click(function () {
    //클릭한 but의 index저장
    let index = $(this).index();
    //1) 모두 클래스제거(tab)이후
    $(".content").removeClass("tab");
    $(".wine_but").removeClass("tab");
    //2) 선택항목 클래스(tab)추가
    $(".content").eq(index).addClass("tab");
    $(".wine_but").eq(index).addClass("tab");
  });
});

$(document).ready(function () {
  $(".slideMain").slick({
    slidesToShow: 1, //한번에 보여줄 슬라이드 갯수
    slidesToScroll: 1, //한번에 넘겨지는 슬라이드 갯수
    arrows: true, //넘기기 버튼 화살표 여부
    dots: false, //네비게이션 버튼 dot유형
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    infinite: true, //무한반복 옵션
    cssEase: "linear",
  });
});

var swiper = new Swiper(".thumb_mask", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".progressbar",
    type: "progressbar",
  },
});
var swiper2 = new Swiper(".top_mask", {
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
  effect: "fade",
  navigation: {
    nextEl: ".arrow_btn.n",
    prevEl: ".arrow_btn.p",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".thumb_masks", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".progressbar",
    type: "progressbar",
  },
});
var swiper2 = new Swiper(".top_masks", {
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
  effect: "fade",
  navigation: {
    nextEl: ".arrow_btn.n",
    prevEl: ".arrow_btn.p",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(".promotion-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
