function isPalindrome(word){
    const changedToLc = word.toLowerCase()
    let reversed = changedToLc.split('').reverse().join('')

    if (changedToLc===reversed) {
        return true
        
    } else {
        return false
    }
    

    // console.log("messy".split('').reverse().join(''))
    

}


 console.log(isPalindrome("RadAR"))


function sayHello (nationality){
    switch (nationality) {
        case "Kenyan":
            return "Habari yako?";
            break;
        case "German":
            return "Wie gehts es dir?";
            break;
        case "Spanish":
            return "¿Cómo estás?"
        case "French":
            return "Comment vas-tu?" 
            break; 
        case "Dutch":
            return "Hoe is het met je?" 
            break;    
        default:
            break;
    }
}

console.log(sayHello("French"))

// function declaration
function doMultiplication (num1, num2) {
    let multiplication = num1 * num2
    return multiplication
}

console.log(doMultiplication(23,67))

// const dodivision = (num1, num2) => {
//     let division = num1 / num2
//     re/turn division
// }
// console.log(dodivision(90,3))

const dodivision = (num1, num2) => num1 / num2
    
console.log(dodivision(90,3))

// function expression
let sum = function(num1,num2){
    return num1 + num2;
};
const result = sum(45,69)

console.log(result )
