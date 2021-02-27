//Write a function, name it square. It takes in an integer and then
// prints out a square using the hash character.
//eg square(2) should print 

function square(number){
    var specialChar = "#"
    if(number > 0){
        for(var i = 1; i <= number; i++){
            console.log(specialChar.repeat(i));
        }

    }else if(number < 0){
        number = number*(-1)
        for(var i = number; i >= 0; i--){
            console.log(specialChar.repeat(i));
        }
    }
    
}

//Testing code snipet
square(-4);