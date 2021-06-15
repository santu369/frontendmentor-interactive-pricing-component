import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../sass/style.scss";

const pageViewsEl = document.getElementById("page-views");
const rangeEl = document.getElementById("range");
const priceEl = document.getElementById("price");
const toggleEl = document.getElementById("toggle");
const pricePerYearEl = document.getElementById("price-per-year");
const yearPriceEl = document.getElementById("price-year");
const discountSmallEl = document.getElementById("discount-small");
const discountlargeEl = document.getElementById("discount-large");

// store pricing details
const pricing = [
  ["10K", "8.00"],
  ["50K", "12.00"],
  ["100K", "16.00"],
  ["500K", "24.00"],
  ["1M", "36.00"],
];

//store billing type
let billingType = "monthly";

// store slider gradient colors
const primSoftCyan = "hsl(174, 77%, 80%)";
const neuLightGrayBlue = "hsl(224, 65%, 95%)";

// function to change gradient using percent
const changeRangeColor = (percent, trigger) => {
  if (window.chrome) {
    //You are using Chrome or Chromium
    // remove old slider gradient
    if (trigger != "start") {
      document.styleSheets[1].deleteRule(
        document.styleSheets[1].rules.length - 1
      );
    }
    // add new slider gradient
    document.styleSheets[1].addRule(
      ".slider__range::-webkit-slider-runnable-track",
      `background: linear-gradient(
          to right, 
          ${primSoftCyan} 0%, 
          ${primSoftCyan} ${percent}%, 
          ${neuLightGrayBlue} ${percent}%, 
          ${neuLightGrayBlue} 100%
          )`
    );
  } else if (window.opera) {
    //You are using Opera >= 9.2
  } else if ("MozBoxSizing" in document.body.style) {
    //You are using Firefox or Firefox based >= 3.2
    // remove old slider gradient
    document.styleSheets[1].deleteRule(
      document.styleSheets[1].rules.length - 1
    );
    // add new slider gradient
    document.styleSheets[1].addRule(
      ".slider__range::-moz-range-track",
      `background: linear-gradient(
          to right, 
          ${primSoftCyan} 0%, 
          ${primSoftCyan} ${percent}%, 
          ${neuLightGrayBlue} ${percent}%, 
          ${neuLightGrayBlue} 100%
          )`
    );
  } else if ({}.toString.call(window.HTMLElement).indexOf("Constructor") + 1) {
    //You are using Safari >= 3.1
  } else {
    //Unknown
  }
};

//function to reset slider
const resetSlider = () => {
  rangeEl.value = 2;
};

//function to set price based on monthly/yearly billing
const setPrice = (value) => {
  let price = pricing[value][1];
  if (billingType === "monthly") {
    priceEl.textContent = "$ " + price;
    // hide price per year
    pricePerYearEl.style.display = "none";
    // remove animation
    discountSmallEl.classList.remove("up-down-anim");
    discountlargeEl.classList.remove("up-down-anim");
  } else {
    priceEl.textContent = "$ " + (price * 0.75).toFixed(2);
    yearPriceEl.textContent =
      "$ " + ((price * 0.75).toFixed(2) * 12).toFixed(2);
    // show price per year
    pricePerYearEl.style.display = "block";
    // add animation
    discountSmallEl.classList.add("up-down-anim");
    discountlargeEl.classList.add("up-down-anim");
  }
};

// slider event handler
rangeEl.addEventListener("input", (e) => {
  switch (e.target.value) {
    case "0":
      pageViewsEl.textContent = pricing[0][0];
      changeRangeColor(0);
      setPrice(0);
      break;
    case "1":
      pageViewsEl.textContent = pricing[1][0];
      changeRangeColor(25);
      setPrice(1);
      break;
    case "2":
      pageViewsEl.textContent = pricing[2][0];
      changeRangeColor(50);
      setPrice(2);
      break;
    case "3":
      pageViewsEl.textContent = pricing[3][0];
      changeRangeColor(75);
      setPrice(3);
      break;
    case "4":
      pageViewsEl.textContent = pricing[4][0];
      changeRangeColor(100);
      setPrice(4);
      break;
    default:
      break;
  }
});

//toggle event handler
toggleEl.addEventListener("click", (e) => {
  toggleEl.classList.toggle("justify-content-end");
  toggleEl.classList.toggle("justify-content-start");
  switch (toggleEl.getAttribute("aria-checked")) {
    case "true":
      toggleEl.setAttribute("aria-checked", "false");
      break;
    case "false":
      toggleEl.setAttribute("aria-checked", "true");
      break;
  }
  if (billingType === "monthly") {
    billingType = "yearly";
  } else {
    billingType = "monthly";
  }
  setPrice(rangeEl.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const timeout = window.setTimeout(() => {
    while (true) {
      if (document.styleSheets[1]) {
        // add slider gradient here once page loads
        changeRangeColor(50, "start");
        // reset slider on page load
        resetSlider();
        break;
      }
    }
  }, 1000);
});

console.log("loaded");
