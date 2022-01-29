const bag = document.querySelector(".bag");
const actions = document.querySelector(".actions");
const cards = document.querySelector(".rulecard");
const cardInfo = document.querySelector(".rulecardsinfo");
const closeButton = document.querySelector(".close");
const heading = document.querySelector(".heading");

//baskets
const bbaskets = document.querySelector(".bbaskets");
const cbaskets = document.querySelector(".cbaskets");
const gpbaskets = document.querySelector(".gpbaskets");
const tbaskets = document.querySelector(".tbaskets");
const lbaskets = document.querySelector(".lbaskets");
//end

//baskets inputs
const tomatoInput = document.querySelector(".tomatoinput input");
const brinjalInputs = document.querySelector(".brinjalinput input");
const lemonInputs = document.querySelector(".lemoninput input");
const greenpeasInput = document.querySelector(".greenpeasinput input");
const carrotInput = document.querySelector(".carrotinput input");
const rulecardInput = document.querySelector(".rulecardinput input");
//end

bag.addEventListener("click", () => {
  bag.classList.add("hide");
  actions.classList.remove("hide");
});

actions.addEventListener("click", () => {
  actions.classList.add("hide");
  bag.classList.remove("hide");
});

rulecardInput.addEventListener("click", () => {
  cardInfo.classList.remove("hide");
  heading.innerHTML = `<h1>RULE CARDS</h1>`;
});

cards.addEventListener("click", () => {
  cardInfo.classList.remove("hide");
  heading.innerHTML = `<h1>RULE CARDS</h1>`;
});

closeButton.addEventListener("click", () => {
  cardInfo.classList.add("hide");
  heading.innerHTML = `<h1>YOUR GODOWN</h1>`;
});

//add baskets according to numbers
var bcounter = 0;
brinjalInputs.onclick = (function outer() {
  return function inner() {
    bcounter++;
    if (bcounter === 1) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>`;
      brinjalInputs.placeholder = `1`;
    } else if (bcounter === 2) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>
      <div class="brinjalbasket4"></div>`;
      brinjalInputs.placeholder = `2`;
    } else if (bcounter === 3) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>
      <div class="brinjalbasket4"></div>
      <div class="brinjalbasket3"></div>`;
      brinjalInputs.placeholder = `3`;
    } else if (bcounter === 4) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>
      <div class="brinjalbasket4"></div>
      <div class="brinjalbasket3"></div>
      <div class="brinjalbasket2"></div>`;
      brinjalInputs.placeholder = `4`;
    } else if (bcounter === 5) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>
      <div class="brinjalbasket4"></div>
      <div class="brinjalbasket3"></div>
      <div class="brinjalbasket2"></div>
      <div class="brinjalbasket1"></div>`;
      brinjalInputs.placeholder = `5`;
    } else if (bcounter >= 6) {
      bbaskets.innerHTML = `<div class="brinjalbasket5"></div>
      <div class="brinjalbasket4"></div>
      <div class="brinjalbasket3"></div>
      <div class="brinjalbasket2"></div>
      <div class="brinjalbasket1"></div>`;
      brinjalInputs.placeholder = `Max`;
    }
  };
})();

var tcounter = 0;
tomatoInput.onclick = (function outer() {
  return function inner() {
    tcounter++;
    if (tcounter === 1) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>`;
      tomatoInput.placeholder = `1`;
    } else if (tcounter === 2) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>
        <div class="tomatobasket4"></div>`;
      tomatoInput.placeholder = `2`;
    } else if (tcounter === 3) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>
        <div class="tomatobasket4"></div>
        <div class="tomatobasket3"></div>`;
      tomatoInput.placeholder = `3`;
    } else if (tcounter === 4) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>
        <div class="tomatobasket4"></div>
        <div class="tomatobasket3"></div>
        <div class="tomatobasket2"></div>`;
      tomatoInput.placeholder = `4`;
    } else if (tcounter === 5) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>
        <div class="tomatobasket4"></div>
        <div class="tomatobasket3"></div>
        <div class="tomatobasket2"></div>
        <div class="tomatobasket1"></div>`;
      tomatoInput.placeholder = `5`;
    } else if (tcounter >= 6) {
      tbaskets.innerHTML = `<div class="tomatobasket5"></div>
        <div class="tomatobasket4"></div>
        <div class="tomatobasket3"></div>
        <div class="tomatobasket2"></div>
        <div class="tomatobasket1"></div>`;
      tomatoInput.placeholder = `Max`;
    }
  };
})();

var lcounter = 0;
lemonInputs.onclick = (function outer() {
  return function inner() {
    lcounter++;
    if (lcounter === 1) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>`;
      lemonInputs.placeholder = `1`;
    } else if (lcounter === 2) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>
        <div class="lemonbasket4"></div>`;
      lemonInputs.placeholder = `2`;
    } else if (lcounter === 3) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>
        <div class="lemonbasket4"></div>
        <div class="lemonbasket3"></div>`;
      lemonInputs.placeholder = `3`;
    } else if (lcounter === 4) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>
        <div class="lemonbasket4"></div>
        <div class="lemonbasket3"></div>
        <div class="lemonbasket2"></div>`;
      lemonInputs.placeholder = `4`;
    } else if (lcounter === 5) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>
        <div class="lemonbasket4"></div>
        <div class="lemonbasket3"></div>
        <div class="lemonbasket2"></div>
        <div class="lemonbasket1"></div>`;
      lemonInputs.placeholder = `5`;
    } else if (lcounter >= 6) {
      lbaskets.innerHTML = `<div class="lemonbasket5"></div>
        <div class="lemonbasket4"></div>
        <div class="lemonbasket3"></div>
        <div class="lemonbasket2"></div>
        <div class="lemonbasket1"></div>`;
      lemonInputs.placeholder = `Max`;
    }
  };
})();

var gpcounter = 0;
greenpeasInput.onclick = (function outer() {
  return function inner() {
    gpcounter++;
    if (gpcounter === 1) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>`;
      greenpeasInput.placeholder = `1`;
    } else if (gpcounter === 2) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>
        <div class="gpeasbasket4"></div>`;
      greenpeasInput.placeholder = `2`;
    } else if (gpcounter === 3) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>
        <div class="gpeasbasket4"></div>
        <div class="gpeasbasket3"></div>`;
      greenpeasInput.placeholder = `3`;
    } else if (gpcounter === 4) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>
        <div class="gpeasbasket4"></div>
        <div class="gpeasbasket3"></div>
        <div class="gpeasbasket2"></div>`;
      greenpeasInput.placeholder = `4`;
    } else if (gpcounter === 5) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>
        <div class="gpeasbasket4"></div>
        <div class="gpeasbasket3"></div>
        <div class="gpeasbasket2"></div>
        <div class="gpeasbasket1"></div>`;
      greenpeasInput.placeholder = `5`;
    } else if (gpcounter >= 6) {
      gpbaskets.innerHTML = `<div class="gpeasbasket5"></div>
        <div class="gpeasbasket4"></div>
        <div class="gpeasbasket3"></div>
        <div class="gpeasbasket2"></div>
        <div class="gpeasbasket1"></div>`;
      greenpeasInput.placeholder = `Max`;
    }
  };
})();

var ccounter = 0;
carrotInput.onclick = (function outer() {
  return function inner() {
    ccounter++;
    if (ccounter === 1) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>`;
      carrotInput.placeholder = `1`;
    } else if (ccounter === 2) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>
        <div class="carrotbasket4"></div>`;
      carrotInput.placeholder = `2`;
    } else if (ccounter === 3) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>
        <div class="carrotbasket4"></div>
        <div class="carrotbasket3"></div>`;
      carrotInput.placeholder = `3`;
    } else if (ccounter === 4) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>
        <div class="carrotbasket4"></div>
        <div class="carrotbasket3"></div>
        <div class="carrotbasket2"></div>`;
      carrotInput.placeholder = `4`;
    } else if (ccounter === 5) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>
        <div class="carrotbasket4"></div>
        <div class="carrotbasket3"></div>
        <div class="carrotbasket2"></div>
        <div class="carrotbasket1"></div>`;
      carrotInput.placeholder = `5`;
    } else if (ccounter >= 6) {
      cbaskets.innerHTML = `<div class="carrotbasket5"></div>
        <div class="carrotbasket4"></div>
        <div class="carrotbasket3"></div>
        <div class="carrotbasket2"></div>
        <div class="carrotbasket1"></div>`;
      carrotInput.placeholder = `Max`;
    }
  };
})();
