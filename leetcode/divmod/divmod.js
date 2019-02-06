function divmod(numerator, denumerator) {
  let remainder = numerator % denumerator;
  let q = Math.floor(numerator / denumerator);
  return [q, remainder];
}

function timer(numberOfSeconds) {
  let s, m, h;
  while(numberOfSeconds > 0) {
    minSec = divmod(numberOfSeconds, 60);
    s = minSec[1];
    hrMin = divmod(minSec[0], 60);
    m = hrMin[1];
    h = hrMin[0];
    numberOfSeconds--;
    console.log(h + ":" + m + ":" + s)
  }
}
