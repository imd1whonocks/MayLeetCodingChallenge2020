/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    // const first = coordinates[0];
    // const last = coordinates[coordinates.length - 1];
    // const slope = (last[1] - first[1])/(last[0] - first[0])
    // for (let i = 1 ; i < coordinates.length - 2; i++) {
    //     const temp = coordinates[i];
    //     if ((temp[1] - first[1]) / (temp[0] - first[0]) != slope ) {
    //         return false
    //     }
    // }
    // return true;
    for (let i = 2; i < coordinates.length; i++) {
        if (
            findSlope(coordinates[i], coordinates[i-2]) != findSlope(coordinates[i], coordinates[i-1])
        ) {
            return false;   
        }
    }
    return true;
};
const findSlope = (p1, p2) => {
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}