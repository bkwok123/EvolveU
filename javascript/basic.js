window.onload=function(){
    // var button = document.getElementById("button1");
    button1.addEventListener("click", function(){onButtonClicked("button1")});
    button1.addEventListener("click", function(){DisplayNum(txtbox1.value)});
    button1.addEventListener("click", function(){document.getElementById("header1").textContent = size(txtbox1.value);});     

    button1.addEventListener("click", function(){findMax(1, 123, 500, 115, 44, 88)});
  }

function PrintFunction() {
    console.log('Hello World from basic.js')
}

function onButtonClicked(tempID) {
    document.getElementById(tempID)
    console.log("I'm in the button click event")
}

function DisplayNum(x) {
    y = Number(x) + 1
    console.log(y)
}

function size(x) {

    switch(true) {
        case x < 10:
            temp = "small"
          break;
        case x < 20:
            temp = "med"
          break;
        case x >= 20:
            temp = "large"
        //default:
      } 

    return temp;

}

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  console.log(max);

  return max;
}