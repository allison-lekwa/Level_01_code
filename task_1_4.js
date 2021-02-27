//Write a function, name it square. It takes in an integer and then
// prints out a square using the hash character.
//eg square(2) should print 

function square(number){
    var specialChar = "#"
    for(var i = 1; i <= number; i++){
        console.log(specialChar.repeat(number));
    }
}

//Testing code snipet
square(4);