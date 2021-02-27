//Write a function that combines two lists by alternatingly 
//taking elements and returns the result
//eg combine([11,22,33], [1,2,3]) should return

//This function combines two list of equal lenghts
function ListCombination(list1, list2){
    lengthOfList = list1.length;
    combineList = []
    for(var i = 0; i < lengthOfList; i++){
        combineList.push(list1[i], list2[i])
    }
    console.log(combineList)
}

//Testing code
ListCombination([1,23,456], [4,57,89])