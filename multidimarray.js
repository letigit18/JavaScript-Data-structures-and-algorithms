//multi dimensional array is not declared directly like c++ or java JavaScript stores array elements in the form of jagged array
const numbers = [
    [1, 2, 3],
    [3, 5, 5, 3],
    [3, 2, 4, 2, 4]
]
for (let i = 0; i < numbers.length; i++){
    let colLength = numbers[i].length;
    console.log(`***** this is ${i+1} row`)
    for( let j = 0; j < colLength; j++){
        console.log(`${numbers[i][j]},`)
    }

}