const input = document.getElementById("input");
let inputNum = "";

const fromUnit = document.getElementById("from-temp");
let fromUnitValue = "";

const toUnit = document.getElementById("to-temp");
let toUnitValue = "";

const resultField = document.getElementById("resultField");
const button = document.getElementById("btn");

// Store conversion in result variable
let result = 0;

// Render the result
function showResult() {
  resultField.textContent =
    inputNum +
    " " +
    fromUnitValue +
    " is " +
    result.toFixed(3) +
    " " +
    toUnitValue;
}

// Conversion conditions and corresponding conversion functions
function convertTemperature() {
  if (fromUnitValue == "Fahrenheit" && toUnitValue == "Celsius") {
    fahrenheitToCelsius();
  } else if (fromUnitValue == "Fahrenheit" && toUnitValue == "Kelvin") {
    fahrenheitToKelvin();
  } else if (fromUnitValue == "Celsius" && toUnitValue == "Fahrenheit") {
    celsiusToFahrenheit();
  } else if (fromUnitValue == "Celsius" && toUnitValue == "Kelvin") {
    celsiusToKelvin();
  } else if (fromUnitValue == "Kelvin" && toUnitValue == "Fahrenheit") {
    kelvinToFahrenheit();
  } else if (fromUnitValue == "Kelvin" && toUnitValue == "Celsius") {
    kelvinToCelsius();
  }
}

// Conversion Functions
function fahrenheitToCelsius() {
  result = (inputNum - 32) * (5 / 9);
}

function fahrenheitToKelvin() {
  result = (inputNum - 32) * (5 / 9) + 273.15;
}

function celsiusToFahrenheit() {
  result = inputNum * (9 / 5) + 32;
}

function celsiusToKelvin() {
  result = inputNum + 273.15;
}

function kelvinToFahrenheit() {
  result = (inputNum - 273.15) * (9 / 5) + 32;
}

function kelvinToCelsius() {
  result = inputNum - 273.15;
}

input.addEventListener("change", function () {
  inputNum = this.value;
});

fromUnit.addEventListener("change", function () {
  fromUnitValue = this.value;
});

toUnit.addEventListener("change", function () {
  toUnitValue = this.value;
});

button.addEventListener("click", function () {
  if (
    inputNum != "" &&
    fromUnitValue != toUnitValue &&
    fromUnitValue != "" &&
    toUnitValue != ""
  ) {
    convertTemperature();
    showResult();
    // edge cases
  } else if (inputNum == "") {
    resultField.textContent = "Please enter a valid number.";
  } else if (toUnitValue == "" || fromUnitValue == "") {
    resultField.textContent = "Please enter a valid conversion.";
  } else if (fromUnitValue == toUnitValue) {
    resultField.textContent = "No conversion needed.";
  }
});
