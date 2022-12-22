const galaxyCanvas = document.querySelector("#galaxyCanvas");
const btnFloatDown = document.querySelector(".floatDown");
const animContainer = document.querySelector(".animContainer");

const fermiParadoxRive = new rive.Rive({
    src: "./images/the-fermi-paradox.riv",
    canvas: galaxyCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "visual",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      fermiParadoxRive.resizeDrawingSurfaceToCanvas();
  
      const inputs = fermiParadoxRive.stateMachineInputs("State Machine 1");
  
    },
});


const btnOverviewOpen = document.querySelector(".overviewOpen");
const btnOverviewClose = document.querySelector(".overviewClose");

console.log(btnOverviewOpen)

btnOverviewOpen.addEventListener("click", overviewNav)
btnOverviewClose.addEventListener("click", overviewNav)

function overviewNav() {
  console.log("aaa")
  const overviewNav = document.querySelector(".overview > nav");

  if(this.classList.contains("overviewOpen")) {
    overviewNav.classList.add("overviewNavOpen")
  }else {
    overviewNav.classList.remove("overviewNavOpen")
  }
}