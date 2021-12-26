/* const btns = document.querySelectorAll(".lnb-tit");
const gnbBox = document.querySelectorAll(".gnb-box-wrapper");

btns.forEach((btn, index) => {
  btn[index].addEventListener("click", () => {
    gnbBox[index].classList.remove("hidden");
  });
});

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gnbBox.forEach((obj) => {
      obj.classList.toggle('gnbBox');
    });
    gnbBox[index].classList.remove("hidden");
  });
}); */

///////////////////////////////

// desktop device
// gnb-toggle

// const gnbToggle1 = document.querySelector(".gnb-toggle1");
// const gnbToggle2 = document.querySelector(".gnb-toggle2");
// const gnbToggle3 = document.querySelector(".gnb-toggle3");
// const gnbToggle4 = document.querySelector(".gnb-toggle4");

// const click1 = document.querySelector(".click-menu1");
// const click2 = document.querySelector(".click-menu2");
// const click3 = document.querySelector(".click-menu3");
// const click4 = document.querySelector(".click-menu4");

// const search = document.querySelector(".search-toggle");
// const searchBox = document.querySelector(".gnb-search-wrapper");

// gnbToggle1.addEventListener("click", () => {
//   click1.classList.toggle("hidden");
// });

// gnbToggle2.addEventListener("click", () => {
//   click2.classList.toggle("hidden");
// });
// gnbToggle3.addEventListener("click", () => {
//   click3.classList.toggle("hidden");
// });
// gnbToggle4.addEventListener("click", () => {
//   click4.classList.toggle("hidden");
// });

// search.addEventListener("click", () => {
//   searchBox.classList.toggle("hidden");
// });

const accordian = document.querySelectorAll(".accordian");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    let gnbBox = this.nextElementSibling;
    gnbBox.classList.toggle("hidden");
  });
}
// medium device
// gnb-toggle
const hambutton = document.querySelector("#toggle-btn");
const gnbMenu = document.querySelector(".gnb-menu-wrapper");
const gnbTit = document.querySelectorAll(".lnb-tit");

// hambutton.addEventListener(
//   "click",
//   () => {
//     gnbMenu.classList.toggle("active");
//     console.log("ham");
//   },
//   false
// );

// window.onresize = () => {
//   if (window.innerWidth > 899) gnbMenu.classList.remove("active");
// };

hambutton.addEventListener("click", function () {
  gnbTit.classList.toggle("active");
});
