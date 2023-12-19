function Node(data){
    this.data = data;
    this.next = null;
}
function SingleLinkedList(){
    this.head = null;
    this.size = 0;
}
SingleLinkedList.prototype.isEmpty = function (){
    return this.size == 0;
}
//inserting to the first node
SingleLinkedList.prototype.insertFirst = function(value){
    if(this.head == null){
        this.head = new Node(value);
    }
    else{
    temp = this.head;
    this.head = new Node(value);
    this.head.next = temp;
    }
    this.size++;
}
//inserting to the tail
SingleLinkedList.prototype.insertLast = function(value){
    current = this.head;
    if (!this.head){
        this.head = new Node(value)
    }
    else{
    while(current.next){
        current = current.next;
    }
    current.next = new Node(value)
    }
    this.size++;
}
//removing at the first
SingleLinkedList.prototype.removeAtFirst =function(){
    if(this.size == 0){
        return;
    }
    let current = this.head;
    this.head = current.next;
    this.size--;
}
//removing element at end
SingleLinkedList.prototype.removeAtEnd = function (){
    if(this.size == 0){
        return;
    }
    else{
        let current = this.head;
        let prev;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        this.size--;
    }
}
//removing element of linked list by value
SingleLinkedList.prototype.remove = function (value){
    let current = this.head;
    let prev = current;
    if(this.size == 0){
    return;
 }
 if(current.data == value){
    this.head = current.next;
    this.size--;
 }
 else{
    while(current.next){
        if(current.data == value){
           prev.next = current.next;
           prev = current;
           current = current.next;
           break;

        }
        prev = current;
        current = current.next;
    }//end of while
        if(current.data == value){
            prev.next = null;
        }
    
    this.size--;
 }
}
//displaying the data's in the single linked list
SingleLinkedList.prototype.search = function (value){
    let current = this.head;
    while(current){
        if(current.data == value){
            return true;
        }
        current = current.next;
    }
    return false;
}
SingleLinkedList.prototype.display = function(){
    let current = this.head;
    if(this.head == null){
        return;
    }
    else{
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}
//returning the length of the linked list
SingleLinkedList.prototype.length = function(){
    return this.size
}
let s1 = new SingleLinkedList();
s1.insertFirst(300)
s1.insertFirst(200)
s1.insertLast(8)
console.log(s1.search(90))
s1.remove(8)
s1.display()
console.log(s1.length())