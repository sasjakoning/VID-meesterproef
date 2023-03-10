
/* -------------------------------------------------------------------------- */
/*                           side panel overview nav                          */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                          Prev and next navigation                          */
/* -------------------------------------------------------------------------- */

const articles = document.querySelectorAll("main > article");
const articleIds = document.querySelectorAll(`[id^='anchor-']`);

let anchorList = [];
let currentAnchor = getAnchor();

// on load, scroll to current anchor
window.addEventListener("load", () => {
  const scrollToElement = document.querySelector("#" + currentAnchor);

  if(scrollToElement){
    scrollToElement.scrollIntoView({ behavior: "smooth" });
  }
})


// check where user is on page on load
// credit: https://programming.bogdanbucur.eu/how-to-get-the-url-anchor-with-javascript/
function getAnchor() {
  const currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  
  return (urlParts.length > 1) ? urlParts[1] : "anchor-start";
}


findIds(articleIds, anchorList)

// find all anchorpoints and push to anchorList
function findIds(query, list) {
  query.forEach((item) => {
    list.push(item.id);
  })

  // remove first anchorpoint from list
  const index = anchorList.indexOf("anchor-start");

  anchorList.splice(index, 1);
}

const navPrevious = document.querySelector(".nav-previous");
const navNext = document.querySelector(".nav-next");

const navHome = document.querySelector(".nav-home");
const navName = document.querySelector(".overviewOpen > p");

navNext.addEventListener("click", anchorNav);
navPrevious.addEventListener("click", anchorNav);

navHome.addEventListener("click", () => {
  currentAnchor = "";
});

// get anchorlinks in navigation
const navLinks = document.querySelectorAll(".overview nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    
    urlParts = link.href.split('#');
    
    currentAnchor = urlParts[1];
  })
})

// navigate to next or previous anchorpoint
function anchorNav(e) {
  if(currentAnchor){  
    let nextPrevAnchor = ""
    
    // check if next or previous button is clicked
    if(this.classList.contains("nav-next")){
      nextPrevAnchor = (anchorList.indexOf(currentAnchor)) + 1;
    }else {
      nextPrevAnchor = (anchorList.indexOf(currentAnchor)) - 1;
    }
    

    currentAnchor = anchorList[nextPrevAnchor];
  
    this.href = "#" + currentAnchor;

    const anchorName = currentAnchor.replace("anchor-", "");

    navName.replaceChildren(anchorName)
    
    animateElement();
  }

};


// add animations to texts when their active

function animateElement() {
  const currentElement = document.querySelector("#" + currentAnchor);

  let anim = "anim";

  if(currentElement.id.includes(anim)) {

    const currentElementParent = currentElement.closest("article");
  
    if(currentElementParent.id == "anchor-thenumbers") {
      const previousElement = document.querySelector(".anim-scale-up");
  
      const topPos = currentElement.offsetTop;
      currentElementParent.scrollTop = (topPos) - 300;
    
      if(previousElement) {
        previousElement.classList.add("anim-scale-down");
        previousElement.classList.remove("anim-scale-up");
      }
    
      if(currentElement.classList.contains("anim-invis")) {
        currentElement.classList.remove("anim-invis");
      }
    
      currentElement.classList.add("anim-scale-up");
    }else if(currentElement.classList.contains("anim-invis")) {
      currentElement.classList.add("anim-visible");
      currentElement.classList.remove("anim-invis");
    }
  
    if(currentElementParent.id == "anchor-thekardashevscale" || currentElementParent.id == "anchor-wererare-2" || currentElementParent.id == "anchor-werefucked-2" || currentElementParent.id == "anchor-mediocrityprinciple-2"){
      const topPos = currentElement.offsetTop;
      currentElementParent.scrollTop = (topPos) - 200;
    }

    
  }

}


/* -------------------------------------------------------------------------- */
/*                                 animations                                 */
/* -------------------------------------------------------------------------- */

const canvas3 = document.querySelector("#_3-canvas");

const canvas3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas3,
  autoplay: true,
  stateMachines: "3-states",
  artboard: "3",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas3Rive.resizeDrawingSurfaceToCanvas();

    const inputs = canvas3Rive.stateMachineInputs("3-states");
    const trigger3dot2 = inputs.find((i) => i.name === "3.2");
    const trigger3dot3 = inputs.find((i) => i.name === "3.3");
    const trigger3dot4 = inputs.find((i) => i.name === "3.4");
    const trigger3dot5 = inputs.find((i) => i.name === "3.5");
    const trigger3dot6 = inputs.find((i) => i.name === "3.6");
    const trigger3dot7 = inputs.find((i) => i.name === "3.7");
    const trigger3dot8 = inputs.find((i) => i.name === "3.8");
    const trigger3dot9 = inputs.find((i) => i.name === "3.9");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-3-2":
            trigger3dot2.value = true;
            break;
          case "anchor-anim-3-3":
            trigger3dot3.value = true;
            break;
          case "anchor-anim-3-4":
            trigger3dot4.value = true;
            break;
          case "anchor-anim-3-5":
            trigger3dot5.value = true;
            setTimeout(() => {
              trigger3dot6.value = true;
            }, 1000);
            break;
          case "anchor-anim-3-7":
            trigger3dot7.value = true;
            break;
          case "anchor-anim-3-8":
            trigger3dot8.value = true;
            break;
          case "anchor-anim-3-9":
            trigger3dot9.value = true;
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas3Rive.play();
      }else {
        canvas3Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas3);
  },
});

const canvas5 = document.querySelector("#_5-canvas");

const prevNextBtns = document.querySelectorAll("footer > a");

const canvas5Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas5,
  autoplay: true,
  stateMachines: "5-states",
  artboard: "5",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas5Rive.resizeDrawingSurfaceToCanvas();

    const inputs = canvas5Rive.stateMachineInputs("5-states");
    const trigger5Dot3 = inputs.find((i) => i.name === "5.3");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-5-3":
            trigger5Dot3.value = true;
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas5Rive.play();
      }else {
        canvas5Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas5);
  },
});

const canvas6Dot1 = document.getElementById("_6.1-canvas");

const canvas6Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6Dot1,
  autoplay: true,
  stateMachines: "earth-states",
  artboard: "6.1",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot1Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas6Dot1Rive.play();
      }else {
        canvas6Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas6Dot1);
  },
});

const canvas6Dot2 = document.getElementById("_6.2-canvas");

const canvas6Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6Dot2,
  autoplay: true,
  stateMachines: "dyson-sphere-states",
  artboard: "6.2",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot2Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas6Dot2Rive.play();
      }else {
        canvas6Dot2Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas6Dot2);
  },
});

const canvas6Dot3 = document.getElementById("_6.3-canvas");

const canvas6Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6Dot3,
  autoplay: true,
  stateMachines: "galaxy-states",
  artboard: "6.3",
  fit: rive.Fit.cover,
  onLoad: (_) => {
    canvas6Dot3Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas6Dot3Rive.play();
      }else {
        canvas6Dot3Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas6Dot3);
  },
});

const canvas6Dot4 = document.getElementById("_6.4-canvas");

const canvas6Dot4Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas6Dot4,
  autoplay: true,
  stateMachines: "6.4-states",
  artboard: "6.4",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas6Dot4Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas6Dot4Rive.play();
      }else {
        canvas6Dot4Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas6Dot4);
  },
});

const canvas9Dot1 = document.getElementById("_9.1-canvas");

const canvas9Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas9Dot1,
  autoplay: true,
  stateMachines: "9.1-states",
  artboard: "9.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas9Dot1Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas9Dot1Rive.play();
      }else {
        canvas9Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas9Dot1);
  },
});

const canvas10Dot1 = document.getElementById("_10.1-canvas");

const canvas10Dot1Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10Dot1,
  autoplay: true,
  stateMachines: "10.1-states",
  artboard: "10.1",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot1Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas10Dot1Rive.play();
      }else {
        canvas10Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas10Dot1);
  },
});

const canvas10Dot2 = document.getElementById("_10.2-canvas");

const canvas10Dot2Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10Dot2,
  autoplay: true,
  stateMachines: "10.2-states",
  artboard: "10.2",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot2Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas10Dot2Rive.play();
      }else {
        canvas10Dot2Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas10Dot2);
  },
});

const canvas10Dot3 = document.getElementById("_10.3-canvas");

const canvas10Dot3Rive = new rive.Rive({
  src: "./images/the-fermi-paradox.riv",
  canvas: canvas10Dot3,
  autoplay: true,
  stateMachines: "10.3-states",
  artboard: "10.3",
  fit: rive.Fit.fitHeight,
  alignment: rive.Alignment.TopCenter,
  onLoad: (_) => {
    canvas10Dot3Rive.resizeDrawingSurfaceToCanvas();

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas10Dot3Rive.play();
      }else {
        canvas10Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas10Dot1);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas11Rive.play();
      }else {
        canvas11Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas11);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas12Dot1Rive.play();
      }else {
        canvas12Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas12Dot1);
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

    const inputs = canvas12Dot3Rive.stateMachineInputs("12.3-states");
    const trigger12Dot4 = inputs.find((i) => i.name === "12.4");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-12-4":
            trigger12Dot4.value = true;
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas12Dot3Rive.play();
      }else {
        canvas12Dot3Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas12Dot3);
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
    
    const inputs = canvas12Dot7Rive.stateMachineInputs("12.7-states");
    const trigger12Dot8 = inputs.find((i) => i.name === "12.8");
    const trigger12Dot9 = inputs.find((i) => i.name === "12.9");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-12-8":
            trigger12Dot8.value = true;
            break;
          case "anchor-anim-12-9":
            trigger12Dot9.value = true;
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas12Dot7Rive.play();
      }else {
        canvas12Dot7Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas12Dot7);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas13Dot1Rive.play();
      }else {
        canvas13Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas13Dot1);
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

    const inputs = canvas13Dot2Rive.stateMachineInputs("13.2-states");
    const trigger13Dot3 = inputs.find((i) => i.name === "13.3");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-13-3":
            setTimeout(() => {  
              trigger13Dot3.value = true;
            }, 1000);
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas13Dot2Rive.play();
      }else {
        canvas13Dot2Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas13Dot2);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas14Dot1Rive.play();
      }else {
        canvas14Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas14Dot1);
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

    const inputs = canvas14Dot2Rive.stateMachineInputs("14.2-states");
    const trigger14Dot3 = inputs.find((i) => i.name === "14.3");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-14-3":
            setTimeout(() => {  
              trigger14Dot3.value = true;
            }, 1000);
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas14Dot2Rive.play();
      }else {
        canvas14Dot2Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas14Dot2);
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

    const inputs = canvas14Dot4Rive.stateMachineInputs("14.4-states");
    const trigger14Dot5 = inputs.find((i) => i.name === "14.5");
    const trigger14Dot6 = inputs.find((i) => i.name === "14.6");

    navNext.addEventListener("click", canvasAnim);
    navPrevious.addEventListener("click", canvasAnim);
    
    function canvasAnim(e) {
      let anim = "anim"
      if(currentAnchor.includes(anim)) {
        e.preventDefault();

        switch(currentAnchor) {
          case "anchor-anim-14-5":
            setTimeout(() => {  
              trigger14Dot5.value = true;
            }, 1000);
            break;
          case "anchor-anim-14-6":
            setTimeout(() => {  
              trigger14Dot6.value = true;
            }, 1000);
            break;
        }
      }
    }

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas14Dot4Rive.play();
      }else {
        canvas14Dot4Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas14Dot4);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot1Rive.play();
      }else {
        canvas15Dot1Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot1);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot2Rive.play();
      }else {
        canvas15Dot2Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot2);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot3Rive.play();
      }else {
        canvas15Dot3Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot3);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot4Rive.play();
      }else {
        canvas15Dot4Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot4);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot5Rive.play();
      }else {
        canvas15Dot5Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot5);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot6Rive.play();
      }else {
        canvas15Dot6Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot6);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot7Rive.play();
      }else {
        canvas15Dot7Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot7);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot8Rive.play();
      }else {
        canvas15Dot8Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot8);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot9Rive.play();
      }else {
        canvas15Dot9Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot9);
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

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        canvas15Dot10Rive.play();
      }else {
        canvas15Dot10Rive.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(canvas15Dot10);
  },
});