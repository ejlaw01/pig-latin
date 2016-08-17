## Program Specs

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Input: !
  * Output: !

* The program adds "ay" to single-letter words beginning with a vowel.
  * Input: "allow"
  * Output: "alloway"

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  * Input: "cat"
  * Output: "atcay"

* The program changes words beginning with 2 or more consonants, places them in the back of the word and adds "ay" at the end.
  * Input: "shoot"
  * Output: "ootshay"

* This program will change words beginning with "y", treat "y" as a consonant, and add "ay" at the end.
  * Input: "yellow"
  * Output:"ellowyay"

* The program will take first consonants that include "qu", move the "u" along with the "q", and at "ay" at the end.
  * Input: "quick"
  * Output: "ickquay"

* The program will not forget about words like "squeal" where "qu" doesn't come first!
  * Input: "squeak"
  * Output: "eaksquay"

* The program will process multiple words.
  * Input: "I am a cat"
  * Output: "Iay amay aay atcay"
