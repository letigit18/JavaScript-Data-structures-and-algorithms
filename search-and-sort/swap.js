function swap(a, b){
    let temp
    temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
}
console.log(swap(5, 4))