function minimumSwaps(arr) {
   let cycleSizeCount;
   let ans = 0;
   let j;
   const pair = {};
   const visited = [];
   
   // initialize pairs --- that auto sorted by obj itself EX: pair[1] = 3 --- 3 pos, 1 -value
   for(let i = 0; i < arr.length;i++) {
       pair[arr[i]] = i + 1; 
   }

   for(let key in pair) {
        if(visited[key] || pair[key] === key)
            continue;

        j = key;
        cycleSizeCount = 0;

        while(!visited[j]) {
            visited[j] = true;
            j = pair[j];
            cycleSizeCount++;
        }
    ans += (cycleSizeCount - 1);
   }
    return ans;
}

console.log(minimumSwaps([4,3,1,2]));
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));