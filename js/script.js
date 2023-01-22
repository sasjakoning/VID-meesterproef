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

/* -------------------------------------------------------------------------- */
/*                          Prev and next navigation                          */
/* -------------------------------------------------------------------------- */

const articles = document.querySelectorAll("main > article");
const articleIds = document.querySelectorAll(`[id^='anchor-']`);

let anchorList = [];
let currentAnchor = getAnchor();

// check where user is on page on load
// credit: https://programming.bogdanbucur.eu/how-to-get-the-url-anchor-with-javascript/
function getAnchor() {
  const currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  
  return (urlParts.length > 1) ? urlParts[1] : null;
}


findIds(articleIds, anchorList)

// find all anchorpoints and push to anchorList
function findIds(query, list) {
  query.forEach((item) => {
    list.push(item.id);
  })
}

// change currentAnchor when in viewport
const observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    // currentAnchor = entries[0].target.id;
  };
}, { threshold: 0.5 });

articles.forEach((article) => {
  observer.observe(article);
});


const navPrevious = document.querySelector(".nav-previous");
const navNext = document.querySelector(".nav-next");

navNext.addEventListener("click", anchorNav);
navPrevious.addEventListener("click", anchorNav);

function anchorNav() {
  let nextPrevAnchor = ""
  
  if(this.classList.contains("nav-next")){
    nextPrevAnchor = (anchorList.indexOf(currentAnchor)) + 1;
  }else {
    nextPrevAnchor = (anchorList.indexOf(currentAnchor)) - 1;
  }
  
  currentAnchor = anchorList[nextPrevAnchor];

  this.href = "#" + currentAnchor;

  const currentElement = document.querySelector("#" + currentAnchor);
  const previousElement = document.querySelector(".text-active");

  if (previousElement) {
    previousElement.classList.remove("text-active");
  }
  
  currentElement.classList.add("text-active");
};


/* -------------------------------------------------------------------------- */
/*                                 animations                                 */
/* -------------------------------------------------------------------------- */

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

const prevNextBtns = document.querySelectorAll("footer > a");

const canvas5Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas5,
  autoplay: true,
  stateMachines: "canvas-5-states",
  artboard: "5",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas5Rive.resizeDrawingSurfaceToCanvas();

    const inputs = canvas5Rive.stateMachineInputs("canvas-5-states");
    const trigger5Dot3Entry = inputs.find((i) => i.name === "5.3");

    console.log(trigger5Dot3Entry)

    prevNextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        
        switch(currentAnchor) {
          case "anchor-timespan":
            trigger5Dot3Entry.value = false;
            break;
          case "anchor-timespan-1":
            trigger5Dot3Entry.value = true;
            break;
        }

        // if(currentAnchor == "anchor-timespan-1"){
        //   trigger5Dot3Entry.fire();
        // }
      })
    })
  },
});

const canvas6dot1 = document.getElementById("_6.1-canvas");

const canvas6Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6dot1,
  autoplay: true,
  stateMachines: "earth-states",
  artboard: "6.1",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas6dot2 = document.getElementById("_6.2-canvas");

const canvas6Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6dot2,
  autoplay: true,
  stateMachines: "dyson-sphere-states",
  artboard: "6.2",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot2Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas6dot3 = document.getElementById("_6.3-canvas");

const canvas6Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6dot3,
  autoplay: true,
  stateMachines: "galaxy-states",
  artboard: "6.3",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot3Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas6dot4 = document.getElementById("_6.4-canvas");

const canvas6Dot4Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6dot4,
  autoplay: true,
  stateMachines: "6.4-states",
  artboard: "6.4",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas6Dot4Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas9dot1 = document.getElementById("_9.1-canvas");

const canvas9Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas9dot1,
  autoplay: true,
  stateMachines: "9.1-states",
  artboard: "9.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas9Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas10dot1 = document.getElementById("_10.1-canvas");

const canvas10Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10dot1,
  autoplay: true,
  stateMachines: "10.1-states",
  artboard: "10.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas10dot2 = document.getElementById("_10.2-canvas");

const canvas10Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10dot2,
  autoplay: true,
  stateMachines: "10.2-states",
  artboard: "10.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot2Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas10dot3 = document.getElementById("_10.3-canvas");

const canvas10Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10dot3,
  autoplay: true,
  stateMachines: "10.3-states",
  artboard: "10.3",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot3Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas11 = document.getElementById("_11-canvas");

const canvas11Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas11,
  autoplay: true,
  stateMachines: "10.1-states",
  artboard: "10.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas11Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas12Dot1 = document.getElementById("_12.1-canvas");

const canvas12Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas12Dot1,
  autoplay: true,
  stateMachines: "12.1-states",
  artboard: "12.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas12Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas12Dot3 = document.getElementById("_12.3-canvas");

const canvas12Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas12Dot3,
  autoplay: true,
  stateMachines: "12.3-states",
  artboard: "12.3",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas12Dot3Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas12Dot7 = document.getElementById("_12.7-canvas");

const canvas12Dot7Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas12Dot7,
  autoplay: true,
  stateMachines: "12.7-states",
  artboard: "12.7",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas12Dot7Rive.resizeDrawingSurfaceToCanvas();
  },
});


const canvas13Dot1 = document.getElementById("_13.1-canvas");

const canvas13Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas13Dot1,
  autoplay: true,
  stateMachines: "10.2-states",
  artboard: "10.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas13Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas13Dot2 = document.getElementById("_13.2-canvas");

const canvas13Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas13Dot2,
  autoplay: true,
  stateMachines: "13.2-states",
  artboard: "13.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas13Dot2Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas14Dot1 = document.getElementById("_14.1-canvas");

const canvas14Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas14Dot1,
  autoplay: true,
  stateMachines: "10.3-states",
  artboard: "10.3",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas14Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas14Dot2 = document.getElementById("_14.2-canvas");

const canvas14Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas14Dot2,
  autoplay: true,
  stateMachines: "14.2-states",
  artboard: "14.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas14Dot2Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas14Dot4 = document.getElementById("_14.4-canvas");

const canvas14Dot4Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas14Dot4,
  autoplay: true,
  stateMachines: "14.4-states",
  artboard: "14.4",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas14Dot4Rive.resizeDrawingSurfaceToCanvas();
  },
});


const canvas15Dot1 = document.getElementById("_15.1-canvas");

const canvas15Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot1,
  autoplay: true,
  stateMachines: "15.1-states",
  artboard: "15.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot1Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot2 = document.getElementById("_15.2-canvas");

const canvas15Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot2,
  autoplay: true,
  stateMachines: "15.2-states",
  artboard: "15.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot2Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot3 = document.getElementById("_15.3-canvas");

const canvas15Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot3,
  autoplay: true,
  stateMachines: "15.3-states",
  artboard: "15.3",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot3Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot4 = document.getElementById("_15.4-canvas");

const canvas15Dot4Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot4,
  autoplay: true,
  stateMachines: "15.4-states",
  artboard: "15.4",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot4Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot5 = document.getElementById("_15.5-canvas");

const canvas15Dot5Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot5,
  autoplay: true,
  stateMachines: "15.5-states",
  artboard: "15.5",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot5Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot6 = document.getElementById("_15.6-canvas");

const canvas15Dot6Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot6,
  autoplay: true,
  stateMachines: "15.6-states",
  artboard: "15.6",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot6Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot7 = document.getElementById("_15.7-canvas");

const canvas15Dot7Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot7,
  autoplay: true,
  stateMachines: "15.7-states",
  artboard: "15.7",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot7Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot8 = document.getElementById("_15.8-canvas");

const canvas15Dot8Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot8,
  autoplay: true,
  stateMachines: "15.8-states",
  artboard: "15.8",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot8Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot9 = document.getElementById("_15.9-canvas");

const canvas15Dot9Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot9,
  autoplay: true,
  stateMachines: "15.9-states",
  artboard: "15.9",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot9Rive.resizeDrawingSurfaceToCanvas();
  },
});

const canvas15Dot10 = document.getElementById("_15.10-canvas");

const canvas15Dot10Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas15Dot10,
  autoplay: true,
  stateMachines: "15.10-states",
  artboard: "15.10",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas15Dot10Rive.resizeDrawingSurfaceToCanvas();
  },
});