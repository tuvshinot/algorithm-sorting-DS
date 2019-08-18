// reverse func
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length == 0) return "";
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  }

  function reverseColt(str){
    if(str.length <= 1) return str;
    return reverseColt(str.slice(1)) + str[0];
  }
  
//console.log("Reversed : " + reverse('awesome')) // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
// COlt reverse
 


// is palindrome
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
// console.log("Palindrome awesome : " + isPalindrome('awesome')) // false
// console.log("Palindrome foobar : " + isPalindrome('foobar')) // false
// console.log("Palindrome tocacat : " + isPalindrome('tacocat'))//  // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


// SomeRecursive
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return false;
  if(callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
//console.log("SomeRecursive : " + someRecursive([1,2,3,4], isOdd)) // true

// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false



//flatten Solution
function flatten(oldArr){
  var newArr = [];
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]));
    	} else {
      		newArr.push(oldArr[i]);
    	}
    } 
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]