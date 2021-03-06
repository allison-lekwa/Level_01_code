
//This function sums of the multiples of 3 and 5 below 1000
function multiplesOfThreeAndFive(){
    var sumOfMultiples = 0;
    for(var number = 0; number < 1000; number++){
        if(number % 3 == 0 && number % 5 == 0 ){
            sumOfMultiples += number;

        }
    }
    console.log(sumOfMultiples);
    
}

//Testing code
multiplesOfThreeAndFive();