console.log("hello World");
const display = document.getElementById("Screen");
let sumValue = "";
function clearAll() {
  sumValue = "";
  display.value = "";
}
function pop() {
  let sumValueLength = sumValue.length;
  sumValue = sumValue.substring(0, sumValueLength - 1);
  display.value = sumValue;
}
function sumUp(value) {
  if (value == "=") {
    sumValue = eval(sumValue);
  } else sumValue += value;
  sumValue = String(sumValue);
  display.value = sumValue;
}
