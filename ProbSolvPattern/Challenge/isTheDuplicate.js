
// multiple pointers
function areThereDuplicatesMy(...params) {
    if(params == null) return;

    params.sort((a,b) => a > b);
    let start = 0;

    for (let next = 1; next < params.length; next++) {
        if(params[start] == params[next])
            return true;
        start++;
    }
    return false;
}

//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  // frenquency counter
  function areThereDuplicatesFrequency(...params) {
    if(params === null) return 0;

    var counter = {};
    for (let i = 0; i < params.length; i++) {
        if(counter[params[i]]){
            return true;
        } else {
            counter[params[i]] = 1;
        }
    }
    return false;
  }

  // frequency
  function areThereDuplicatesFrequencyColt(...arguments) {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }


  // Linear solution
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }

















