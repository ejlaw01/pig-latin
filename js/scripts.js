//business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var quArray = ["qu", "Qu", "QU"];
var i = 0;
var translation = [];

var wordTranslator = function(input) {
  for (i = 0; i < input.length; i++) {
    if (vowels.includes(input[0])) {
      translation.push(input + "ay");
    } else if (consonants.includes(input[0]) && consonants.includes(input[1]) && consonants.includes(input[2])) {
      translation.push(input.slice(3) + input[0] + input[1] + input[2] + "ay");
    } else if ((consonants.includes(input[0]) && consonants.includes(input[1])) || (quArray.includes(input[0] + input[1]))) {
      translation.push(input.slice(2) + input[0] + input[1] + "ay");
    } else if (consonants.includes(input[0])) {
      translation.push(input.slice(1) + input[0] + "ay");
    } else {
      alert ("Please enter a word.")
    }
    return translation;
  }
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var splitSentence = $("input#sentence").val().split(" ");
    var wordArray = splitSentence.forEach(function(input) {
      wordTranslator(input);
    });
    $("#output").text(translation.join(" "));
  });
});
