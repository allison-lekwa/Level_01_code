//Write a function that takes 2 numbers as input. 
//If either of the numbers is 3 AND the sum of the numbers 
//contains a 3 then return true. Otherwise return false.

function threeDetector(num1, num2){
    var sum = 0;
    var container = 0;
    if( num1 == 3 || num2 == 3){
        sum = num1 + num2;
        sumList = sum.toString().split('').map(Number);
        for(var i = 0; i < sumList.length; i++){
            if( sumList[i] == 3){
                container = sumList[i];
            }
        }
    }
    if(container == 3){
        console.log("true");
    }else{
        console.log("false");
    }
}

threeDetector(3,36);