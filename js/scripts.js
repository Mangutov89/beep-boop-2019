$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var name = $("#inputName").val();
    
  });
});
