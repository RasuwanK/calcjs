const mainScreen = document.getElementById("main");
const subScreen = document.getElementById("sub");
const numButtons = document.getElementsByClassName("button-nm");
const addButton = document.getElementById("+");
const subButton = document.getElementById("-");
const mulButton = document.getElementById("*");
const divButton = document.getElementById("/");
const eqButton = document.getElementById("eq");
const ceButton = document.getElementById("ce");

// Contains calculator state
const state = {
  screen: "",
  operation: "",
  prev: "",
};

function reset() {
  state.screen = "";
  state.operation = "";
  state.prev = "";
  subScreen.textContent = "";
  mainScreen.textContent = "";
}

// Updating the state with the ui
function setScreen(value) {
  state.screen += value;
  // Finally update the ui
  mainScreen.textContent = state.screen;
}

function calc() {
  subScreen.textContent += state.screen;
  switch (state.operation) {
    case "+":
      state.screen = parseInt(state.screen) + parseInt(state.prev);
      break;
    case "-":
      state.screen = parseInt(state.prev) - parseInt(state.screen);
      break;
    case "*":
      state.screen = parseInt(state.prev) * parseInt(state.screen);
      break;
    case "/":
      state.screen = parseInt(state.prev) / parseInt(state.screen);
      break;
    default:
      state.screen = "";
      state.operation = "";
      state.prev = "";
      subScreen.textContent = "";
      mainScreen.textContent = "Invalid operation";
  }
  mainScreen.textContent = state.screen;
}

// Updating calculator operation and the ui
function setOperation(operator) {
  if (typeof operator !== "string") {
    throw new Error("Invalid data type for the argument 'operator'");
  }

  switch (operator) {
    case "+":
      state.operation = operator;
      break;
    case "-":
      state.operation = operator;
      break;
    case "*":
      state.operation = operator;
      break;
    case "/":
      state.operation = operator;
      break;
    default:
      throw new Error("Invalid operator");
  }

  state.prev = state.screen;
  state.screen = "";

  mainScreen.textContent = "";
  subScreen.textContent = `${state.prev}${state.operation}`;
}

for (let index = 0; index < numButtons.length; ++index) {
  const numButton = numButtons[index];

  if (numButton) {
    numButton.addEventListener("click", () => {
      setScreen(numButton.id);
    });
  }
}

addButton.addEventListener("click", () => {
  setOperation("+");
});

subButton.addEventListener("click", () => {
  setOperation("-");
});

divButton.addEventListener("click", () => {
  setOperation("/");
});

mulButton.addEventListener("click", () => {
  setOperation("*");
});

ceButton.addEventListener("click", () => {});

eqButton.addEventListener("click", () => {
  calc();
});
