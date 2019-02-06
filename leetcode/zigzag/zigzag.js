var convert = function(s, numRows) {
    let result = s[0];
    let acc = result;
    let i, j;

    for(i = 1; i < s.length; i++) {
      for (j = i; j < s.length; j++) {
        acc += s[j];
        if(acc.length === numRows) {
          j+= numRows - 2;
          result += s[j + 1];
          acc = "";
        }
      }

    return result;
};
