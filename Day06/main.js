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
