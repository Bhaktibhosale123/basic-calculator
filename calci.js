/*---------Calculation of result-----------*/
function calciResult() {
  var input = document.getElementById("result").value;
  var output = eval(input);
  document.getElementById("result").value = output;
}

/*-----------Display Screen-----------*/
function display(value) {
  document.getElementById("result").value += value;
}

/*--------------Clear Screen--------------*/
function allCancel() {
  document.getElementById("result").value = "";
}

/*-----------Cancel only single item---------*/
function singleCancel() {
  var value1 = document.getElementById("result").value.slice(0, -1);
  document.getElementById("result").value = value1;
}
