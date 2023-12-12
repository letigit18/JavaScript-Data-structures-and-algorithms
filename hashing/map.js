let map = {}
let str = "computer science";
for ( let i = 0; i < str.length; i++){
    if(!map[str[i]]){
        map[str[i]] = 1;
    }
    else{
        map[str[i]] = map[str[i]] + 1;
    }
}
console.log(map)

