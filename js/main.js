const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
/*search안에있는 input을 찾음*/
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
/*search라는 요소를 가진곳 아무곳을 클릭라면 input에focus가 일어남*/

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //배지숨기기
      //gsap.to(요소, 지속시간, 옵션(객체데이터로))
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //최상단 버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0, //원래 위치로 돌아옴
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      }); //배지보이기

      //최상단 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100, //오른족으로 100px이동하면서 숨음
      });
    }
  }, 300)
); //_.throttle(함수,시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    /*화면을 0.7초동안 */
    scrollTo: 0,
    /*화면의 위치를 0px로 옮겨주겠다*/
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //몇초뒤에 실행될것인가 .7, 1.4, 2.1
    opacity: 1,
  });
});

//new Swiper(선택자,옵션) 공지사항
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

// 프로모션
new Swiper(".promotion .swiper-container", {
  direction: "horizontal",
  slidesPerView: 3, //한번에 보여줄 슬라이드개수
  spaceBetween: 10, //사이여백
  centeredSlides: true, //1번 슬라이드가 가운대보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지로 바로갈수있게 동그라ㅓ미선택
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-next",
    nextEl: ".promotion .swiper-prev",
  },
});
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //클릭시 반대값으로 계속전환 반대값을 집어넣음
  if (isHidePromotion) {
    //true일때 숨김처리
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

//애니메이션부분 이해x

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    //선택자, 동작시간,
    y: size, //옵션
    repeat: -1, //무한반복
    yoyo: true, //한번재생된 애니메이션을 다시 되돌림
    ease: Power1.easeInOut, //gsap easing 애니메이션 주기?
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15); /*seletor, delay, 위아래size*/
floatingObject(".floating2", 0.5, 25);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //2022
