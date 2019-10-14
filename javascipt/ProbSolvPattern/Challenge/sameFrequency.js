
// frequenct counter
// bug
let sameFrequency = (num1, num2) => {

    if(num1 == null || num2 == null) return false;
    
    let num1Arr = num1.toString().split('');
    let num2Arr = num2.toString().split('');
   
    if(num1Arr.length != num2Arr.length) return false;

    let lookUp = {};

    for (let i = 0; i < num1Arr.length; i++) {
        let singleLetter = num1Arr[i];
        lookUp[singleLetter] ? lookUp[singleLetter]++ : lookUp[singleLetter] = 1;
    }

    // console.log(lookUp);
    for(let key in lookUp) {
        if(!lookUp[key]) {
            return false;
        }
        else {
            lookUp[key]--;
        }
    }
    return true;
}

console.log("Same :" + sameFrequency(182,812));// true


//sameFrequency Solution
function sameFrequencyColt(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}