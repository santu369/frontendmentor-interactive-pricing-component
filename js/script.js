const pageViewsEl = document.getElementById("page-views");
const rangeEl = document.getElementById("range");
const priceEl = document.getElementById("price");
const monthlyBillingEl = document.getElementById("monthly");
const toggleEl = document.getElementById("toggle");
const yearlyBillingEl = document.getElementById("yearly");

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
const changeRangeColor = (percent) => {
  if (window.chrome) {
    //You are using Chrome or Chromium
    // remove old slider gradient
    document.styleSheets[2].deleteRule(
      document.styleSheets[2].rules.length - 1
    );
    // add new slider gradient
    document.styleSheets[2].addRule(
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
    document.styleSheets[2].deleteRule(
      document.styleSheets[2].rules.length - 1
    );
    // add new slider gradient
    document.styleSheets[2].addRule(
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
    priceEl.textContent = "$" + price;
  } else {
    priceEl.textContent = "$" + (price * 0.75).toFixed(2);
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
  if (billingType === "monthly") {
    billingType = "yearly";
  } else {
    billingType = "monthly";
  }
  setPrice(rangeEl.value);
});

// add slider gradient here once page loads
changeRangeColor(50);

// reset slider on page load
resetSlider();
