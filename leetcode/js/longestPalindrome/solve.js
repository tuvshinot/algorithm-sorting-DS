const longestPalindrome = str => {
  let start = 0;
  let end = 0;

  for (var i = 0; i < str.length; i++) {
    let len1 = expandCenter(str, i, i);
    let len2 = expandCenter(str, i, i + 1);
    let len = Math.max(len1, len2);

    if(len < start - end) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }

  return  str.slice(Math.ceil(start), end + 1);
};


const expandCenter = (str, left, right) => {
  let R = right; let L = left;
  while (L > -1 && R < str.length) {
    if(str[L] !== str[R]) break;
    L--;
    R++;
  }

  return R - L - 1;
};
