function checkPalindrome(str){
let j = str.length -1; 
for (i = 0; i < str.length; i++)
{
    if(str[i] !== str[j]){
        return false;
    }
    j--;

}
return true;
}
console.log(checkPalindrome("villa"))