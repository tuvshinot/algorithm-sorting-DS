// multiple pointer

var isSubSequence = (str1, str2) => {

    if(str1.length > str2.length) return undefined;

    let letters = str1.split('');
    let lettersToCompare = str2.split('');
    let start = 0;

    for(let i = 0; i < lettersToCompare.length; i++) {
        if(letters[start] == lettersToCompare[i]) {
            start++;
        }

        if(++start == letters.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubSequence('abc', 'acb')); //false order matters
console.log(isSubSequence('abc', 'adabracadabra')); // true

// Udemy colt solution
function isSubsequenceColt(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }


  // recursive way
//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequenceRecursive(str1, str2) {
  if(str1.length === 0) return true;
  if(str2.length === 0) return false;
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}