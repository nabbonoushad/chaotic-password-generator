//Chaotic Password Generator
//multi-line arrays for human-redability
//all letters in uppercase
let cap = [
    'A', 
    'B', 
    'C', 
    'D', 
    'E', 
    'F', 
    'G', 
    'H', 
    'I', 
    'J', 
    'K', 
    'L', 
    'M', 
    'N', 
    'O', 
    'P', 
    'Q', 
    'R', 
    'S', 
    'T', 
    'U', 
    'V', 
    'W', 
    'X', 
    'Y', 
    'Z'
]
//all letters in lowercase
//could have just done: 
// let small = []
// for (let i = 0; i < cap.length; i++) {
//     let e = cap[i];
//     e = e.toLowerCase()
//     small.push(e)
// }
let small = [
    'a', 
    'b', 
    'c', 
    'd', 
    'e', 
    'f', 
    'g', 
    'h', 
    'i', 
    'j', 
    'k', 
    'l', 
    'm', 
    'n', 
    'o', 
    'p', 
    'q', 
    'r', 
    's', 
    't', 
    'u', 
    'v', 
    'w', 
    'x', 
    'y', 
    'z'
]
//all numbers
let num = [
    '1', 
    '2', 
    '3', 
    '4', 
    '5', 
    '6', 
    '7', 
    '8', 
    '9', 
    '0'
]
// only 4 special characters for simplicity
let spec = [
    '!', 
    '@', 
    '#', 
    '$'
]
//contains generated non shuffled characters for password 
let pass = []
//contains generated shuffled characters for password 
let passes = []
//function to get random character
function getrand(arr, num, len, arr1){
    for (let i = 0; i < num; i++) {
        const e = arr[Math.floor(Math.random()*len)];
        arr1.push(e)
    }
}
//calling the functions on arrays
getrand(cap, 3, cap.length, pass)
getrand(small, 4, small.length, pass)
getrand(num, 2, num.length, pass)
getrand(spec, 1, spec.length, pass)
//shuffling the characters
getrand(pass, 10, pass.length, passes)
//turning array to string
let password = passes.join("")
//outputting the password
console.log(password)
