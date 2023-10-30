document.getElementById("price1").onclick = function (event) {
  let a = document.getElementById("type").value;
  let b = document.getElementById("ammount").value;
  let au = document.getElementById("au").value;
  if (au == "mg") {
    b = b / 1000;
  }
  let c = document.getElementById("purity").value;
  let DP = 0;
  if (a == "Mor") {
    DP = 5;
  } else if (a == "Her") {
    DP = 10;
  }
  let result1 = DP * c * (b / 100);
  document.getElementById("result1").innerHTML = result1.toFixed(0);
};

function allowSymbols(event) {
  const inputField = event.target;
  // Allowing alphanumeric characters, space, and specific symbols like @, #, $
  const allowedCharacters = /^[A-Za-z0-9\s@#$]+$/;

  const inputValue = inputField.value;
  if (!allowedCharacters.test(inputValue)) {
    inputField.value = inputValue.slice(0, inputValue.length - 1);
  }
}
