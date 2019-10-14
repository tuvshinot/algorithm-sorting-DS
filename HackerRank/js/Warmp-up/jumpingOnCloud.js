function jumpingOnClouds(c) {
    let moves = 0;
    let i = 0;
    let last = c.length - 1;

    while(i < last) {
        if(c[i + 2] === 1) {
           i++;
           moves++;
        } else {
            i += 2;
            moves++;
        }
    }

    return moves;
}

// there is no two consecutive 1 - thunderhead
// start alway 0 - culumus

let moves = jumpingOnClouds([0, 0, 0, 0, 1, 0]);
console.log(moves);

moves = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
console.log(moves);

