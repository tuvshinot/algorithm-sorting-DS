function divmod(numerator, denumerator) {
  let remainder = numerator % denumerator;
  let q = Math.floor(numerator / denumerator);
  return [q, remainder];
}

function timer() {
  let numberOfSeconds = Number(document.getElementById("timer").value);
  let s, m, h;
  var x = setInterval(()=> {
    minSec = divmod(numberOfSeconds, 60);
    s = minSec[1];
    hrMin = divmod(minSec[0], 60);
    m = hrMin[1];
    h = hrMin[0];
    numberOfSeconds--;
    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
    if(numberOfSeconds < 0) {
      clearInterval(x);
      document.getElementById("display").innerHTML = "EXPIRED";
    }
  }, 1000)
} 

// $('link[href="style.css"]').attr('href','style1.css');

// /bitrix/tmp/sotbit_origami/1746581168_1/theme/color.css

