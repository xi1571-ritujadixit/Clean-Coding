const mergeArray = require('./MergeSortedArray.js');

describe("#mergeArray", () => {

    test("It returns the merged sorted array given two sorted arrays", () => {
        expect(mergeArray([3, 5, 6, 10, 11, 20],[1, 2, 7, 8, 15, 19])).toEqual([1,  2,  3,  5,  6, 7,  8, 10, 11, 15, 19, 20])
    })

    test("It returns the merged sorted array given two sorted arrays", () => {
        expect(mergeArray([1, 3, 4, 5],[2, 4, 6, 8])).toEqual([1, 2, 3, 4, 4, 5, 6, 8])
    })

    test("It returns the merged sorted array given two sorted arrays", () => {
        expect(mergeArray([5, 8, 9],[4, 7, 8])).toEqual([4, 5, 7, 8, 8, 9])
    })

})