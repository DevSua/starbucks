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

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //2022
