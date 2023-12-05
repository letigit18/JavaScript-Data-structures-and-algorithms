let str = "level"
let res ="";
for (i = str.length - 1; i < str.length; i--)
{
    res = res + str[i];
    if(i < 0){
        break;
    }
}
if (res === str){
console.log("true")
}
else{
    console.log("false")
}