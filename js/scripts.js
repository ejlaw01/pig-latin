//business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var quArray = ["qu", "Qu", "QU"];
var i = 0;

var wordTranslator = function(input) {
  var translation = [];
  for (i = 0; i < input.length; i += 1) {
    if (vowels.includes(input[0])) {
      translation.push(input + "ay");
    // } else if (quArray.includes(input[0] + input[1])) {
    //   translation.push(input.slice(2) + input[0] + input[1] + "ay");
    } else if ((consonants.includes(input[0]) && consonants.includes(input[1])) || (quArray.includes(input[0] + input[1]))) {
      translation.push(input.slice(2) + input[0] + input[1] + "ay");
    } else if (consonants.includes(input[0])) {
      translation.push(input.slice(1) + input[0] + "ay");
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
    var pigLatinSentence = wordTranslator(splitSentence);

    // var wordArray = splitSentence.forEach(function(word) {
    //   wordTranslator(word);
    // });

    $("#output").text(pigLatinSentence);
  });
});
