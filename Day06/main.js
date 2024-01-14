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

console.log(sayHello("Kenyan"))