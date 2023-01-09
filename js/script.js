// const btnOverviewOpen = document.querySelector(".overviewOpen");
// const btnOverviewClose = document.querySelector(".overviewClose");

// btnOverviewOpen.addEventListener("click", overviewNav)
// btnOverviewClose.addEventListener("click", overviewNav)

// function overviewNav() {
//   const overviewNav = document.querySelector(".overview > nav");

//   if(this.classList.contains("overviewOpen")) {
//     overviewNav.classList.add("overviewNavOpen")
//   }else {
//     overviewNav.classList.remove("overviewNavOpen")
//   }
// }


const observer = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true){
    console.log("element is fully visible in screen")
    console.log(entries[0].target.classList.contains("_1"))
  }
}, { threshold: 0.5})

const articles = document.querySelectorAll("main > article")


articles.forEach((article) => {
  observer.observe(article)
})

// observer.observe(document.querySelector("article:nth-of-type(2)"))


// animations

const canvas2And3And4 = document.querySelector("#_2-3-4-canvas");

const canvas2And3And4Rive = new rive.Rive({
    src: "./images/the-fermi-paradox.riv",
    canvas: canvas2And3And4,
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "visual",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      canvas2And3And4Rive.resizeDrawingSurfaceToCanvas();

      const inputs = canvas2And3And4Rive.stateMachineInputs("State Machine 1");
    },
});

const canvas5 = document.querySelector("#_5-canvas");

const canvas5Rive = new rive.Rive({
    src: "./images/the-fermi-paradox.riv",
    canvas: canvas5,
    autoplay: true,
    stateMachines: "canvas-5-states",
    artboard: "canvas-5",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      canvas5Rive.resizeDrawingSurfaceToCanvas();

      const inputs = canvas5Rive.stateMachineInputs("canvas-5-states");
    },
});