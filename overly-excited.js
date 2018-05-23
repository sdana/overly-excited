// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = ["this", "was", "a", "very", "interesting", "and", "fun", "challenge", "and", "this", "is", "a", "very", "long", "sentence"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, theCharacter) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let counter = 1
    let moreBangs = ""
    for (let i = 0; i < theWordArray.length; i++) {
        
        if (counter !== 0 && counter % 3 === 0){
            moreBangs += `${theCharacter}`
            //if divisible by 3, add a !
            buildMeUp += ` ${theWordArray[i]}${moreBangs}`
        }
        else {
            // Concatenate the new word onto buildMeUp
            buildMeUp += ` ${theWordArray[i]}`
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
        //increment counter variable
        counter++
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "$")
addExcitement(newSentence, "*")