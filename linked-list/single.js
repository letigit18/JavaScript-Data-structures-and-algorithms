function Node(data){
    this.data = data;
    this.next = null;
}
function SingleLinkedList(){
    this.head = null;
    this.size = 0; 
}
SingleLinkedList.prototype.isEmpty = function(){
    return this.size == 0
}
SingleLinkedList.prototype.insertFirst = function (value){
    if(this.head == null){
        this.head = new Node(value);
    }
    else{
    let temp = this.head;
    this.head = new Node(value);
    this.head.next = temp;
    }
    this.size++;
}
SingleLinkedList.prototype.display = function(){
    let current = this.head;
    while(current != null){
        console.log(current.data)
        current = current.next;
    }
}
SingleLinkedList.prototype.delete = function(value){
    let current = this.head;
    if(current.data == value){
        this.head = current.next;
    }
    else{
        while(current != null){

        }
    }
}
let n1 = new SingleLinkedList()
n1.insertFirst(30)
n1.insertFirst(40)
console.log(n1.size)
n1.display()