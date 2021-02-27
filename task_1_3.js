//Write a function that takes 2 numbers as input. 
//If either of the numbers is 65, OR if the sum of 
//the numbers is 65 then return true. Otherwise return false.

function sixtyFiveDetector(num1, num2){
    sum = num1 + num2;
    if(num1 == 65 || num2 == 65 || sum ==65){
        console.log("true");
    }else{
        console.log("false");
    }
}

//Testing code
sixtyFiveDetector(55,56);