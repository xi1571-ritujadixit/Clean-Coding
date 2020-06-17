const trappedWater = require('./TrappingRainWater');

describe("#trappedWater", () => {

    test("It returns the trapped water given an input array", () => {
        expect(trappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
    })

    test("It returns the trapped water given an input array", () => {
        expect(trappedWater([2, 0, 2])).toEqual(2)
    })

    test("It returns the trapped water given an input array", () => {
        expect(trappedWater([3, 0, 2, 0, 4])).toEqual(7)
    })

})