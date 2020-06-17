// Alogirthm :- https://www.geeksforgeeks.org/trapping-rain-water/

const trappedWater = (inputArray) => {

    const length = inputArray.length;
  
    const left = [];
    const right = [];
  
    let leftMax = 0;
    let rightMax = 0;
  
    for (let i = 0, j = length - 1; i < length, j >= 0; i++, j--) {
        left[i] = leftMax;
        leftMax = Math.max(leftMax, inputArray[i]);
    
        right[j] = rightMax;
        rightMax = Math.max(rightMax, inputArray[j]);
    }
  
    let unitsTrapped = 0;
    for (let i = 0; i < length; i++) {
        let water = Math.min(left[i], right[i]) - inputArray[i];
        unitsTrapped += water > 0 ? water : 0;
    }
  
    return unitsTrapped;
};

module.exports = trappedWater;
