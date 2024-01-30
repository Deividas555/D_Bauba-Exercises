function getSecondFromBothEnds(a) {
    a.sort((x, y) => x - y);
    let s1 = a[1];

    a.sort((x, y) => y - x);
    let s2 = a[1];

    return { s1, s2 };
}
let arr = [1, 2, 3, 5, 88, 99, 0.5, 1.5, 225];

console.log(getSecondFromBothEnds(arr));