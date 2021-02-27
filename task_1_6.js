function longest(arr){
    var lgth = 0;
    var longest;

    //This snipet of code evaluates the longest string in the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    //This snipet of code outputs the longest words
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == longest.length) {
            console.log(arr[i])
        }
    }
    
}

//Testing code
longest(['the', 'those', 'that'])