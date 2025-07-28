// 버튼 표시 제어
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const button = document.getElementById("topBtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// 페이지 맨 위로 스크롤
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const mypagePanel = document.getElementById("mypagePanel");
  const closeBtn = document.getElementById("closeBtn");

  // "MY페이지" 버튼 클릭 시 열고 닫기
  if (toggleBtn && mypagePanel) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const isActive = mypagePanel.classList.toggle("active");

      // 색상 토글
      toggleBtn.style.color = isActive ? "#2ebc9d" : "";
    });
  }

  // "×" 버튼 클릭 시 패널 닫기 및 색상 초기화
  if (closeBtn && mypagePanel) {
    closeBtn.addEventListener("click", function () {
      mypagePanel.classList.remove("active");
      toggleBtn.style.color = ""; // 초기값으로 복원
    });
  }
});

// 📅 시간표 데이터 전체
const data = {
  mwf: [
    // 06:00 ~ 07:00
    [
      "초급 김용일",
      "/",
      "중급 오현돌",
      "상급 박지호",
      "연수 박성철",
      "연수 박성철",
      "자유수영",
      "자유수영",
    ],
    // 07:00 ~ 08:00
    [
      "초급 박지윤",
      "/",
      "초,중급 오현돌",
      "상급 박성철",
      "연수 김용일",
      "연수 김용일",
      "자유수영",
      "자유수영",
    ],
    // 08:00 ~ 09:00
    [
      "초급 김용일",
      "/",
      "중급 박지호",
      "상급 오현돌",
      "연수 박성철",
      "연수 박성철",
      "자유수영",
      "자유수영",
    ],
    // 09:00 ~ 10:00
    [
      "초급 김정화",
      "/",
      "중급 김용일",
      "상급 박지호",
      "연수 박성철",
      "연수 박성철",
      "자유수영",
      "자유수영",
    ],
    // 19:00 ~ 20:00
    [
      "초급 김용일",
      "/",
      "중급 박지호",
      "상급 박성철",
      "연수 김정화",
      "연수 김정화",
      "자유수영",
      "자유수영",
    ],
    // 20:00 ~ 21:00
    [
      "초급 김정화",
      "/",
      "중급 박성철",
      "상급 김용일",
      "연수 박지호",
      "연수 박지호",
      "자유수영",
      "자유수영",
    ],
    // 21:00 ~ 22:00
    [
      "초급 박지호",
      "/",
      "중급 박성철",
      "상급 오현돌",
      "연수 김정화",
      "연수 김정화",
      "자유수영",
      "자유수영",
    ],
  ],
  tt: [
    // 06:00 ~ 07:00
    [
      "기초 오현준",
      "초급 김용임",
      "/",
      "상급 박성철",
      "연수 박지운",
      "연수 박지운",
      "자유수영",
      "자유수영",
    ],
    // 07:00 ~ 08:00
    [
      "기초 박성철",
      "/",
      "/",
      "/",
      "중급 박지운",
      "연수 김용임",
      "자유수영",
      "자유수영",
    ],
    // 08:00 ~ 09:00
    ["기초 박지운", "/", "/", "/", "중급 김용임", "/", "/", "/"],
    // 09:00 ~ 10:00
    ["자유수영", "자유수영", "/", "초급 박지윤", "중급 김정화", "/", "/", "/"],
    // 19:00 ~ 20:00
    ["자유수영", "자유수영", "/", "초급 박지호", "중급 박성철", "/", "/", "/"],
    // 20:00 ~ 21:00
    ["자유수영", "자유수영", "/", "초급 김정화", "중급 김용일", "/", "/", "/"],
    // 21:00 ~ 22:00
    ["자유수영", "자유수영", "/", "초급 박성철", "중급 박지호", "/", "/", "/"],
  ],
};

// ⏰ 시간표 시간 라벨
const timeLabels = [
  "06:00 ~ 07:00",
  "07:00 ~ 08:00",
  "08:00 ~ 09:00",
  "09:00 ~ 10:00",
  "19:00 ~ 20:00",
  "20:00 ~ 21:00",
  "21:00 ~ 22:00",
];

// 라인 셀렉트 렌더링
function renderLineSelects(containerId, lines) {
  const container = $(containerId);
  container.empty();
  lines.forEach((val, idx) => {
    const select = `
        <label>${idx + 1}라인</label>
        <select><option>${val}</option></select>
      `;
    container.append(select);
  });
}

$(document).ready(function () {
  // 탭 전환
  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    const tab = $(this).data("tab");
    $(".tab-content").removeClass("active");
    $("#" + tab).addClass("active");
  });

  // 월수금 초기 셋팅
  renderLineSelects("#mwf-lines", data.mwf[0]);

  $("#mwf-time").change(function () {
    const index = parseInt($(this).val());
    renderLineSelects("#mwf-lines", data.mwf[index]);
  });

  // 화목 초기 셋팅
  renderLineSelects("#tt-lines", data.tt[0]);

  $("#tt-time").change(function () {
    const index = parseInt($(this).val());
    renderLineSelects("#tt-lines", data.tt[index]);
  });
});
