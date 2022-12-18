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
  
      // console.log(triggerFloatDown)
      // btnFloatDown.onclick = (e) => {
      //   e.preventDefault();
  
      //   triggerFloatDown.fire();
      // };

      var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true){
          console.log('Element is fully visible in screen');
          const galaxiesZoomOut = inputs.find((i) => i.name === "galaxies-zoom-out");
          const galaxiesZoomIn = inputs.find((i) => i.name === "galaxies-zoom-in");
      
          const text = animContainer.querySelectorAll("p");

          text[0].classList.add("visible-fade");

          setTimeout(() => {
            text[1].classList.add("visible-fade");
            galaxiesZoomOut.fire()
          }, 2000);

          setTimeout(() => {
            text[2].classList.add("visible-fade");
            galaxiesZoomIn.fire()
          }, 4000);
        }
      }, { threshold: [1] });
      
      observer.observe(document.querySelector(".animContainer"));
    },
});


// const observer = new IntersectionObserver((entries) => {
//   if(entries[0].isIntersecting === true)
//     console.log('Element is fully visible in screen');
// }, { threshold: [1] });

