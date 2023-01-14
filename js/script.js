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
  artboard: "canvas-5",
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