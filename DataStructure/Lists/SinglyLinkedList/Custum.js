// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;        
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var pre = current;
        while(current.next){
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        let head = this.head;
        this.head = head.next; // if there is no next, then null, head.next default to null
        this.length--;
        
        if(this.length === 0){
            this.tail = null;
        }
        return head;
    }
    unshift(val) {
        let newNode  = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if(!node) {
            return false;
        }

        node.val = value;
        return true;
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
            newNode.next = preNode.next; // get(index)
            preNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let temp = this.tail;
        let curHead = this.head;
        for(let i = this.length - 1; i >= 0; i--) {
            let current = this.get(i - 1);
            
        }
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push(1)
list.push(3)
list.push(4);
//console.log(list.push(4))
// console.log(list.pop());
