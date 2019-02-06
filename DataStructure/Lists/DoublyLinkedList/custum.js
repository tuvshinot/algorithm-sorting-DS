class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // let oldHead = this.head;
            // this.head = node;
            // node.next = oldHead;
            // oldHead.prev = node;
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(!this.head) return undefined;
        let shiftedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let pivotHalf = this.length / 2;
        let count, current;
        if(index <= pivotHalf ) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === this.length) {
            this.push(val);
        }
        else if(index === 0) {
            this.unshift(val);
        } else {
            let newNode = new Node(val);
            let preNode = this.get(index - 1);
            preNode.next.prev = newNode;
            newNode.next = preNode.next.prev;
            preNode.next = newNode;
            newNode.prev = preNode;
            this.length++;
        }
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var removingNode = this.get(index);
        removingNode.prev.next = removingNode.next;
        removingNode.next.prev = removingNode.prev;

        removingNode.next = null;
        removingNode.prev = null;

        this.length--;
        return removingNode;
    }

    reverse() {
      if(!this.head) return undefined;
      var node = this.head;
      this.head = this.tail;
      this.tail = node;

      let prev = null;
      let next;

      for (var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        node.prev = next;
        prev = node;
        node = next;
      }
      return  this;
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
