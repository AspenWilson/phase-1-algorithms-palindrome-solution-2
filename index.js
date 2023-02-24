function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the beginning to the middle
  for (let i =0; i<word.length/2; i++) {
    //check each letter to the corresponding letter from the end 
    const j = word.length-1-i
    const starLetter = word[i]
    const endLetter= word[j]
    //if any letters don't match, return false. if they do mathc, return true. 
    if (starLetter != endLetter) return false;
  }
  return true
}

/* 
  Add your pseudocode here
*/
//Need to create a function that returns 'true' if the word is a palindrone. In this exercise, I'll be comparing the wods, instead of revesing the string. 

//iterate from the beginning to the middle of the given word. 

//check each letter to the corresponding letter from the end - if any letters don't match, return false. if they do mathc, return true. 

/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hotdog"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("nyyyn"));
}

module.exports = isPalindrome;
