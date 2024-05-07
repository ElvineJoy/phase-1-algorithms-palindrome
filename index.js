function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord){
    return true;
  } else 
    return false;
};

isPalindrome("JavaScript");
isPalindrome("a");
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
`The function takes in one argument, in this case word, and then using the inbult methods, we assign a new 
variable to the argumnet and apply these methods on it to compare them to get a result by inputing conditionals 
using if.
split(), which splits the string into an array of substrings, returning a new array. On the new array, we 
use the reverse() method (this is done because a palindrome read whether from left to righ or right to left
should read the same way). Lastly we use the join to rejoin the sustrings into a string, which we shall then compare
to the original word and see if they match.`

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
