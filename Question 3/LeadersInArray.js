// Algorithm :- https://www.geeksforgeeks.org/leaders-in-an-array/

function findLeaders(inputArray){
    
    var rightMostElement = inputArray[inputArray.length-1];
    var leadersArray = [rightMostElement];
    
    for(var i = inputArray.length-1; i >= 0; i--){
    
        if(inputArray[i] > rightMostElement) {
            rightMostElement = inputArray[i];
            leadersArray.push(inputArray[i])      
        }
    }
    
    return leadersArray;
}

module.exports = findLeaders