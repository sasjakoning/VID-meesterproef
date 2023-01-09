const btnOverviewOpen = document.querySelector(".overviewOpen");
const btnOverviewClose = document.querySelector(".overviewClose");

btnOverviewOpen.addEventListener("click", overviewNav)
btnOverviewClose.addEventListener("click", overviewNav)

function overviewNav() {
  const overviewNav = document.querySelector(".overview > nav");

  if(this.classList.contains("overviewOpen")) {
    overviewNav.classList.add("overviewNavOpen")
  }else {
    overviewNav.classList.remove("overviewNavOpen")
  }
}


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

      console.log(canvas2And3And4Rive)
  
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

      console.log(canvas5Rive)
  
      const inputs = canvas5Rive.stateMachineInputs("canvas-5-states");
    },
});