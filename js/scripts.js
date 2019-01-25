function beepBoopFunction(number, name) {
  var newArray = [];
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 && i !== 0) {
      newArray.push(" I'm sorry " + name + ", I can't do that ");
    } else if (i.toString().split("").includes("1")) {
      newArray.push(" Boop!");
    } else if (i.toString().split("").includes("0")) {
      newArray.push(" Beep!");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};



$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var name = $("#inputName").val();
    var result = beepBoopFunction(number, name);

    $("#result").text(result);
  });
});
