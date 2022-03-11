var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
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
