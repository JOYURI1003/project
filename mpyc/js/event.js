$(".myslider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  fade: true,
  /*fade: false,*/
  cssEase: "linear",
  dots: true,
});
$(".myslider1").slick({
  centerMode: true,
  centerPadding: "30px",
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 700,
  /*
            fade: false,
            cssEase: 'linear',
            dots: false,*/
});

const poster = document.querySelector(".poster");
const cursor = document.querySelector(".custom-cursor");
const figures = document.querySelectorAll(".poster .figure");

// 마우스 이동 시 커서 따라다님
poster.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// 각 figure 안 a에 hover 이벤트 추가
figures.forEach((fig) => {
  const link = fig.querySelector("a");

  link.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

const scrollTrack = document.getElementById("scrollTrack");

// 원활한 무한 루프를 위해 요소 복제
scrollTrack.innerHTML += scrollTrack.innerHTML;

let x = 0;

function scrollImages() {
  x -= 1; // 속도 조절 (작을수록 느림)
  scrollTrack.style.transform = `translateX(${x}px)`;

  // 전체 길이 절반만큼 이동하면 초기화
  if (Math.abs(x) >= scrollTrack.scrollWidth / 2) {
    x = 0;
  }

  requestAnimationFrame(scrollImages);
}

scrollImages();

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelector(".menu-trigger").addEventListener("click", function () {
  this.classList.toggle("active");
});
