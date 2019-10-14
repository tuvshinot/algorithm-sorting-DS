class HashTable {
    constructor(size = 53) { // use prime number
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; // use prime number

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; /// alphabet bet index
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
          for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1]
            }
          }
        }
        return undefined;
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              let arr = this.keyMap[i];
              if(!keysArr.includes(arr[j][0])){
                keysArr.push(arr[j][0])
              }
            }
          }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
              }
            }
          }
        }
        return valuesArr;
      }
}










