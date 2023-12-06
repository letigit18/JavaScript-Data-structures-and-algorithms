let numbers = [33, 1, 4, 6, 2, 35]
let str = ["Zerihun", "Tola", "Abdi"]
console.log(str.sort())
console.log(numbers.sort(compareNumbers))

function compareNumbers(a, b){
    return (b-a)
}