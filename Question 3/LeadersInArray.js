// Algorithm :- https://www.geeksforgeeks.org/leaders-in-an-array/

function findLeaders(inputArray){
    
    var rightmostElement = inputArray[inputArray.length-1];
    var leadersArray = [rightmostElement];
    
    for(var i = inputArray.length-1; i >= 0; i--){
    
        if(inputArray[i] > rightmostElement) {
            rightmostElement = inputArray[i];
            leadersArray.push(inputArray[i])      
        }
    }
    
    return leadersArray;
}

// console.log(findLeaders([13, 5, 4, 32, 5, 1]));

module.exports = findLeaders