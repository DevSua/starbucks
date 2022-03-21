## Starbucks

### demosite : https://suastarbucks.netlify.app/

---

## STACK

HTML, CSS, JS

---

<br>

![image](https://user-images.githubusercontent.com/49021626/159256012-bee95fdf-5766-4165-80b7-041cde1fcc79.png)

```js
//gsap을 이용해 일정시간이 지나야 메뉴 사진이 나타나게 설정
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //몇초뒤에 실행될것인가 .7, 1.4, 2.1
    opacity: 1,
  });
});
```

JS Swiper를 이용해 공지사항(수직), 이벤트(수평) slide이용

![image](https://user-images.githubusercontent.com/49021626/159256044-c923d39f-eed3-44ca-9947-d5988cce03df.png)

```js
//youtube Iframe을 이용한 동영상 삽입

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  //<div id="player"></div> id값을 가짐
  new YT.Player("player", {
    videoId: "OdFr7wd-DWA", //최초재생할 유튜브 영상ID
    playerVars: {
      autoplay: true, //자동재생
      loop: false, //반복재생
      mute: true,
      playlist: "OdFr7wd-DWA",
    },
  });
}
```

~~아이콘이 랜덤하게 움직이는 부분 이해x~~

![image](https://user-images.githubusercontent.com/49021626/159256598-2198654c-0712-4dae-885b-145a785824d2.png)

class에 to-left,to-right 추가해서 transformX로 자연스럽게 나오는 효과추가

![image](https://user-images.githubusercontent.com/49021626/159255910-985b558d-5935-472c-a316-a90276bf2800.png)
