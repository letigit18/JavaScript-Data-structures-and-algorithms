let a = 'a';
let A = 'Aala';
//compares the characters based on the ASCII value
//while comparing the two strings the js comares only the first letter of each strings

if( a > A){
    console.log('a is greater than A' + a.charCodeAt(0))
}
else{
    console.log('smaller than A')
}
//to access by index value we can use charAt
console.log(A.charAt(2))
//substring function 
console.log(A.substring(0,2)) // to take the first two strings
//to detect the position of the string
let dep = "Computer Science"
console.log(dep.indexOf("tech"))
function checkString(str, search){
    if(str.indexOf(search) == -1){
        return 'Not found'
    }
    else{
        return 'Available'
    }
}
console.log(checkString("Information Systems", "Info"))
//the function that counts a specific string in the string
var str2 = "Hello there";
var count = 0;
function countChar(c){
    for (i = 0; i < str2.length; i++){
        if (str2[i] == c){
            count = count + 1;
        }
    }
    return count;
}
console.log(countChar('l'))
//split function function decomposes larger strings into smaller array of strings
const listOfDep = "IT, Computer science, Engineering, Health";
const newArray = listOfDep.split(",")
console.log(newArray)
console.log(newArray[0])
console.log(listOfDep.split(" "))
const newString= listOfDep.replace("IT", "Information technology")
console.log(newString)