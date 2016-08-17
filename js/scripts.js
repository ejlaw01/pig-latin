//business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var i = 0;

var translator = function(input) {
  // debugger;
  var translation = [];
  for (i = 0; i <= input.length; i += 1) {
    if (vowels.includes(input[i])) {
      translation.push("is a vowel");
    } else {
      alert("not a vowel");
    }
    return translation;
  }
};


//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var splitSentence = $("input#sentence").val();
    var pigLatinSentence = translator(splitSentence);
    $("#output").text(pigLatinSentence);
  });
});
