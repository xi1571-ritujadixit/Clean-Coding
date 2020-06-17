// Algorithm :- https://www.geeksforgeeks.org/merge-two-sorted-arrays/

function mergeArray(array1, array2) {
    let mergedArray = [];
    let index1 = 0;
    let index2 = 0;
    let mergedArrayIndex = 0;
  
    while (mergedArrayIndex < (array1.length + array2.length)) {
  
        let isArray1Depleted = index1 >= array1.length;
        let isArray2Depleted = index2 >= array2.length;
  
        if (!isArray1Depleted && (isArray2Depleted || (array1[index1] < array2[index2]))) {
            mergedArray[mergedArrayIndex] = array1[index1];
            index1++;
        } else {
            mergedArray[mergedArrayIndex] = array2[index2];
            index2++;
        } 
  
        mergedArrayIndex++;
    }
  
    return mergedArray;
}

module.exports = mergeArray