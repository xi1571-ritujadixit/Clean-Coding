const findLeaders = require('./LeadersInArray');

describe("#findLeaders", () => {

    test("It returns the leaders given an array", () => {
        expect(findLeaders([13, 5, 4, 32, 5, 1])).toEqual([1, 5, 32])
    })

    test("It returns the leaders given an array", () => {
        expect(findLeaders([16, 17, 4, 3, 5, 2])).toEqual([2, 5, 17])
    })

})