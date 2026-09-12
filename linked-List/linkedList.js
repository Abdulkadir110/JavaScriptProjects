class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    prepend(data) {
        let newNode = new Node(data);
        if(this.head != null) {
            let temp = this.head;
            this.head = newNode;
            this.next = temp;
            this.size++;
        }
        else {
            this.append(data);
        }
    }
    insertAt(data, index) {
      if(this.head == null)this.append(data);
      else if (index === 0) this.prepend(data);
      else if (index < 0 || index >= this.size) throw new Error(`Index ${index} out of bounds`);
      else {
          let current = this.head;
          let count = 0
          while(current.next != null){
              if (count === index) {
                  let newNode = new Node(data);
                  let temp = current.next;
                  current.next = newNode;
                  newNode.next = temp;
              }
              current = current.next;
              count++;
          }
          this.size++;
      }
    }
    pop() {
        let count = 0;
        if(this.head != null){
            let current = this.head
            while (current.next != null){
                if(count === this.size){
                    current = null
                }
                count++;
                current = current.next;
            }
        }
        this.size--;
    }
    popFirst() {
        if(this.head != null){
            let current = this.head;
            this.head = null
            this.head = current.next;
            this.size--;
        }
    }
    popAt(index) {
        if(index === 0) this.popFirst();
        else if (index < 0 || index >= this.size) throw new Error(`Index ${index} out of bounds`);
        else {
            let count = 0
            let current = this.head;
            while (current.next !== null) {
                if (count === index - 1) {
                    let temp = current.next
                    current.next = temp.next
                    this.size--;
                }
                current = current.next;
                count++;
            }
        }
    }
    peekAt(index){
        if(index === 0)return this.head.data
        else if(index >= this.size) return null;
        else if(index < 0) throw new Error(`Index ${index} out of bounds`)
        else{
            let count = 0;
            let current = this.head;
            while(current.next != null){
                if(count === index){
                    return current.data
                }
                count++;
                current = current.next;
            }
        }
    }
}
module.exports = {LinkedList, Node};