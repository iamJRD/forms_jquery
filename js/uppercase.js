$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var textInput = $("input#text").val().toUpperCase();
    $(".upper-text").text(textInput);


    event.preventDefault();
  });
});
