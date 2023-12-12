function Nums(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
    this.sum = function (n1, n2){
       n1 = this.num1;
       n2 = this.num2;
       return n1 + n2 
    }
}

Nums.prototype.min = function (n1, n2){
    n1 = this.num1;
    n2 = this.num2;
    return n1 - n2;
}
let s1 = new Nums(7, 3);
console.log(s1.sum())
console.log(s1.min())