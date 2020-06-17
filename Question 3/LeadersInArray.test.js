const findLeaders = require('./LeadersInArray');

describe("#findLeaders", () => {

    test("It returns the leaders given an array", () => {
        expect(findLeaders([13, 5, 4, 32, 5, 1])).toEqual([1, 5, 32])
    })

})